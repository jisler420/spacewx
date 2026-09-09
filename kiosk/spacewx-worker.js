/* SpaceWx background poller. Runs even when the tab is in the background. */
const HAPI = "https://hapi.spaceweather.knmi.nl/hapi/data";

function parseT(t) {
  let s = String(t || "").trim().replace(" ", "T");
  if (!s) return NaN;
  s = s.replace(/\.(\d{3})\d+/, ".$1");
  if (!/[zZ]|[+-]\d{2}:?\d{2}$/.test(s)) s += "Z";
  const ms = Date.parse(s);
  return Number.isFinite(ms) ? ms : NaN;
}

function parseHapiCsv(text, keys) {
  const out = [];
  String(text || "").split(/\n/).forEach(function (line) {
    if (!line || line.charAt(0) === "#") return;
    const p = line.trim().split(",");
    const t = parseT(p[0]);
    if (!Number.isFinite(t)) return;
    const rec = { t: t };
    let ok = false;
    keys.forEach(function (k, i) {
      const v = Number(p[i + 1]);
      if (Number.isFinite(v) && v > -1e20 && v < 1e20 && v !== -9999) {
        rec[k] = v;
        ok = true;
      }
    });
    if (ok) out.push(rec);
  });
  return out;
}

async function grab(u) {
  const r = await fetch(u, { cache: "no-store" });
  if (!r.ok) throw new Error(String(r.status));
  const ct = r.headers.get("content-type") || "";
  return ct.includes("json") || u.endsWith(".json") ? r.json() : r.text();
}

async function settled(u) {
  try {
    return await grab(u);
  } catch (e) {
    return null;
  }
}

function isoH(d) {
  return d.toISOString().replace(/\.\d{3}Z$/, "Z");
}

async function hapi(id, params, start, stop) {
  const u = HAPI + "?id=" + id + "&parameters=" + params + "&start=" + start + "&stop=" + stop + "&format=csv";
  const txt = await settled(u);
  return txt ? parseHapiCsv(typeof txt === "string" ? txt : String(txt), params.split(",")) : [];
}

async function collect() {
  const now = new Date();
  const start = isoH(new Date(now.getTime() - 36 * 3600000));
  const stop = isoH(new Date(now.getTime() + 3600000));
  const [mag, plasma, enlil, hp, kp, sc, kf, dayTxt, dst, dstPred, hemi, aurora, hp30txt] = await Promise.all([
    hapi("solar_wind_mag_rt", "bt,bx_gsm,by_gsm,bz_gsm", start, stop),
    hapi("solar_wind_plasma_rt", "density,speed,temperature", start, stop),
    hapi("solar_wind_plasma_enlil_metoffice", "density,speed,bt", start, stop),
    hapi("hp30_index", "Hp30", start, stop),
    settled("https://services.swpc.noaa.gov/products/noaa-planetary-k-index.json"),
    settled("https://services.swpc.noaa.gov/products/noaa-scales.json"),
    settled("https://services.swpc.noaa.gov/products/noaa-planetary-k-index-forecast.json"),
    settled("https://services.swpc.noaa.gov/text/3-day-forecast.txt"),
    settled("https://services.swpc.noaa.gov/products/kyoto-dst.json"),
    settled("https://services.swpc.noaa.gov/json/geospace/geospace_dst_1_hour.json"),
    settled("https://services.swpc.noaa.gov/text/aurora-nowcast-hemi-power.txt"),
    settled("https://services.swpc.noaa.gov/json/ovation_aurora_latest.json"),
    settled("./hp30.txt"),
  ]);
  return { mag, plasma, enlil, hp, kp, sc, kf, dayTxt, dst, dstPred, hemi, aurora, hp30txt, fetchedAt: Date.now() };
}

async function loop() {
  try {
    const data = await collect();
    postMessage({ type: "update", data });
  } catch (e) {
    postMessage({ type: "error", error: String(e && e.message ? e.message : e) });
  }
}

onmessage = function (e) {
  if (e.data && e.data.type === "poll") loop();
  if (e.data && e.data.type === "config") arm(e.data.pollSec);
};

let pollMs = 30000;
let waitTimer = null;
let beatTimer = null;
function arm(sec) {
  const n = [30, 300].indexOf(Number(sec)) >= 0 ? Number(sec) : 30;
  pollMs = n * 1000;
  if (waitTimer) clearTimeout(waitTimer);
  if (beatTimer) clearInterval(beatTimer);
  waitTimer = setTimeout(function () {
    loop();
    beatTimer = setInterval(loop, pollMs);
  }, pollMs - (Date.now() % pollMs));
}

loop();
arm(30);

# SpaceWx

Space-weather dashboard. Aurora oval, day/night terminator, NOAA numbers, TGO Europe stackplot, USGS North America stackplot, WSA-Enlil. No ham-radio layers.

- Repo: https://github.com/jisler420/spacewx
- Live: https://jisler420.github.io/spacewx/
- Settings: https://jisler420.github.io/spacewx/settings.html

## Use it

Open the Live link in any browser with internet.

Settings takes a US 5-digit ZIP. Leave it blank and it stays **Grand Forks, ND 58201**.

Same page works on a Raspberry Pi in Chromium if you want it on a wall. There is no custom `.img.xz`.

## Files

| File | What |
|---|---|
| `kiosk/index.html` | Live dashboard |
| `kiosk/settings.html` | ZIP settings |
| `FEEDS.md` | NOAA / TGO / USGS sources |
| `.github/workflows/pages.yml` | Publishes the site |

## Feeds

See `FEEDS.md`. Failover + stale/down labels. TGO H GIF refreshes about every 6 minutes.

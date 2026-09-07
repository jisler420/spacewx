# SpaceWx Pi Image

A Raspberry Pi wall display for **space weather** — aurora oval, day/night terminator, clocks, and open NOAA / NASA feeds.
No ham-radio layers (no DX cluster, POTA, ADIF, rig control).

Repo: https://github.com/jisler420/spacewx-pi-image

## Status

| Piece | State |
|---|---|
| Kiosk web app | In this repo (`kiosk/index.html`) |
| First-boot / settings (location, timezone) | In the kiosk |
| Auto resolution | Yes — fills whatever screen you open |
| Flashable `.img.xz` on Releases | **Not built yet** |

Open the kiosk on a PC first: download `kiosk/index.html` or use GitHub Pages once it is enabled.

## How this matches what you asked

1. **Resolution** — automatic. The page is fullscreen CSS (`100vw` × `100vh`). On a Pi kiosk it follows the HDMI display (1080p, 1600×960, 4K).
2. **Home location** — first visit shows a setup panel (lat, lon, timezone). Change it later with the gear.
3. **Map** — night side + NOAA OVATION aurora oval + UTC and local clocks.
4. **Feeds** — NOAA SWPC (no API key). List in `FEEDS.md`.
5. **`.img.xz`** — GitHub Actions will try this later. A full Pi OS image is multi-GB and often fails on free runners. Do not wipe the HamClock card until a Release actually exists.

## Try it now

1. Open `kiosk/index.html` in Chrome/Firefox (needs internet for NOAA + map tiles).
2. Enter home lat/lon (Sioux Falls is about `43.55`, `-96.73`, `America/Chicago`).
3. Leave the HamClock microSD alone until you like this screen.

## Later: Pi card

When an `.img.xz` lands under [Releases](https://github.com/jisler420/spacewx-pi-image/releases):

1. Download it.
2. Write it with Raspberry Pi Imager → Use custom.
3. Boot the Pi.

Until then, stock Raspberry Pi OS + Chromium kiosk pointing at this HTML is the working path.

# SpaceWx

Space-weather dashboard. Aurora oval, day/night terminator, clocks, NOAA numbers, TGO Europe stackplot, USGS North America stackplot. No ham-radio layers.

- Repo: https://github.com/jisler420/spacewx
- Live: https://jisler420.github.io/spacewx/
- Settings: https://jisler420.github.io/spacewx/settings.html

## Use it

Open the live link in any browser with internet. ZIP is under Settings. US 5-digit only. Skip / blank uses Grand Forks, ND **58201**. Change it anytime.

Or clone this repo and open `kiosk/index.html` locally.

## On a Raspberry Pi

No custom image. Stock Raspberry Pi OS + Chromium pointed at the live URL is enough.

## Feeds

See `FEEDS.md`. Public NOAA / USGS / TGO sources. If a feed fails, the next URL is tried. Down/stale is labeled on the page.
Europe H plot is the official TGO GIF, refreshed about every 6 minutes.

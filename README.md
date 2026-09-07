# SpaceWx Pi Image

Space-weather wall clock for Raspberry Pi 5. Aurora oval, clocks, NOAA numbers, TGO Europe stackplot, USGS North America stackplot. No ham-radio layers.

Repo: https://github.com/jisler420/spacewx-pi-image

## Status

| Piece | State |
|---|---|
| Live display | `kiosk/index.html` |
| Settings | `kiosk/settings.html` — US 5-digit ZIP |
| Default location if ZIP skipped | Grand Forks, ND **58201** |
| Flashable `.img.xz` | Not on Releases yet |

## Try it now

Open these in a desktop browser (needs internet):

- Live: https://github.com/jisler420/spacewx-pi-image/blob/main/kiosk/index.html (use Raw, or clone and open the file)
- Settings: `kiosk/settings.html`

Leave the HamClock microSD in the Pi until a Release `.img.xz` exists.

## First-boot rules

- ZIP only (US 5-digit).
- Skip / blank → 58201 Grand Forks.
- Change later in Settings.
- No personal QTH is compiled into the image.

## Feeds

See `FEEDS.md`. Automatic failover. Stale/down is labeled on the dashboard.
Europe H plot is the official TGO GIF, refreshed every 6 minutes.

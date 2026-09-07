# Flashable .img.xz

This is **phase 2**. It is not ready.

A HamClock-style card is a full Raspberry Pi OS (desktop + kiosk + first-boot), compressed to `.img.xz`, published on GitHub Releases. Building that takes a dedicated pipeline (pi-gen or image customize) and often 30–90 minutes. Free GitHub-hosted runners frequently run out of time or disk.

When it works you will:

1. Open https://github.com/jisler420/spacewx-pi-image/releases
2. Download `spacewx-*-arm64.img.xz`
3. Raspberry Pi Imager → Use custom → that file → write the microSD

Until a Release asset exists, use `kiosk/index.html` on any computer or on stock Raspberry Pi OS.

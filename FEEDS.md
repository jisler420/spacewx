# Open space weather feeds

Public, no API key. The kiosk tries **primary**, then **backup**, then **last resort**. If a URL fails (timeout, 404, bad JSON), it moves to the next. You do not pick feeds by hand.

Primary family: NOAA SWPC — https://services.swpc.noaa.gov

## Failover order

### Aurora oval
1. https://services.swpc.noaa.gov/json/ovation_aurora_latest.json
2. https://services.swpc.noaa.gov/products/noaa-ovation-aurora-latest.json
3. Images if JSON is down:
   - https://services.swpc.noaa.gov/images/animations/ovation/north/latest.jpg
   - https://services.swpc.noaa.gov/images/animations/ovation/south/latest.jpg

### Planetary Kp
1. https://services.swpc.noaa.gov/products/noaa-planetary-k-index.json
2. https://services.swpc.noaa.gov/products/noaa-planetary-k-index-forecast.json (latest observed row)

### Dst
1. https://services.swpc.noaa.gov/products/kyoto-dst.json
2. https://services.swpc.noaa.gov/json/geospace/geospace_dst_1_hour.json

### Solar flux (SFI / F10.7)
1. https://services.swpc.noaa.gov/products/summary/10cm-flux.json
2. https://services.swpc.noaa.gov/json/f107_cm_flux.json

### X-ray
1. https://services.swpc.noaa.gov/json/goes/primary/xrays-6-hour.json
2. https://services.swpc.noaa.gov/json/goes/secondary/xrays-6-hour.json

### Solar wind speed
1. https://services.swpc.noaa.gov/products/summary/solar-wind-speed.json
2. https://services.swpc.noaa.gov/json/rtsw/rtsw_wind_1m.json

### IMF Bz / Bt
1. https://services.swpc.noaa.gov/products/summary/solar-wind-mag-field.json
2. https://services.swpc.noaa.gov/json/rtsw/rtsw_mag_1m.json

### R / S / G scales
1. https://services.swpc.noaa.gov/products/noaa-scales.json

### Alerts (optional banner)
1. https://services.swpc.noaa.gov/products/alerts.json
2. https://services.swpc.noaa.gov/text/3-day-forecast.txt

HamClock backends are not used.

---
title: Bonjour / mDNS pro IoT
description: Jak funguje mDNS (Bonjour) pro discovery IoT zařízení v lokální síti a kde je dostupné na různých platformách.
created: 2026-04-08
updated: 2026-04-08
---

mDNS (Multicast DNS) umožňuje IoT zařízením oznámit svou přítomnost v lokální síti bez potřeby centrálního DNS serveru. Apple tuto technologii implementuje pod názvem Bonjour.

## Dostupnost podle platformy

| Platforma | Implementace | Instalace |
|-----------|-------------|-----------|
| macOS | Bonjour | vestavěné |
| Windows | Bonjour | [instalátor od Apple](https://support.apple.com/downloads/bonjour-for-windows) |
| Linux | avahi | obvykle předinstalováno (`avahi-daemon`) |
| ESP32 / ESP-IDF | mDNS component | [dokumentace Espressif](https://docs.espressif.com/projects/esp-idf/en/latest/api-reference/protocols/mdns.html) |

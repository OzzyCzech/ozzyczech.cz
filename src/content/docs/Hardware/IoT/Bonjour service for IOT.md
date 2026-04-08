---
title: Bonjour / mDNS pro IoT
description: Jak funguje mDNS (Bonjour) pro discovery IoT zařízení v lokální síti — platformy, service types a přechod z AFP na SMB.
created: 2026-04-08
updated: 2026-04-08
---

mDNS (Multicast DNS) umožňuje IoT zařízením a NAS úložištím oznámit svou přítomnost v lokální síti bez potřeby centrálního DNS serveru. Apple tuto technologii implementuje pod názvem Bonjour.

## Dostupnost podle platformy

| Platforma | Implementace | Instalace |
|-----------|-------------|-----------|
| macOS | Bonjour | vestavěné |
| Windows | Bonjour | [instalátor od Apple](https://support.apple.com/downloads/bonjour-for-windows) |
| Linux | avahi | obvykle předinstalováno (`avahi-daemon`) |
| ESP32 / ESP-IDF | mDNS component | [dokumentace Espressif](https://docs.espressif.com/projects/esp-idf/en/latest/api-reference/protocols/mdns.html) |

## Service types

Zařízení oznamují své služby pomocí mDNS service types:

| Service type | Protokol | Stav |
|---|---|---|
| `_smb._tcp` | SMB | ✅ doporučeno |
| `_nfs._tcp` | NFS | ✅ doporučeno |
| `_http._tcp` | HTTP | ✅ webová rozhraní, API |
| `_mqtt._tcp` | MQTT | ✅ IoT messaging |
| `_afpovertcp._tcp` | AFP | ❌ deprecated |

## AFP → SMB migrace

AFP (Apple Filing Protocol) byl deprecated v **macOS 15.5**. Apple plánuje úplné odstranění v macOS 16.

:::danger
Nepoužívej AFP pro nová zařízení ani sdílené složky. Jakýkoli NAS, IoT zařízení nebo server inzerující `_afpovertcp._tcp` by měl být překonfigurován na SMB.
:::

**Jak migrovat:**

1. Na NAS (Synology, TrueNAS, …) vypni AFP service a ponech pouze SMB
2. Ujisti se, že NAS inzeruje `_smb._tcp` přes mDNS
3. Na Macu připoj sdílené složky přes `smb://` místo `afp://`
4. Otestuj před upgradem na macOS 16, dokud AFP ještě funguje

## Sources

- [AFP Is Now Officially Deprecated in macOS – Here's What It Means and How to Prepare](https://elements.tv/blog/afp-is-deprecated-heres-how-to-prepare/) — timeline a praktické dopady deprecace

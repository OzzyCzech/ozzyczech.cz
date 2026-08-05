---
title: Client-side web tools
description: Self-hostable web tool suites that process files entirely in the browser — BentoPDF and OmniTools — and why they run on almost any hardware.
created: 2026-08-05
updated: 2026-08-05
---

Web-based utility suites that do all their work in the browser via WebAssembly, so files are never uploaded. They replace the ad-heavy "free online PDF converter" sites, and because the server only ships static assets, they self-host on hardware that could never run the equivalent server-side pipeline.

## Why client-side matters

Two consequences follow from moving processing into the browser:

- **Privacy** — documents stay on the device. There is no server-side copy to leak, log, or retain.
- **Negligible hosting cost** — the host serves static files and nothing else. Compute comes from whichever device opens the page. An [XDA report](https://www.xda-developers.com/raspberry-pi-zero-2-w-is-a-perfect-subscription-killer/) runs both tools below on a Raspberry Pi Zero 2 W — 512 MB RAM, no SSD slot — alongside [Vaultwarden](/security/security-list/) and Tailscale for remote access.

## Tools

- **[BentoPDF](https://bentopdf.com/)** — privacy-first PDF toolkit with 50+ tools across organize, edit, convert-to-PDF, convert-from-PDF, and secure/optimize; runs PyMuPDF, Ghostscript, CoherentPDF, LibreOffice and Tesseract.js as WASM modules, giving it Office conversion and multilingual OCR without a backend ([GitHub](https://github.com/alam00000/bentopdf))
- **[OmniTools](https://github.com/iib0011/omni-tools)** — general-purpose suite covering image, video and audio editing, PDF split/merge, text and list manipulation, date/time and math helpers, and JSON/CSV/XML handling; React + TypeScript, MIT licensed, ships as a 28 MB Docker image

## Self-hosting

Both are single-container deployments. OmniTools serves on port 8080; BentoPDF publishes two images — use the `-simple` variant for internal deployments, since the other bundles a marketing site intended for public SaaS hosting:

```bash
docker run -p 3000:8080 ghcr.io/alam00000/bentopdf-simple:latest
```

BentoPDF supports custom branding, selectively disabling tools, and hosting under a subdirectory.

:::caution
BentoPDF loads its WASM modules from the jsDelivr CDN at runtime by default. A self-hosted instance is therefore not self-contained until the modules are bundled locally — the project documents an air-gapped configuration for this.
:::

## Licensing

OmniTools is MIT. BentoPDF is dual-licensed: **AGPL-3.0**, which requires publishing source for derivative works, or a paid commercial licence for proprietary use. The AGPL terms matter for the embedded WASM components too — PyMuPDF, Ghostscript and CoherentPDF are each AGPL-3.0.

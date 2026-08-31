---
title: Client-side web tools
description: Web tool suites that process files entirely in the browser — BentoPDF, OmniTools and pdfpix — why the self-hostable ones run on almost any hardware, and how their licensing differs.
created: 2026-08-05
updated: 2026-08-31
---

Web-based utility suites that do all their work in the browser via WebAssembly, so files are never uploaded. They replace the ad-heavy "free online PDF converter" sites. Where the suite is also open source, the server only ships static assets, so it self-hosts on hardware that could never run the equivalent server-side pipeline.

## Why client-side matters

Two consequences follow from moving processing into the browser:

- **Privacy** — documents stay on the device. There is no server-side copy to leak, log, or retain.
- **Negligible hosting cost** — the host serves static files and nothing else. Compute comes from whichever device opens the page. An [XDA report](https://www.xda-developers.com/raspberry-pi-zero-2-w-is-a-perfect-subscription-killer/) runs both self-hostable tools below on a Raspberry Pi Zero 2 W — 512 MB RAM, no SSD slot — alongside [Vaultwarden](/security/security-list/) and Tailscale for remote access.

## Tools

- **[BentoPDF](https://bentopdf.com/)** — privacy-first PDF toolkit with 50+ tools across organize, edit, convert-to-PDF, convert-from-PDF, and secure/optimize; runs PyMuPDF, Ghostscript, CoherentPDF, LibreOffice and Tesseract.js as WASM modules, giving it Office conversion and multilingual OCR without a backend ([GitHub](https://github.com/alam00000/bentopdf))
- **[OmniTools](https://github.com/iib0011/omni-tools)** — general-purpose suite covering image, video and audio editing, PDF split/merge, text and list manipulation, date/time and math helpers, and JSON/CSV/XML handling; React + TypeScript, MIT licensed, ships as a 28 MB Docker image
- **[pdfpix](https://pdfpix.com/)** — hosted PDF-only suite of 31 tools built around self-verification: every tool reads its own output back with an independent reader (pdf.js) and compares it against the source, discarding any result that fails the check instead of offering it for download — a document with selectable text either comes out with selectable text or does not come out at all. Covers compression to a target size, page organisation, N-up/booklet/poster layouts, form filling and field creation, signatures and flattening, redaction with a redaction-held check, metadata removal, repair, print preflight, and conversion to and from JPG/PNG/HEIC/TIFF/WebP/BMP/CBZ, Markdown, CSV and Excel. Closed source, so unlike the two above it cannot be self-hosted

## Self-hosting

BentoPDF and OmniTools are single-container deployments; pdfpix is not distributed for self-hosting. OmniTools serves on port 8080; BentoPDF publishes two images — use the `-simple` variant for internal deployments, since the other bundles a marketing site intended for public SaaS hosting:

```bash
docker run -p 3000:8080 ghcr.io/alam00000/bentopdf-simple:latest
```

BentoPDF supports custom branding, selectively disabling tools, and hosting under a subdirectory.

:::caution
BentoPDF loads its WASM modules from the jsDelivr CDN at runtime by default. A self-hosted instance is therefore not self-contained until the modules are bundled locally — the project documents an air-gapped configuration for this.
:::

## Licensing

OmniTools is MIT. BentoPDF is dual-licensed: **AGPL-3.0**, which requires publishing source for derivative works, or a paid commercial licence for proprietary use. The AGPL terms matter for the embedded WASM components too — PyMuPDF, Ghostscript and CoherentPDF are each AGPL-3.0.

pdfpix is closed source but publishes the licence of every library it ships to the browser, and its engine choices are shaped by those terms. It deliberately avoids MuPDF and Ghostscript — the AGPL-3.0 engines BentoPDF is built around, via PyMuPDF — using instead pdf.js (Apache-2.0) for reading and verification and `@cantoo/pdf-lib` (MIT) for writing, with mozjpeg/libjpeg-turbo for JPEG encoding, harfbuzzjs for font subsetting and UTIF.js for TIFF. The two copyleft components it does ship are confined to a single route each and loaded only on demand: an LGPL HEIC decoder (libheif + libde265) and a GPL-2.0-or-later print-preflight plate renderer (Poppler + OpenJPEG) that runs in its own worker, with pinned source archives and SHA-256 sums published so the WASM build can be reproduced.

:::note
Client-side processing removes the document upload, not the telemetry. pdfpix routes analytics through PostHog and its own Cloudflare-hosted run counter — tool choice, file count and size, page count, timings and outcomes — while excluding the tool workspace from event and session capture, so no file bytes, names, text or metadata leave the browser.
:::

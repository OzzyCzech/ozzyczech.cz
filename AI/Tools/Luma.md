---
title: Luma
description: Luma AI's generative media models — Ray 3.2 for video with keyframe control and HDR, Uni-1 for images — available through the web app and API.
created: 2026-07-28
updated: 2026-07-28
---

[Luma](https://lumalabs.ai/) builds generative media models for video and image, positioned around the goal of models that can generate, understand and operate in the physical world. Two models are current: **Ray 3.2** for video and **Uni-1** for images, both reachable from the web app and the API.

## Ray 3.2

Ray 3.2 covers four workflows in one model — text-to-video, image-to-video, **Modify Video** (video-to-video editing) and **Reframe** (aspect-ratio change).

The headline change over earlier Ray versions is **multi-keyframe control**. Previous releases took a single start frame, sometimes an end frame, and generated the motion between them. Ray 3.2 allows up to **16 keyframes inside a single clip**, so the point where a look shifts, a movement lands or a beat hits is specified rather than inferred ([lumalabs.ai/ray](https://lumalabs.ai/ray)).

Other capabilities:

- **Resolutions** — 360p, 540p, 720p and 1080p
- **Native 16-bit HDR** generation with **EXR export**, aimed at post-production pipelines
- **Expressive Facial Performance** — up to 8 faces
- **Performance Tracking** — skeletal pose transfer
- **Improved Motion Transfer** across subjects and styles

:::caution
Text-to-video and image-to-video generate **no audio**. Modify Video and Reframe preserve the source clip's audio, but for the generative modes voiceover, music and effects have to be added separately.
:::

## Uni-1

Uni-1 (current release 1.1) is the image model, described as brand-aware — it generates and edits assets while holding style consistent across a set. It handles text-to-image, image editing, style transfer and multi-panel output at up to **2048 px** ([API docs](https://docs.agents.lumalabs.ai/guides/images/)).

## API

Both models are exposed through the [Luma API](https://lumalabs.ai/api), with the console at [platform.lumalabs.ai](https://platform.lumalabs.ai) and reference at [docs.agents.lumalabs.ai](https://docs.agents.lumalabs.ai).

| Model | IDs | Notes |
| --- | --- | --- |
| Ray 3.2 | `ray-3.2`, `ray-3.2+hdr` | up to 1080p; 20 s max for video-to-video |
| Uni-1.1 | `uni-1`, `uni-1-max` | up to 2048 px |

Ray requests are split by `type`: `video` for generation, `video_edit` for editing, `video_reframe` for aspect-ratio changes.

## Dream Machine

**Dream Machine** was the original name of Luma's video product and is the name most references still use. It has been folded into the main web app — `lumalabs.ai/dream-machine` now redirects to `lumalabs.ai/app`.

## Open Physical AI Lab

Alongside the products, Luma runs the **Open Physical AI Lab**, an open-science effort aimed at generalization in physical AI, with work published openly.

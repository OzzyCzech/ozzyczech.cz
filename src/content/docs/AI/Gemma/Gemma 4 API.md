---
title: Gemma 4 API
description: Přehled způsobů volání Gemma 4 přes API — Ollama lokálně, Google AI Studio a OpenRouter. Ukázky v Pythonu, cURL a JavaScriptu.
created: 2026-04-12
updated: 2026-04-12
---

Tři hlavní způsoby, jak volat Gemma 4 přes API: lokálně přes Ollama, přes Google AI Studio (free tier) nebo přes OpenRouter (OpenAI-kompatibilní). Každý se hodí na jiný use case.

## Ollama — lokální API

Pokud máte [Ollama nainstalovanou](../gemma-4-na-digitalocean), běží API server na `localhost:11434`. Žádný API klíč, žádné limity, kompletně zdarma.

### Generování

```python
import requests

response = requests.post("http://localhost:11434/api/generate", json={
    "model": "gemma4",
    "prompt": "Explain async/await in Python like I'm 10",
    "stream": False
})

print(response.json()["response"])
```

```bash
curl http://localhost:11434/api/generate -d '{
  "model": "gemma4",
  "prompt": "Explain async/await in Python like I am 10",
  "stream": false
}'
```

```javascript
const response = await fetch("http://localhost:11434/api/generate", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    model: "gemma4",
    prompt: "Explain async/await in Python like I'm 10",
    stream: false,
  }),
});

const data = await response.json();
console.log(data.response);
```

### Chat API (multi-turn)

Pro konverzace s historií zpráv:

```python
import requests

response = requests.post("http://localhost:11434/api/chat", json={
    "model": "gemma4",
    "messages": [
        {"role": "system", "content": "You are a helpful coding tutor."},
        {"role": "user", "content": "What's the difference between a list and a tuple?"}
    ],
    "stream": False
})

print(response.json()["message"]["content"])
```

### Streaming

```python
import requests
import json

response = requests.post("http://localhost:11434/api/generate", json={
    "model": "gemma4",
    "prompt": "Write a short story about a debugging session at 3am",
    "stream": True
}, stream=True)

for line in response.iter_lines():
    if line:
        chunk = json.loads(line)
        print(chunk.get("response", ""), end="", flush=True)
```

:::tip
Ollama je ideální pro vývoj a experimenty — žádné náklady, úplné soukromí, funguje offline. Rychlost závisí na hardwaru.
:::

## Google AI Studio

Google nabízí Gemma 4 přes AI Studio API s free tierem. Běží na Google TPU infrastruktuře, takže je to rychlé.

### Získání API klíče

1. Jděte na [aistudio.google.com](https://aistudio.google.com/)
2. Klikněte na „Get API Key"
3. Vytvořte klíč

### Python SDK

```bash
pip install google-generativeai
```

```python
import google.generativeai as genai

genai.configure(api_key="YOUR_API_KEY")

model = genai.GenerativeModel("gemma-4-27b-it")
response = model.generate_content("Write a Python decorator for retry logic")

print(response.text)
```

### cURL

```bash
curl "https://generativelanguage.googleapis.com/v1beta/models/gemma-4-27b-it:generateContent?key=YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "contents": [{
      "parts": [{"text": "Write a Python decorator for retry logic"}]
    }]
  }'
```

### Free tier limity

| Limit | Hodnota |
|-------|---------|
| Požadavky za minutu (RPM) | 15 |
| Požadavky za den (RPD) | 1 500 |
| Tokeny za minutu | 1 000 000 |

### Error handling

```python
import google.generativeai as genai
from google.api_core import exceptions

genai.configure(api_key="YOUR_API_KEY")
model = genai.GenerativeModel("gemma-4-27b-it")

try:
    response = model.generate_content("Your prompt here")
    print(response.text)
except exceptions.ResourceExhausted:
    print("Rate limit hit. Wait a minute and try again.")
except exceptions.InvalidArgument as e:
    print(f"Bad request: {e}")
except exceptions.NotFound:
    print("Model not found. Check the model name.")
```

### Streaming

```python
import google.generativeai as genai

genai.configure(api_key="YOUR_API_KEY")
model = genai.GenerativeModel("gemma-4-27b-it")

response = model.generate_content(
    "Write a short story about a debugging session at 3am",
    stream=True
)

for chunk in response:
    print(chunk.text, end="", flush=True)
```

## OpenRouter (OpenAI-kompatibilní)

OpenRouter používá stejný formát jako OpenAI API — pokud máte kód pro GPT, stačí změnit model string.

### Získání API klíče

1. Registrace na [openrouter.ai](https://openrouter.ai/)
2. Dobití kreditu (minimum $5)
3. Vygenerování API klíče

### Python

```python
import requests

response = requests.post(
    "https://openrouter.ai/api/v1/chat/completions",
    headers={
        "Authorization": "Bearer YOUR_OPENROUTER_KEY",
        "Content-Type": "application/json",
    },
    json={
        "model": "google/gemma-4-27b-it",
        "messages": [
            {"role": "user", "content": "Compare React and Vue in 5 bullet points"}
        ],
    },
)

print(response.json()["choices"][0]["message"]["content"])
```

### OpenAI Python SDK

```python
from openai import OpenAI

client = OpenAI(
    base_url="https://openrouter.ai/api/v1",
    api_key="YOUR_OPENROUTER_KEY",
)

response = client.chat.completions.create(
    model="google/gemma-4-27b-it",
    messages=[
        {"role": "user", "content": "Explain monads in plain English"}
    ],
)

print(response.choices[0].message.content)
```

### Streaming

```python
from openai import OpenAI

client = OpenAI(
    base_url="https://openrouter.ai/api/v1",
    api_key="YOUR_OPENROUTER_KEY",
)

stream = client.chat.completions.create(
    model="google/gemma-4-27b-it",
    messages=[{"role": "user", "content": "Write a short story"}],
    stream=True,
)

for chunk in stream:
    content = chunk.choices[0].delta.content
    if content:
        print(content, end="", flush=True)
```

## Srovnání

| | Ollama (lokální) | Google AI Studio | OpenRouter |
|---|---|---|---|
| Cena | Zdarma | Free tier (15 RPM) | Pay per token |
| Rychlost | Závisí na HW | Rychlé (Google TPU) | Rychlé |
| Soukromí | Kompletní (offline) | Data jdou na Google | Data jdou k poskytovateli |
| Rate limity | Žádné | 15 RPM / 1 500 RPD | Podle kreditu |
| OpenAI kompatibilní | Částečně | Ne (vlastní SDK) | Ano |
| Ideální pro | Soukromí, vývoj | Prototypy zdarma | Produkce, multi-model |

:::note
- **Side projekt** → Google AI Studio free tier
- **Soukromí** → Ollama lokálně
- **Produkce** → OpenRouter (flexibilita, fallback na jiné modely)
- **Učení** → Ollama (žádné API klíče, žádné limity)
:::

## Časté problémy

- **„Connection refused" na Ollama** — zkontrolujte, že Ollama server běží (`ollama serve`)
- **„Model not found" na Google AI Studio** — názvy modelů se mění, ověřte aktuální ID v [dokumentaci](https://ai.google.dev/gemma/docs)
- **Pomalé odpovědi na Ollama** — pravděpodobně běží na CPU, viz [Gemma 4 na DigitalOcean](../gemma-4-na-digitalocean) pro GPU setup
- **Timeouty** — u dlouhých generování zvyšte HTTP client timeout

## Sources

- [How to Use the Gemma 4 API](https://gemma4-ai.com/blog/gemma4-api-tutorial) — zdrojový tutoriál s ukázkami v Pythonu, cURL a JavaScriptu
- [Gemma documentation](https://ai.google.dev/gemma/docs) — oficiální Google dokumentace k Gemma modelům

---
title: Gemma 4 na DigitalOcean GPU Droplet
description: Jak nastavit Gemma 4 přes Ollama na DigitalOcean GPU Droplet s Debian 13 a RTX 4000 Ada.
created: 2026-04-09
updated: 2026-04-09
---

Návod na spuštění Gemma 4 přes [Ollama](https://ollama.com/) na DigitalOcean GPU Droplet. Ověřeno na Debian 13 (Trixie) s RTX 4000 Ada (20 GB VRAM), duben 2026.

## Modely

| Model | Stažení | Min. VRAM | Poznámka |
|-------|---------|-----------|----------|
| `gemma4:e2b` | ~7 GB | 8 GB | Nejlehčí, OK i na CPU |
| `gemma4:e4b` | ~10 GB | 6 GB | Sweet spot pro slabší GPU |
| `gemma4:26b` | ~18 GB | 16 GB | MoE (3,8B active), ideální pro RTX 4000 |
| `gemma4:31b` | ~20 GB | 24 GB | Dense, potřebuje větší GPU |

## GPU Droplet

RTX 4000 Ada — 1× GPU, 20 GB VRAM, 8 vCPU, 32 GB RAM. Lokace jen US/Kanada.

:::caution
Vypnutý droplet se účtuje dál — po testování vždy **Destroy**.
:::

## Instalace

DigitalOcean GPU Droplet s Debian 13 nemá předinstalované NVIDIA ovladače ani CUDA. Bez `nvidia-cuda-toolkit` Ollama GPU nevidí a model poběží na CPU.

```bash
# Non-free repo (nutné pro NVIDIA na Debianu)
echo "deb http://deb.debian.org/debian trixie main contrib non-free non-free-firmware" \
  > /etc/apt/sources.list.d/nvidia.list
apt-get update

# Ovladače + CUDA
apt-get install -y linux-headers-amd64 nvidia-driver firmware-misc-nonfree nvidia-cuda-toolkit

# Načtení kernel modulu
modprobe nvidia

# Ollama
curl -fsSL https://ollama.com/install.sh | sh

# Spuštění
ollama run gemma4:26b
```

### Vzdálený přístup k API

Pokud chcete přistupovat k Ollama API vzdáleně:

```bash
mkdir -p /etc/systemd/system/ollama.service.d
cat > /etc/systemd/system/ollama.service.d/override.conf <<EOF
[Service]
Environment="OLLAMA_HOST=0.0.0.0:11434"
Environment="OLLAMA_ORIGINS=*"
EOF
systemctl daemon-reload && systemctl restart ollama
```

## Ověření GPU

```bash
ollama ps
# Hledejte "100% GPU" ve sloupci PROCESSOR
```

:::note
`nvidia-smi` na Debian 13 nefunguje — balíček neobsahuje binárku. Použijte `ollama ps` nebo `lsmod | grep nvidia`.
:::

## Troubleshooting

| Problém | Řešení |
|---------|--------|
| `ollama ps` → `100% CPU` | Chybí `nvidia-cuda-toolkit`, doinstalovat a restartovat Ollama |
| `lsmod \| grep nvidia` prázdný | `modprobe nvidia`, pokud nefunguje → `reboot` |
| `Unable to locate package nvidia-driver` | Chybí non-free repo, viz výše |
| `Unable to locate package linux-headers-6.x.x...` | Použít `linux-headers-amd64` místo specifické verze |
| `nvidia-smi: command not found` | Na Debian 13 nefunkční, použít `ollama ps` |

---
title: LLM Wiki
sidebar:
  label: LLM Wiki
---

**LLM Wiki** je vzor pro osobní znalostní bázi: místo čistého RAG (pokaždé znovu hledat úryvky v dokumentech) necháváš LLM **postupně budovat a udržovat trvalou wiki** — propojené Markdown soubory mezi tebou a surovými zdroji.

## Co je RAG

**RAG (Retrieval-Augmented Generation)** je technika, kdy LLM před odpovědí nejdřív vyhledá relevantní úryvky z externích dokumentů (vektorová DB, full-text) a pak z nich složí odpověď. Znalost se neukládá — při každém dotazu se hledá znovu.

## Oproti klasickému RAG

U RAG model při každé otázce znovu skládá odpověď z fragmentů; znalost se **nekumuluje**. U LLM Wiki se po přidání zdroje informace **zapracují do struktury** (stránky entit, témata, rozporů, syntéza) a zůstávají aktualizované. Člověk většinou nepíše wiki ručně — stará se o zdroje, směr a otázky; LLM dělá sumarizaci, křížové odkazy a „účetnictví“ mezi stránkami. V praxi často **Obsidian** jako prohlížeč/graf, **agent** jako editor.

## Tři vrstvy

1. **Surové zdroje** — články, PDF, poznámky; ideálně neměnné; LLM z nich čte, nepřepisuje je.
2. **Wiki** — adresář Markdown stránek, které LLM vytváří a aktualizuje (shrnutí, entity, koncepty, odkazy).
3. **Schéma** — např. `CLAUDE.md` nebo `AGENTS.md`: pravidla struktury, konvence a workflow (ingest, odpovědi, údržba). Bez toho je agent jen chatbot.

## Základní operace

- **Ingest** — nový zdroj: čtení, diskuse, souhrn, úprava indexu a souvisejících stránek, zápis do logu.
- **Query** — odpověď z existujících stránek s citacemi; **dobré odpovědi lze znovu zapsat do wiki**, aby nezmizely v historii chatu.
- **Lint** — pravidelná kontrola: rozpor mezi stránkami, zastaralé tvrzení, sirotčí stránky, chybějící odkazy nebo témata.

## Index a log

- **`index.md`** — obsahový katalog wiki (odkazy, jednořádkové shrnutí, případně kategorie); agent ho při ingestu aktualizuje a při dotazu často čte jako první.
- **`log.md`** — chronologický, append-only záznam (ingesty, dotazy, lint); vhodné konzistentní nadpisy pro jednoduché filtrování (např. `grep`).

## Volitelné nástroje

Např. **qmd** (lokální vyhledávání v Markdownu, hybridní vyhledávání + MCP), **Obsidian Web Clipper**, pluginy (Marp, Dataview). Wiki jako **git repo** dává historii a spolupráci zdarma.

## Proč to funguje

Údržba klasické wiki lidi odrazuje (odkazy, konzistence, aktualizace). LLM zvládne najednou mnoho souborů a nudnou administrativu; člověk zůstává u kurátora zdrojů, smyslu a ověřování tam, kde záleží na pravdě.

---

Zdroj a plné znění myšlenky: [LLM Wiki (Karpathy) — GitHub Gist](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f)

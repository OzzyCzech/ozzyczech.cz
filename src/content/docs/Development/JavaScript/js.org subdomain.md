---
title: js.org subdomain
description: Jak získat bezplatnou js.org subdoménu pro GitHub Pages projekt přes js-org/js.org repozitář.
created: 2026-04-10
updated: 2026-04-10
---

[js.org](https://js.org/) poskytuje bezplatné subdomény ve tvaru `project.js.org` pro projekty hostované na GitHub Pages. Subdoména se přidává PR do veřejného repozitáře [js-org/js.org](https://github.com/js-org/js.org).

## 1. Přidat CNAME do projektu

Vytvořte soubor `public/CNAME` s názvem subdomény (Vite ho při buildu zkopíruje do `dist/`):

```
muj-projekt.js.org
```

Commitněte a pushněte — GitHub Pages deploy se spustí automaticky.

## 2. Forknout js-org/js.org

```sh
gh repo fork js-org/js.org --clone=false
```

## 3. Přidat záznam do `cnames_active.js`

V souboru `cnames_active.js` na forku přidejte řádek na správné místo (abecedně):

```js
"muj-projekt": "username.github.io/repo",
```

:::caution
GitHub username musí být **lowercase**. Formát hodnoty je `username.github.io/repo` (bez protokolu).
:::

## 4. Vytvořit PR

PR musí mířit do `js-org/js.org`, branch `master`.

**Titulek PR:** `muj-projekt.js.org`

**Body PR** — přesně dodržet formát (validuje se regexem):

```markdown
- [x] There is reasonable content on the page (see: [No Content](https://github.com/js-org/js.org/wiki/No-Content))
- [x] I have read and accepted the [Terms and Conditions](http://js.org/terms.html)
- The site content can be seen at https://username.github.io/repo/

> The site content is ... and is relevant to JavaScript developers specifically because ...
```

Pravidla:
- Oba checkboxy musí být zaškrtnuté (`[x]`)
- URL musí být plain link (ne markdown `[text](url)`)
- Blockquote musí obsahovat `The site content is` … `and is relevant to JavaScript developers specifically because` — obě části musí mít víc než 10 znaků
- Obsah projektu musí přímo souviset s JS ekosystémem

## 5. Počkat na merge

Automatické CI kontroluje formát PR description i validitu `cnames_active.js`. Po schválení a merge by subdoména měla fungovat do 24 hodin.

Šablona PR: [PULL_REQUEST_TEMPLATE.md](https://github.com/js-org/js.org/blob/master/PULL_REQUEST_TEMPLATE.md)

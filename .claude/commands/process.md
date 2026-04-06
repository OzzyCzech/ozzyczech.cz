Zpracuj nový zdroj nebo vstup do wiki podle tohoto postupu:

## 1. Identifikace vstupního materiálu

- Pokud je vstupem URL, stáhni obsah stránky (`WebFetch`) a extrahuj klíčové informace
- Pokud je vstupem text, přečti ho a identifikuj téma, klíčové pojmy a typ obsahu (nástroj, tutoriál, reference, koncept...)
- Pokud je vstupem soubor, přečti ho a porozuměj obsahu

## 2. Nalezení správného místa

Projdi existující strukturu wiki a rozhodni:

- **Existuje stránka přesně pro toto téma?** → aktualizuj ji
- **Existuje příbuzná stránka, kde to logicky patří?** → přidej sekci nebo položku
- **Jde o nástroj?** → zkontroluj `AI/Tools/`, `Development/Tools/`, `Development/Assets/`, `Inspiration/` podle zaměření
- **Jde o kód/snippet?** → `Development/Snippets/` nebo příslušný jazyk (`PHP/`, `JavaScript/`, `Tailwind/`...)
- **Neexistuje vhodné místo?** → vytvoř novou stránku; pokud ani kategorie neexistuje, zeptej se uživatele

## 3. Zpracování obsahu

- Shrň obsah vlastními slovy — nekopíruj verbatim
- Zachovej pouze to, co má trvalou hodnotu jako reference (ne novinky, ne dočasné akce)
- Ke každému faktu přiřaď zdroj; pokud zdroj chybí, nedomýšlej
- Převeď technický žargon do srozumitelné formy, ale zachovej přesné termíny
- Pokud je zdrojem nástroj/služba: zapiš název, URL, jednovětný popis a klíčové vlastnosti

## 4. Zápis do wiki

Při editaci nebo vytváření stránky:

- Dodržuj frontmatter pravidla z `CLAUDE.md`: `title`, `description`, `created`, `updated`
- Nikdy nepoužívej `#` (h1) v těle stránky
- Začni krátkým intro odstavcem (1–3 věty)
- Používej `##` pro sekce, `###` pro podsekce
- Formát pro nástroje: `**[Název](url)** — stručný popis`
- Křížové odkazy na příbuzné stránky pomocí absolutních URL cest

## 5. Kontrola konzistence

Po zápisu zkontroluj:

- Neodporuje nový obsah něčemu na jiných stránkách?
- Existují příbuzné stránky, které by měly dostat odkaz na tuto?
- Je `updated` datum aktuální?

## 6. Commit a push

- Jeden commit na jednu logickou změnu
- Zpráva ve formátu: `docs: add X to Y` nebo `docs: update X with Z`
- Vždy pushni po každém commitu

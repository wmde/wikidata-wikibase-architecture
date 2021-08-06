# Overview

Welcome to the **Wikidata & Wikibase architecture documentation**.
The canonical place to read these docs is on [Github Pages](https://wmde.github.io/wikidata-wikibase-architecture/).

Here you will find a high level overview of [Wikibase](./Glossary.md#wikibase), its surrounding systems, and some details relating to specific cases and deployments such as [Wikidata](./Glossary.md#wikidata).

Systems are documented using [arc42 structured](https://arc42.org/overview/) templtes.
You can read more about this method [at docs.arc42.org](https://docs.arc42.org/home/).

## Wikibase Systems

Wikibase has expanded far beyond the initial [MediaWiki extension](./Glossary.md#mediawiki-extension) that was created called `Wikibase`.

Multiple other MediaWiki extensions, and other surrounding systems now make up part of the Wikibase system landscape.

![Overall Context](./diagrams/03-business-context.drawio.svg)

The documentation of these systems and sub systems is currenlty a **WORK IN PROGRESS**.

- [Wikibase Repository](./systems/WikibaseRepo/01-Introduction_and_Goals.md)
  - Termbox & Termbox SSR
  - EntitySchema
  - Property Suggester
  - QualityConstraints
  - WikibaseLexeme
  - WikibaseMediaInfo
- [Wikibase Client](./systems/WikibaseClient/01-Introduction_and_Goals.md)
  - DataBridge
  - Article Placeholder
- QueryService ([wikitech docs](https://wikitech.wikimedia.org/wiki/Wikidata_query_service))
  - Query UI
  - Query Builder

## Contributing

See [CONTRIBUTING](./CONTRIBUTING.md)

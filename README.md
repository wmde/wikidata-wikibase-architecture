# Home

:::warning
WORK IN PROGRESS home of Wikibase architecture documentation.
:::

Welcome to the **Wikidata & Wikibase architecture documentation**.
The canonical place to read these docs is on [Github Pages](https://wmde.github.io/wikidata-wikibase-architecture/).

This documentation has been created to provide a high level overview of Wikidata, Wikibase and surrounding systems.

Each system uses [arc42 structured](https://arc42.org/overview/) documentation.
Detailed documentation for arc42 can be [found here](https://docs.arc42.org/home/).

## Systems

[Overview](./systems/overview/01-Introduction_and_Goals.md) provides a high level view of the whole Wikidata / Wikibase system landscape.

Multiple top level systems are identified.
Subsystems are provided in the list below for convenience.

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

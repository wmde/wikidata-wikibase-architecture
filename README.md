# Overview

:::warning
WORK IN PROGRESS home of Wikibase architecture documentation.
:::

Welcome to the **Wikidata & Wikibase architecture documentation**.
The canonical place to read these docs is on [Github Pages](https://wmde.github.io/wikidata-wikibase-architecture/).

This documentation has been created to provide a high level overview of Wikidata, Wikibase and surrounding systems.

Each system uses [arc42 structured](https://arc42.org/overview/) documentation.
Detailed documentation for arc42 can be [found here](https://docs.arc42.org/home/).

## Systems

The following diagram provides a high level view of the whole Wikidata / Wikibase system landscape. Its main goals and stakeholders are described in the following [Introduction and Goals](./Introduction_and_Goals.md) section.

![Overall Context](./diagrams/03-business-context.drawio.svg)

::: tip
The [context and scope section](./Context_and_Scope.md) has more information on the diagram above.
:::

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

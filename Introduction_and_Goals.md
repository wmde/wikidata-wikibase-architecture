# Introduction and Goals

Wikibase is an open-source software suite for creating collaborative knowledge bases, opening the door to the Linked Open Data web. It lets you store, manage and access structured data. Its two main sub-systems are the [Wikibase Repository](./systems/WikibaseRepo/01-Introduction_and_Goals.md) and [Wikibase Client](./systems/WikibaseClient/01-Introduction_and_Goals.md).

Wikibase is also the software behind [Wikidata](https://www.wikidata.org), a free, collaborative, multilingual, secondary database, collecting structured data to provide support for [Wikipedia](https://www.wikipedia.org), [Wikimedia Commons](https://commons.wikimedia.org/wiki/Main_Page), the other wikis of the [Wikimedia](https://www.wikimedia.org/) movement, and to anyone in the world.

## Requirements Overview

## Quality Goals

## Stakeholders & Expectations

Stakeholders and expectations are slowly being sorted into sub component templates.

Some stakeholders and expectations may stay at this high level though.

### Small Wikipedia editor

- Have placeholder pages be automatically generated for topics Wikidata contains data for, in order to gain more readers and thus more editors.

### Query user

Extract specific information by writing a query composed of logical combinations of triples.

### Quickstatements user

Edits Wikidata items by constructing a simple set of text commands using the [QuickStatements tool](https://www.wikidata.org/wiki/Help:QuickStatements)

### Wikidata editor

See [Wikidata editor](./systems/WikibaseRepo/01-Introduction_and_Goals.md#wikidata-editor)

### Client editor

See [WikibaseClient editor](./systems/WikibaseClient/01-Introduction_and_Goals.md#wikibase-client-editor)

### Researcher

- Quickly create visualizations based on data from Wikidata without the need to download it.

### Non Wikimedia Wikibase Project

- Create knowledge bases similar to Wikidata using our same software stack (including extensions, tools and features)
- Install, configure, update, and maintain a set of Wikibase systems with confidence.

#### Large Non Wikimedia Wikibase Project

- Import large amount of data (>1M entities) into the Wikibase quickly & efficiently.

### Product Managers

- Access to an appropriate test system for product verification for new features.

#### Wikidata Product Manager

- It should be possible to create lists from the stored structured data.
- Make the centralized data not only useful for Wikimedia projects, but also other users (researchers, apps etc.)
- Store structured data relevant to the Wiktionary project in a meaningful way, that will also be useful for Abstract Wikipedia.
- The stored data and changes must be manageable by a distributed community.
- Solution should not enforce too tight rigidity in the data (e.g. enforcing and supporting by automation symmetric properties) because “world is complex and there are always exceptions”

### Wikibase / Wikidata System Developers

- Access to a quick, easy and consistent dev system setup.
- Easily discoverable, well written documentation of the system and its parts.

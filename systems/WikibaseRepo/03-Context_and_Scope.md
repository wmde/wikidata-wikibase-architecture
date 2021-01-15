## Context and Scope

### Business Context

![Wikibase Repo business context diagram](./diagrams/03-business-context.drawio.svg)

| Neighbour              | Description                                                                                                                                                     |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| User                   | A user reading or editing the Repo's data through its web interface                                                                                             |
| Tools and Bots         | Applications and [Bots](https://www.mediawiki.org/wiki/Manual:Bots) interacting with the Repo's data programmatically                                           |
| Wikibase Client System | Wikibase Client Systems are MediaWiki applications consuming the Wikibase Repo's data. In Wikidata's case these would include Wikipedia, Wiktionary and others. |
| Wikidata Query Service | A SPARQL endpoint and graphical user interface for querying the Repo's data.                                                                                    |

### Technical Context

![Wikibase Repo technical context diagram](./diagrams/03-technical-context.drawio.svg)

::: tip
Note that updates to the Query Service from the Repo will use either Recent Changes or the event stream via EventLogging and EventGate, not both. Wikidata uses the event stream, while most third party Wikibase setups use an updater that polls the Recent Changes page.
:::

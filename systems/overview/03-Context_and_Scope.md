## Context and Scope

![Legend](../../diagrams/legend.drawio.svg)

### Business Context

![Overall Context](./diagrams/03-business-context.drawio.svg)

| Subsystem                                                             | Responsibility                                                |
| --------------------------------------------------------------------- | ------------------------------------------------------------- |
| [Wikibase Repository](./../WikibaseRepo/01-Introduction_and_Goals.md) | Data Repository                                               |
| [Wikibase Client](./../WikibaseClient/01-Introduction_and_Goals.md)   | Access view MediaWiki to a Data Repository                    |
| Query Service                                                         | Graph representation of Wikibase data with a SPARQL interface |
| Query Service UI                                                      | User interface for a SPARQL interface                         |
| Elastic Search                                                        | Indexes MediaWiki / Wikibase for search pourposes             |
| Wikimedia Commons                                                     | A source of media files for Wikibase                          |
| Quickstatements                                                       | A tool enabling mass editing of Wikibase Entities             |

### Technical Context

Wikibase extension, containing [Wikibase Repository](../WikibaseRepo/01-Introduction_and_Goals.md), [Wikibase Client](../WikibaseClient/01-Introduction_and_Goals.md) and more.

![Overall Technical Context](../../diagrams/03-dataflow-out.drawio.svg)

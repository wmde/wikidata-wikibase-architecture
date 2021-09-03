# Architecture Overview

Welcome to the **Wikidata & Wikibase architecture documentation**.
The canonical place to read these docs is on [Github Pages](https://wmde.github.io/wikidata-wikibase-architecture/).

Here you will find a high level overview of [Wikibase](./Glossary.md#wikibase), its surrounding systems, and some details relating to specific cases and deployments such as [Wikidata](./Glossary.md#wikidata).

Systems are documented using [arc42 structured](https://arc42.org/overview/) templates.
You can read more about this method [at docs.arc42.org](https://docs.arc42.org/home/).

## Wikibase Systems

Wikibase has expanded far beyond the initial [MediaWiki extension](./Glossary.md#mediawiki-extension) that was created called `Wikibase`.

Multiple other MediaWiki extensions, and other surrounding systems now make up part of the Wikibase system landscape.

To simplify things the whole system is represented as [Repository](./systems/Repository/01-Introduction.md), [Query Service](./systems/Query/01-Introduction.md) and [Client](./systems/Client/01-Introduction.md).

![Overall Context](./diagrams/03-business-context.drawio.svg)

## Other components

You may be familiar with other components, and should be able to easily navigate to their location using the table below.

| Component                                                                              | Parent System  |
| -------------------------------------------------------------------------------------- | -------------- |
| Termbox & Termbox SSR                                                                  | Repository     |
| EntitySchema                                                                           | Repository     |
| [Property Suggester](./systems/Repository/05-Building_Block_View.md#propertysuggester) | Repository     |
| QualityConstraints                                                                     | Repository     |
| WikibaseLexeme                                                                         | Repository     |
| WikibaseMediaInfo                                                                      | Repository     |
| [DataBridge](./systems/Client/05-Building_Block_View.md#data-bridge)                   | Client         |
| Article Placeholder                                                                    | Client         |
| Query UI                                                                               | Query Service  |
| Query Builder                                                                          | Query Service  |
| Quickstatements                                                                        | External tools |

## Contributing

If you would like to contribute to these docs then please read the dedicated [contributing guide](./CONTRIBUTING.md).

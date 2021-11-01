# Context and Scope

## Business Context

![Query Service business context diagram](./diagrams/03-business-context.drawio.svg)

| Neighbour  | Description                            |
| ---------- | -------------------------------------- |
| Repository | The source of data that can be queried |

## Technical Context

The query service is made up of a set of components, which all surround a core [Blazegraph](./../../Glossary.md#blazegraph) powered [SPARQL](./../../Glossary.md#sparql) backend.

The components can be deployed in mutliple configurations.

![Query Service technical context diagram](./diagrams/03-technical-context.drawio.svg)

| Component                                                    | Description                                                                       |
| ------------------------------------------------------------ | --------------------------------------------------------------------------------- |
| [Web Interfaces](./05-Building_Block_View.md#web-interfaces) | Web interfaces and UIs for interacting with the query service                     |
| [Backend](./05-Building_Block_View.md#backend)               | Main triple storage and SPARQL API access                                         |
| [Updating](./05-Building_Block_View.md#updating)             | Components to keep the Backend up to date with changes from a Wikibase Repository |

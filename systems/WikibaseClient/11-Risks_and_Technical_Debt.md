# Risks and Technical Debt

Technical debt is mainly tracked on Phabricator on the [Wikidata/Wikibase tech focus board](https://phabricator.wikimedia.org/project/view/5176/), which includes Wikibase Client tech debt.

## Risks

The following sections are an incomplete (!) list of risks, ordered by priority.

### Wikibase Client functionality depends on the Wikibase Repository Database's availability

In its current implementation [Entity Data Access](./06-Runtime_View.md#entity-data-access) works by directly accessing the Wikibase Repository's database from Wikibase Clients. This means that no meaningful Entity data can be embedded into Wikitext-generated content at the time of the Repository database's unavailability. It also means that problems with the Repository database can cause surface on Wikibase Clients, see e.g. [T195520](https://phabricator.wikimedia.org/T195520). This risk is mitigated by reducing the load on the Repository database e.g. through caching, and thorough error handling to avoid causing fatal errors.

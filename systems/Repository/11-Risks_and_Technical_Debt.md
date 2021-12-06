# Risks and Technical Debt

## Query Service

Right now "Disaster mitigations" are underway for the Wikidata Query Service.

For most Wikibase usecases the current solution is absolutly fine.

As blazegraph is no longer maintained there is an evaluation of new services happening: <https://phabricator.wikimedia.org/T206560>

See also [Wikidata\_query\_service/ScalingStrategy](https://wikitech.wikimedia.org/wiki/Wikidata_query_service/ScalingStrategy)

## Entity size / serialization

Needed for: Larger entity sizes.

As is highlighted in [this post](https://addshore.com/2021/07/what-happens-in-wikibase-when-you-make-a-new-item/) there is quite some overhead with editing larger and larger items.
And the system in its current state naturally wants to create larger and larger items.

## Dump generation

Dump generation works by one or more PHP scripts running through all entities held withing MediaWiki.
This will continue to slow

- Weekly dump generation: <https://phabricator.wikimedia.org/T206535>
- All revisions: <https://phabricator.wikimedia.org/T221504>

## SQL auto increment IDs & large tables

Wikibase makes use of MediaWiki, and MediaWiki primarily stores things in SQL.
Most tables use auto increment fields, and for large or high rate of change systems we risk hitting the default maximums.
Large tables, for certain usecases, also can experince slowdowns and other scaling challenges.

Most notably would be the [revision table](https://www.mediawiki.org/wiki/Manual:Revision_table) in MediaWiki which has a record for every edit.
By 2024 Wikidata is likley to have over 2 billion records in its revision table.

## Abuse filter

Various things have been worked on in this area, including [T204109](https://phabricator.wikimedia.org/T204109) and other tickets avoiding processing here.

Ultimately the AbuseFilter needs re working in order to make it work better for the Wikibase usecase, or other more specific solutions are needed.

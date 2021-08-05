# Architecture Constraints

## Wikimedia Production

From initial inception the primary user of  [Wikibase](./Glossary.md#wikibase) has been [Wikidata](./Glossary.md#wikidata) and other [Wikimedia sites](./Glossary.md#wikimedia-sites) which are all deployed to a somewhat restricted environment.

When applicable this environment comes with some constraints which could alter architectural decisions:

- [Performance Review](https://www.mediawiki.org/wiki/Wikimedia_Performance_Team/Performance_Review)
- [Security Readiness Reviews](https://www.mediawiki.org/wiki/Security/SOP/Security_Readiness_Reviews)

Wikimedia production also provides a certain set of resources and services that can be used as part of or next to the system.
A key requirement her is that software and services are under free and open licences.

## Wikimedia Principles

As part of the Wikimedia Movement, we develop the system with certain principles in mind.

- [Wikimedia Engineering Architecture Principles](https://www.mediawiki.org/wiki/Wikimedia_Engineering_Architecture_Principles)

## MediaWiki

Parts of the system that run as [MediaWiki extensions](./Glossary.md#mediawiki-extension) inherit certain constraints from the MediaWiki landscape.

- [MediaWiki Principles](https://www.mediawiki.org/wiki/Principles)
- [Support policy for PHP](https://www.mediawiki.org/wiki/Support_policy_for_PHP)

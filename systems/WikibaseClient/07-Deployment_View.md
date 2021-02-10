# Deployment View

Wikibase Client extensions are deployed to the production applications (Wikipedias, Wiktionaries, ...) in the same way as other [MediaWiki extensions](../../Glossary.md#mediawiki-extension). The ownership of the infrastructure and responsibility for deployments lies with the [Wikimedia Site Reliability Engineering team](https://www.mediawiki.org/wiki/Wikimedia_Site_Reliability_Engineering). All MediaWiki applications follow a weekly deploy cadence which is documented in the [deployment calendar](https://wikitech.wikimedia.org/wiki/Deployments).

Further reading:

- <https://wikitech.wikimedia.org/wiki/Wikimedia_infrastructure> is an overview of production wiki infrastructure as a whole
- <https://gerrit.wikimedia.org/r/plugins/gitiles/operations/mediawiki-config/+/21ada6d33d5d3a3775bd4d9e2a576f74a00e8e90/wmf-config/InitialiseSettings.php#20417> ff. contains the production configuration for WikibaseClient and Repo

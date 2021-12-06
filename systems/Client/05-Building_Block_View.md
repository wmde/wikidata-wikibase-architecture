# Building Block View

![Legend](../../diagrams/legend.drawio.svg)

## Whitebox Overall System

![](./diagrams/05-building-blocks.drawio.svg)

| Building Block                                              | Responsibility                                                                                                                             |
| ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| [APIs](#apis)                                               | Represent domain data through MediaWiki APIs                                                                                               |
| [Entity Data Access](#entity-data-access)                   | Access [Entities](../../Glossary.md#entity) from a Repository                                                                              |
| [Usage Tracking](#usage)                                    | Tracking the usage of Repository Entities on a Client                                                                                      |
| [Entity Change Notifications](#entity-change-notifications) | Be notified about and act on changes to Entities on a Repository                                                                           |
| [Linked Site Page Changes](#linked-site-page-changes)       | Inform a Repository of changes to [pages that are linked](../../Glossary.md#connected-pages) to Repository [Items](../../Glossary.md#item) |
| [Data Bridge](#data-bridge)                                 | Edit Item [data values](../../Glossary.md#datavalue) on the Repository                                                                     |
| [Special Pages](#special-pages)                             | WikibaseClient specific [Special Pages](../../Glossary.md#special-page)                                                                    |
| [Interwiki](#interwiki)                                     | Client side interactions with [Interwiki links](../../Glossary.md#interwiki-links)                                                         |

::: details Legacy detailed views

The future of this detailed content is undecided...

#### APIs

##### [Action API Description](https://www.wikidata.org/w/api.php?action=help\&modules=query%2Bdescription)

![Action API Description Building Block Diagram](./diagrams/05-api-description.drawio.svg)

| Building Block    | Type/Context | Responsibility                                                                        |
| ----------------- | ------------ | ------------------------------------------------------------------------------------- |
| DescriptionLookup | Lookups      | Lookup client [descriptions](../../Glossary.md#description) from a variety of sources |
| RepoLinker        | Response     | Creates links to Repository Entity concepts                                           |

##### [Action API EntityUsage](https://www.wikidata.org/w/api.php?action=help\&modules=query%2Bwbentityusage)

![Action API EntityUsage Building Block Diagram](./diagrams/05-api-entityusage.drawio.svg)

| Building Block | Type/Context | Responsibility                              |
| -------------- | ------------ | ------------------------------------------- |
| RepoLinker     | Response     | Creates links to Repository Entity concepts |

##### [Action API Meta Wikibase](https://www.wikidata.org/w/api.php?action=help\&modules=query%2Bwikibase)

![Action API Meta Building Block Diagram](./diagrams/05-api-metawikibase.drawio.svg)

| Building Block | Type/Context | Responsibility                                      |
| -------------- | ------------ | --------------------------------------------------- |
| SettingsArray  | Config       | WikibaseClient settings containing meta information |

##### [Action API Page Terms](https://www.wikidata.org/w/api.php?action=help\&modules=query%2Bpageterms)

![Action API Page Terms Building Block Diagram](./diagrams/05-api-pageterms.drawio.svg)

| Building Block  | Type/Context | Responsibility                                          |
| --------------- | ------------ | ------------------------------------------------------- |
| EntityIdLookup  | Lookups      | Lookup EntityIds from [Titles](../../Glossary.md#title) |
| TermBuffer      | Lookups      | Lookup buffered [Terms](../../Glossary.md#term)         |
| AliasTermBuffer | Lookups      | Lookup buffered [Aliases](../../Glossary.md#alias)      |
| RepoLinker      | Response     | Creates links to Repository Entity concepts             |

##### Action API Format Reference

![Action API Format Reference Building Block Diagram](./diagrams/05-api-wbformatreference.drawio.svg)

| Building Block           | Type/Context     | Responsibility                                                       |
| ------------------------ | ---------------- | -------------------------------------------------------------------- |
| Deserializer (Reference) | Input            | Get [Reference](../../Glossary.md#reference) objects from user input |
| ReferenceFormatter       | Format Reference | Format Reference as wikitext                                         |
| Parser                   | Output           | Parse Reference wikitext and output HTML                             |

#### Entity Data Access

![Entity Data Access](./diagrams/05-entitydataaccess.drawio.svg)

| Building Block                       | Responsibility                                                                                |
| ------------------------------------ | --------------------------------------------------------------------------------------------- |
| [Shared](#shared-entity-data-access) | Services shared between multiple types of entity data access (lookups, formatters, utilities) |
| [ParserFunctions](#parserfunctions)  | MediaWiki [parser function](../../Glossary.md#parser-function) binding for entity data access |
| [Scribunto](#scribunto)              | Scribunto extension binding for entity data access                                            |

##### Shared (Entity Data Access)

![Entity Data Access Shared](./diagrams/05-entitydataaccess-shared.drawio.svg)

| Building Block                  | Responsibility                                                                                    |
| ------------------------------- | ------------------------------------------------------------------------------------------------- |
| SnakFormatter                   | Formats [Snaks](../../Glossary.md#snak) in a client context                                       |
| ReferenceFormatter              | Formats references in a client context                                                            |
| StatementTransclusionInteractor | Renders the main snaks associated with a given Property on an Entity                              |
| EntityTitleLookup               | Resolves a specific sitelink on a specific Item to a [Title](../../Glossary.md#title)             |
| PropertyIdResolver              | Resolves a PropertyId from input which could be a [Label](../../Glossary.md#label) or prefixed ID |
| SnaksFinder                     | Find Snaks for claims in a given Entity, based on PropertyId                                      |

##### ParserFunctions

![Entity Data Access Parser Functions](./diagrams/05-entitydataaccess-parserfunctions.drawio.svg)

| Building Block         | Responsibility                                                                                               |
| ---------------------- | ------------------------------------------------------------------------------------------------------------ |
| Runner                 | Contains the methods called by MediaWiki when [parser functions](../../Glossary.md#parser-function) are used |
| StatementGroupRenderer | Renderer for rendering a [statement](../../Glossary.md#statement) group                                      |

##### Scribunto

![Entity Data Access Scribunto](./diagrams/05-entitydataaccess-scribunto.drawio.svg)

| Building Block                 | Responsibility                                                                      |
| ------------------------------ | ----------------------------------------------------------------------------------- |
| TermLookup                     | Lookup terms of Entities for use in LUA                                             |
| Scribunto\_LuaLibraryBase      | Registers and defined methods called by the Scribunto extension                     |
| LanguageDependentLuaBindings   | Actual implementations of various functions that can be accessed through Scribunto. |
| LanguageIndependentLuaBindings | Actual implementations of various functions that can be accessed through Scribunto. |
| LuaEntityBindings              | Actual implementations of various functions that can be accessed through Scribunto. |
| SnakSerializationRenderer      | Renders snaks for LUA                                                               |
| EntityAccessor                 | Miscellaneous functionality for exposing Entities through LUA                       |
| LuaFunctionCallTracker         | Helper for tracking accesses of Lua functions                                       |

#### Entity Change Notifications

![](./diagrams/05-entitychangenotifications.drawio.svg)

| Building Block                               | Responsibility                                                            |
| -------------------------------------------- | ------------------------------------------------------------------------- |
| [Changes](#changes)                          | Receive and handle regular Repository Entity Data changes                 |
| [ChangeModifications](#change-modifications) | Receive and handle changes to the history of Repository Entities          |
| [RecentChanges](#recent-changes)             | Represent changes to Repository Entities in a Client RecentChanges system |
| [Usage](#usage)                              | Tracking the usage of Repository Entities on a Client                     |

##### Changes

![](./diagrams/05-entitychangenotifications-changes.drawio.svg)

| Building Block      | Responsibility                                                                              |
| ------------------- | ------------------------------------------------------------------------------------------- |
| AffectedPagesFinder | Finds PageEntityUsages that are affected by a Change                                        |
| ChangeHandler       | Handles EntityChanges                                                                       |
| ChangeRunCoalescer  | A transformer for lists of EntityChanges that combines runs of changes into a single change |
| InjectRCRecordsJob  | Persists RecentChanges entries                                                              |
| PageUpdater         | Triggers various updates needed when pages will change                                      |

##### Change Modifications

![](./diagrams/05-entitychangenotifications-modifications.drawio.svg)

| Building Block                    | Responsibility                                        |
| --------------------------------- | ----------------------------------------------------- |
| ChangeModificationNotificationJob | Base for handling Entity Revision changes             |
| ChangeDeletionNotificationJob     | Handles Repository Entity Revision Deletions          |
| ChangeVisibilityNotificationJob   | Handles Repository Entity Revision Visibility Changes |

##### Recent Changes

![](./diagrams/05-entitychangenotifications-recentchanges.drawio.svg)

| Building Block         | Responsibility                                                                     |
| ---------------------- | ---------------------------------------------------------------------------------- |
| RecentChangesFinder    | Find RecentChange entries based on their meta data                                 |
| ExtenalChange          | Data object representing a revision that has changed an Entity on an external site |
| RevisionData           | Data object representing a revision on an external site                            |
| ChangeLineFormatter    | Formats and ExternalChange as HTML                                                 |
| SiteLinkCommentCreator | Deals with creating comment infomation relating to SiteLink changes                |

#### Usage

<!---
This has become quite a big building block. It can likely be split up further, possibly splitting out "subscription" related components and/or dividing it into read and write components?
-->

![](./diagrams/05-entitychangenotifications-usage.drawio.svg)

UsageAspectTransformer is only used outside of this block and perhaps shouldn't live here

| Building Block                                      | Responsibility                                                                                                               |
| --------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| UsageLookup                                         | Find EntityUsages for pages                                                                                                  |
| EntityUsage                                         | Data object representing the usage of an Entity (but not identifying where it is used)                                       |
| PageEntityUsages                                    | Data object associating a EntityUsage with a Page ID                                                                         |
| UsageAccumulator                                    | Interface allowing accumulation of usage tracking information for a given page                                               |
| UsageTrackingSnakFormatter                          | SnakFormatter implementation that will accumulate usage in a UsageAccumulator                                                |
| UsageTrackingLanguageFallbackLabelDescriptionLookup | LanguageFallbackLabelDescriptionLookup implementation that will accumulate usage in a UsageAccumulator                       |
| UsageDeduplicator                                   | De-duplicates entity usage listsfor performance and storage reasons                                                          |
| SubscriptionManager                                 | Persists infomation about pages being "subscribed" to updates for an Entity                                                  |
| UsageTracker                                        | Persists infomation about the EntityUsages of a page                                                                         |
| UsageAspectTransformer                              | Transforms usage aspect based on a filter of aspects relevant in some context.                                               |
| BulkSubscriptionUpdater                             | Bulk inserts for subscriptions into wb\_changes\_subscription based on wbc\_entity\_usage.                                   |
| AddUsagesForPageJob                                 | Job for scheduled invocation of UsageUpdater which is triggered by a MediaWiki hook related to Wikitext-based content edits. |
| UsageUpdater                                        | Service for updating usage tracking and associated change subscription information.                                          |
| populateEntityUsage                                 | Maintenance script for populating wbc\_entity\_usage based on the page\_props table.                                         |
| updateSubscriptions                                 | Maintenance script for inserting subscriptions into wb\_changes\_subscription based on wbc\_entity\_usage.                   |

#### [Linked Site Page](../../Glossary.md#connected-pages) Changes

![Linked Site Page Changes](./diagrams/05-linkedsitepagechanges.drawio.svg)

| Building Block     | Responsibility                                                                |
| ------------------ | ----------------------------------------------------------------------------- |
| UpdateRepo         | Update the repository after certain changes have been performed in the client |
| UpdateRepoOnDelete | Update the repository after page deletes in the client                        |
| UpdateRepoOnMove   | Update the repository after page moves in the client                          |

#### Data Bridge

Data Bridge is a frontend component enabling Repository edits on the Client via the Repository API.

![Data Bridge](./diagrams/05-databridge.drawio.svg)

| Building Block                | Responsibility                                                                                       |
| ----------------------------- | ---------------------------------------------------------------------------------------------------- |
| [Data Access](#data-access)   | A group of classes and interfaces for interacting with WikibaseRepo data and MediaWiki functionality |
| [Presentation](#presentation) | UI components for presentation                                                                       |
| Store                         | State management of the UI components                                                                |
| [MediaWiki](#mediawiki)       | Logic that has to do with Data Bridge attaching itself in the right places on the wiki article       |
| [ChangeOp](#changeop)         | Strategies for applying changes (update or replace) to the entity                                    |
| Tracking                      | Tracking data bridge usage and errors                                                                |

##### Data Access

![Data Bridge Data Access](./diagrams/05-databridge-dataaccess.drawio.svg)

| Building Block                        | Responsibility                                                                                                                         |
| ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| Errors                                | Provide context about errors that might occur in Data Bridge. The native Error TypeScript class is used                                |
| ApiErrors                             | Error returned from the Repo API                                                                                                       |
| Other Errors                          | Error that may occur in Data Bridge and are not related to the API, e.g. an error on saving                                            |
| Repo API                              | Implementations of WikibaseRepo API requests                                                                                           |
| Reading API                           | Implementations of WikibaseRepo API requests that have to do with reading from repository                                              |
| Writing API                           | Implementations of WikibaseRepo API requests that have to do with writing to repository                                                |
| ApiEntityLabelRepository              | A repository to get the [label](../../Glossary.md#label) of specific entity in a specific language                                     |
| ApiPageEditPermissionErrorsRepository | A repository for determining potential permission errors when editing a page.                                                          |
| ApiPropertyDataTypeRepository         | A repository to get the [datatype](../../Glossary.md#datatype) of a property                                                           |
| ApiRenderReferencesRepository         | A repository to render reference JSON blobs into HTML strings                                                                          |
| ApiReadingEntityRepository            | A repository for reading the latest revision of an entity.                                                                             |
| ApiRepoConfigRepository               | A repository to get the configuration from the Wikibase repository instance where the data is going to be saved                        |
| ApiWritingRepository                  | Saves the modified entity                                                                                                              |
| CombiningPermissionsRepository        | A repository for determining potential permission errors when using the Data Bridge                                                    |
| TrimmingWritingRepository             | A WritingEntityRepository that compares the old and new entity data and sends parts that changed to an underlying ApiWritingRepository |
| SpecialPageReadingEntityRepository    | A repository for reading the latest revision of an entity                                                                              |

##### Presentation

![Data Bridge Presentation](./diagrams/05-databridge-presentation.drawio.svg)

| Building Block            | Responsibility                                                                                                                |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| UI Components             | All presentational components that construct Data Bridge's modal and its contents                                             |
| Plugins and Utilities     | Logic which is common for several components, e.g. representing messages from mw's i18n mechanism                             |
| Error Components          | Front end components that represent an error which occurred in Data Bridge                                                    |
| Call To Action Components | Front end components that require an action from the user                                                                     |
| Base components           | Purely presentational components, e.g. a button. Those components will be replaced by Design System components in the future. |
| Messages                  | A wrapper around MediaWiki's i18n mechanism                                                                                   |
| ClientRouter              | Format page urls for client                                                                                                   |
| RepoRouter                | Format page urls for a repository                                                                                             |
| BridgeConfig              | Configuration needed in some UI components, e.g. the link for reporting issues with data bridge                               |

##### MediaWiki

![Data Bridge MediaWiki](./diagrams/05-databridge-mediawiki.drawio.svg)

| Building Block           | Responsibility                                                                                                                |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| Dispatcher               | Dispatches Data Bridge to the appropriate DOM element in the wiki article                                                     |
| BridgeDomElementSelector | Selects elements in a wiki article's DOM that can be overloaded with Data Bridge                                              |
| SelectedElement          | An interface which describes a DOM element to which Data Bridge is dispatched                                                 |
| subscribeToEvents        | Actions taken on the wiki page when certain data bridge events occur. E.g. reload the page when the data bridge edit is saved |
| prepareContainer         | Creates a container element based on OO.ui.Dialog in which Data Bridge is placed on the wiki page                             |
| EventTracker             | An abstraction layer for MediaWiki's event tracker                                                                            |

##### ChangeOp

![Data Bridge Change Op](./diagrams/05-databridge-changeop.drawio.svg)

| Building Block            | Responsibility                                                                     |
| ------------------------- | ---------------------------------------------------------------------------------- |
| ReplaceMutationStrategy   | Strategy for replacing a [statement](../../Glossary.md#statement)                  |
| StatementMutationStrategy | Interface for a statement mutation strategy                                        |
| UpdateMutationStrategy    | Strategy for updating a statement                                                  |
| StatementMutationError    | Represents an error that can occur when mutating a statement                       |
| StatementMutationFactory  | Chooses the right mutation strategy based on the edit decision (replace or update) |

#### Special Pages

![Special Pages Building Block Diagram](./diagrams/05-special-pages.drawio.svg)

| Building Block                                  | Type/Context   | Responsibility                                                              |
| ----------------------------------------------- | -------------- | --------------------------------------------------------------------------- |
| [Special Pages](../../Glossary.md#special-page) | WikibaseClient | Provide entity usage meta information                                       |
| SpecialEntityUsage                              | WikibaseClient | Lists client wiki pages that use a given entity ID and the aspects they use |
| SpecialPagesWithBadges                          | WikibaseClient | Shows a list of pages with a given [badge](../../Glossary.md#badge)         |
| SpecialUnconnectedPages                         | WikibaseClient | Lists client pages that are not connected to repository items               |

#### Interwiki

![Interwiki Building Block Diagram](./diagrams/05-interwiki.drawio.svg)

| Building Block    | Responsibility                                                                                        |
| ----------------- | ----------------------------------------------------------------------------------------------------- |
| populateInterwiki | Maintenance script that populates the interwiki table in the client's MediaWiki DB with list of sites |

:::

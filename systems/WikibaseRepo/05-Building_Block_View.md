# Building Block View

## Whitebox Overall System

TBA

## External Interfaces

### Action API Edit Entity

![Alt Text](./diagrams/05-api-wbeditentity.drawio.svg)

|  Building Block | Type/Context  | Responsibility   |
| ------------ | ------------ | ------------ |
| ModifyEntity   |  base class | Base class for API modules modifying a single entity  |
| EntityIdParser | Handling user input | Interface for objects that can parse strings into EntityIds  |
| StringNormalizer  | Handling user input   | Normalizes strings  |
| SiteLinkTargetProvider  | Handling user input  |  Returns the list of sites that is suitable as a sitelink target |
| enabledEntityTypes  | configuration | List of entity type identifiers (typically "item" and "property") that are configured in WikibaseRepo.entitytypes.php  |
| badgeItems  | configuration | Items allowed to be used as badges  |
| sitelinkGroups  | configuration | The site groups to use in sitelinks  |
| ContentLanguages  | configuration | A list of languages supported as content language  |
| propertyDataTypes  | configuration |  A list of property data types |
| $federatedPropertiesEnabled  | configuration | Is federated properties enabled on the wikibase  |
| EntityChangeOpProvider  | Changes applied to the entity | Turns entity change request into ChangeOp objects based on change request deserialization configured for the particular entity type  |
|  ChangeOpDeserializers | Changes applied to the entity | ChangeOpDeserializers for fields of items and properties, such as label, description, alias, claim and sitelink  |
|  ChangeOps | Changes applied to the entity | Class for holding a batch of change operations  |
| EntityTitleLookup  | lookups |   Represents an arbitrary mapping from entity IDs to wiki page titles, with no further guarantees given. The resulting title does not necessarily represent the page that actually stores the entity contents. |
|  EntityRevisionLookup | lookups | Service interface for retrieving EntityRevisions from storage |
|  EditSummaryHelper | MediaWiki binding | Helper methods for preparing summary instance for editing entity activity  |
| EntityPermissionChecker  | MediaWiki binding | Service interface for checking a user's permissions on a given entity.  |
|  EntitySavingHelper/EntityLoadingHelper | persistence | Helper classes for api modules to save and load entities.  |
| ApiErrorReporter  | API response | A component for API modules that handles error reporting  |
| ResultBuilder  | API response | Builder of MediaWiki ApiResult objects with various convenience functions for adding Wikibase concepts and result parts to results in a uniform way |

### Action API Merge Items

![Alt Text](./diagrams/05-api-wbmergeitems.drawio.svg)

|  Building Block | Type/Context  | Responsibility   |
| ------------ | ------------ | ------------ |
| ApiBase   |  base class | Base class for MediaWiki Action API modules  |
| EntityIdParser | Handling user input | Interface for objects that can parse strings into EntityIds  |
| [ItemMergeInteractor](#itemmergeinteractor) | Processing | Performs an Item merge  |
| ApiErrorReporter  | API response | A component for API modules that handles error reporting  |
| ResultBuilder  | API response | Builder of MediaWiki ApiResult objects with various convenience functions for adding Wikibase concepts and result parts to results in a uniform way |

### Special Merge Items

![Alt Text](./diagrams/05-special-mergeitems.drawio.svg)

|  Building Block | Type/Context  | Responsibility   |
| ------------ | ------------ | ------------ |
| SpecialWikibasePage   |  base class | Base class for Wikibase Special Pages  |
| EntityIdParser | Handling user input | Interface for objects that can parse strings into EntityIds  |
| TokenCheckInteractor | Handling user input | Checks a submitted edit toke  |
| [ItemMergeInteractor](#itemmergeinteractor) | Processing | Performs an Item merge  |
| EntityTitleLookup  | API response | Represents an arbitrary mapping from entity IDs to wiki page titles, with no further guarantees given. The resulting title does not necessarily represent the page that actually stores the entity contents.  |
| ExceptionLocalizer  | API response | Provide localized messages for some types of Exceptions |

## Interactors

### ItemMergeInteractor

![Alt Text](./diagrams/05-interactor-itemmerge.drawio.svg)

|  Building Block | Type/Context  | Responsibility   |
| ------------ | ------------ | ------------ |
| MergeFactory   | Changes applied to the entity | Factory for merging services  |
| [EntityRedirectCreationInteractor](#entityredirectcreationinteractor)   | Changes applied to the entity | Performs an Entity redirect creation  |
| EntityRevisionLookup | lookups | Service interface for retrieving EntityRevisions from storage |
| EntityTitleStoreLookup  | lookups | Represents a mapping from entity IDs to wiki page titles, assuming that the resulting title represents a page that actually stores the entity contents. For example, the property P1 will be resolved to the "Property" namespace and the page "Property:P1".  |
| SummaryFormatter   | MediaWiki binding | Formats Wikibase Summary objects to strings for MediaWiki |
| EntityPermissionChecker  | MediaWiki binding | Service interface for checking a user's permissions on a given entity.  |
| PermissionManager   | MediaWiki binding | A MediaWiki service class for checking permissions |
| EntityStore   | Persistence | Storage interface for Entities |

### EntityRedirectCreationInteractor

![Alt Text](./diagrams/05-interactor-entityredirect.drawio.svg)

|  Building Block | Type/Context  | Responsibility   |
| ------------ | ------------ | ------------ |
| EntityRevisionLookup | lookups | Service interface for retrieving EntityRevisions from storage |
| EntityTitleStoreLookup  | lookups | Represents a mapping from entity IDs to wiki page titles, assuming that the resulting title represents a page that actually stores the entity contents. For example, the property P1 will be resolved to the "Property" namespace and the page "Property:P1".  |
| EntityRedirectLookup  | lookups | Service interface for retrieving information about entity redirects. |
| SummaryFormatter   | MediaWiki binding | Formats Wikibase Summary objects to strings for MediaWiki |
| EntityPermissionChecker  | MediaWiki binding | Service interface for checking a user's permissions on a given entity.  |
| EditFilterHookRunner   | MediaWiki binding | Runs the MediaWiki EditFilter hook |
| EntityStore   | Persistence | Storage interface for Entities |

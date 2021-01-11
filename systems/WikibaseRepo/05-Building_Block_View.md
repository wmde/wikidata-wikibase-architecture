# Building Block View

## Whitebox Overall System

TBA

### External Interfaces

#### Action API Merge Items

![Alt Text](./diagrams/05-api-wbmergeitems.drawio.svg)

|  Building Block | Type/Context  | Responsibility   |
| ------------ | ------------ | ------------ |
| ApiBase   |  base class | Base class for MediaWiki Action API modules  |
| EntityIdParser | Handling user input | Interface for objects that can parse strings into EntityIds  |
| ItemMergeInteractor | Processing | Performs an Item merge  |
| ApiErrorReporter  | API response | A component for API modules that handles error reporting  |
| ResultBuilder  | API response | Builder of MediaWiki ApiResult objects with various convenience functions for adding Wikibase concepts and result parts to results in a uniform way |

#### Special Merge Items

![Alt Text](./diagrams/05-special-mergeitems.drawio.svg)

|  Building Block | Type/Context  | Responsibility   |
| ------------ | ------------ | ------------ |
| SpecialWikibasePage   |  base class | Base class for Wikibase Special Pages  |
| EntityIdParser | Handling user input | Interface for objects that can parse strings into EntityIds  |
| TokenCheckInteractor | Handling user input | Checks a submitted edit toke  |
| ItemMergeInteractor | Processing | Performs an Item merge  |
| EntityTitleLookup  | API response | Represents an arbitrary mapping from entity IDs to wiki page titles, with no further guarantees given. The resulting title does not necessarily represent the page that actually stores the entity contents.  |
| ExceptionLocalizer  | API response | Provide localized messages for some types of Exceptions |

### Interactors

#### ItemMergeInteractor

![Alt Text](./diagrams/05-interactor-itemmerge.drawio.svg)

|  Building Block | Type/Context  | Responsibility   |
| ------------ | ------------ | ------------ |
| MergeFactory   | Changes applied to the entity | ...  |
| EntityRedirectInteractor   | Changes applied to the entity | ...  |
| EntityRevisionLookup | lookups | Service interface for retrieving EntityRevisions from storage |
| EntityTitleStoreLookup  | lookups | Represents a mapping from entity IDs to wiki page titles, assuming that the resulting title represents a page that actually stores the entity contents. For example, the property P1 will be resolved to the "Property" namespace and the page "Property:P1".  |
| SummaryFormatter   | MediaWiki binding | Formats Wikibase Summary objects to strings for MediaWiki |
| EntityPermissionChecker  | MediaWiki binding | Service interface for checking a user's permissions on a given entity.  |
| PermissionManager   | MediaWiki binding | A MediaWiki service class for checking permissions |
| EntityStore   | Persistence | Storage interface for Entities |

#### EntityRedirectCreationInteractor

![Alt Text](./diagrams/05-interactor-entityredirect.drawio.svg)

|  Building Block | Type/Context  | Responsibility   |
| ------------ | ------------ | ------------ |
| ItemRedirectCreationInteractor   | Implementation | Items |
| EntityRevisionLookup | lookups | Service interface for retrieving EntityRevisions from storage |
| EntityTitleStoreLookup  | lookups | Represents a mapping from entity IDs to wiki page titles, assuming that the resulting title represents a page that actually stores the entity contents. For example, the property P1 will be resolved to the "Property" namespace and the page "Property:P1".  |
| EntityRedirectLookup  | lookups | Service interface for retrieving information about entity redirects. |
| SummaryFormatter   | MediaWiki binding | Formats Wikibase Summary objects to strings for MediaWiki |
| EntityPermissionChecker  | MediaWiki binding | Service interface for checking a user's permissions on a given entity.  |
| EditFilterHookRunner   | MediaWiki binding | Runs the MediaWiki EditFilter hook |
| EntityStore   | Persistence | Storage interface for Entities |

(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{468:function(e,a,t){"use strict";t.r(a);var r=t(33),i=function(e){e.options.__data__block__={mermaid_1a962853:"sequenceDiagram\n    autonumber\n    participant Blazegraph\n    participant RCPoller\n    participant Wikibase Repository\n    \n    RCPoller->>+Blazegraph: Query last updated timestamp\n    Blazegraph->>+RCPoller: Last updated time\n    RCPoller->>+Wikibase Repository: Poll API for RecentChanges since time\n    Wikibase Repository->>+RCPoller: RecentChanges\n    RCPoller->>+Wikibase Repository: Get RDF for Entities\n    Wikibase Repository->>+RCPoller: Entity RDF\n    RCPoller->>+Blazegraph: RDF Write Queries\n    RCPoller->>+Blazegraph: Update Timestamp\n    Blazegraph->>+RCPoller: Success\n",mermaid_382ee14b:"sequenceDiagram\n    autonumber\n    participant Blazegraph\n    participant RCPoller\n    \n    RCPoller->>+Blazegraph: Query last updated timestamp\n    Blazegraph->>+RCPoller: OLD Last updated time\n    Note left of RCPoller: IllegalStateException: <br/>RDF store reports the last update <br/>time is before the minimum safe poll time\n"}},n=Object(r.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"runtime-view"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#runtime-view"}},[e._v("#")]),e._v(" Runtime View")]),e._v(" "),t("h2",{attrs:{id:"rcpoller"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rcpoller"}},[e._v("#")]),e._v(" RCPoller")]),e._v(" "),t("p",[e._v("A happy path when updating happens.")]),e._v(" "),t("Mermaid",{attrs:{id:"mermaid_1a962853",graph:e.$dataBlock.mermaid_1a962853}}),t("p",[e._v("A common error case for infrequently edited wikis is when the storage timestamp in Blazegraph appears to be too old.")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://phabricator.wikimedia.org/T182394",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://phabricator.wikimedia.org/T182394"),t("OutboundLink")],1)]),e._v(" "),t("Mermaid",{attrs:{id:"mermaid_382ee14b",graph:e.$dataBlock.mermaid_382ee14b}})],1)}),[],!1,null,null,null);"function"==typeof i&&i(n);a.default=n.exports}}]);
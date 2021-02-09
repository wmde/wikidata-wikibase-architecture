module.exports = {
    title: 'Wikibase Architecture Documentation',
    description: 'I\'m all about architecture',
    /**
     * Ref：https://v1.vuepress.vuejs.org/guide/assets.html#base-url
     * Ref: https://vuepress.vuejs.org/guide/deploy.html#github-pages
     */
    base: process.env.BASE_PATH || '/',
    patterns: [
        '**/*.md',
        '!**/node_modules'
    ],
    plugins: [
        'vuepress-plugin-mermaidjs',
        '@vuepress/medium-zoom',
    ],
    /**
     * Theme configuration, here is the default theme configuration for VuePress.
     *
     * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
     */
    themeConfig: {
        repo: '',
        docsDir: '',
        docsRepo: 'wmde/wikidata-wikibase-architecture',
        docsBranch: 'main',
        editLinks: true,
        editLinkText: 'Edit this page on Github!',
        lastUpdated: true,
        activeHeaderLinks: false, // Default: true
        nav: [
            {
                text: 'Home',
                link: '/',
            },
            {
                text: 'Overview',
                link: '/systems/overview/01-Introduction_and_Goals',
            },
            {
                text: 'Wikibase Repository',
                link: '/systems/WikibaseRepo/01-Introduction_and_Goals',
            },
            {
                text: 'Wikibase Client',
                link: '/systems/WikibaseClient/01-Introduction_and_Goals',
            },
        ],
        sidebar: {
            '/systems/WikibaseRepo/': [
                '01-Introduction_and_Goals',
                '02-Architecture_Constraints',
                '03-Context_and_Scope',
                '04-Solution_Strategy',
                '05-Building_Block_View',
                '06-Runtime_View',
                '07-Deployment_View',
                '08-Concepts',
                '09-Architecture_Decisions',
                '10-Quality',
                '11-Risks_and_Technical_Debt',
            ],
            '/systems/WikibaseClient/': [
                '01-Introduction_and_Goals',
                '02-Architecture_Constraints',
                '03-Context_and_Scope',
                '04-Solution_Strategy',
                '05-Building_Block_View',
                '06-Runtime_View',
                '07-Deployment_View',
                '08-Concepts',
                '09-Architecture_Decisions',
                '10-Quality',
                '11-Risks_and_Technical_Debt',
            ],
            '/systems/overview/': [
                '01-Introduction_and_Goals',
                '02-Architecture_Constraints',
                '03-Context_and_Scope',
                '04-Solution_Strategy',
                '05-Building_Block_View',
                '06-Runtime_View',
                '07-Deployment_View',
                '08-Concepts',
                '09-Architecture_Decisions',
                '10-Quality',
                '11-Risks_and_Technical_Debt',
                '12-Glossary',
            ],
            '/': [
                '',
                'CONTRIBUTING.md',
                {
                    title: 'Decisions',
                    path: '/docs/decisions/',
                    children: [
                        '/docs/decisions/using-arc42',
                        '/docs/decisions/usecase-scope',
                        '/docs/decisions/client-repo-split',
                        '/docs/decisions/client-repo-mediawiki',
                    ]
                }
            ],
        }
    },
}

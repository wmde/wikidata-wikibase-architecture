module.exports = {
    title: 'Wikibase Architecture Documentation',
    description: 'I\'m all about architecture',
    patterns: [
        '**/*.md',
        '!**/node_modules'
    ],
    plugins: [
        'vuepress-plugin-mermaidjs',
    ],
    themeConfig: {
        repo: '',
        docsDir: '',
        lastUpdated: true,
        activeHeaderLinks: false, // Default: true
        nav: [
            {
                text: 'Home',
                link: '/',
            },
            {
                text: 'Overview',
                link: '/systems/overview/',
            },
            {
                text: 'WikibaseRepo',
                link: '/systems/WikibaseRepo/',
            },
            {
                text: 'WikibaseClient',
                link: '/systems/WikibaseClient/',
            },
        ],
        sidebar: {
            '/meta/': [
                '',
                'decisions/client-repo-split',
                'decisions/usecase-scope',
            ],
            '/systems/WikibaseRepo/': [
                '',
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
            '/systems/WikibaseClient/': [
                '',
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
            '/systems/overview/': [
                '',
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
                {
                    title: 'Decisions',
                    path: '/docs/decisions/',
                    children: [
                        '/docs/decisions/usecase-scope',
                        '/docs/decisions/client-repo-split',
                    ]
                }
            ],
        }
    },
}

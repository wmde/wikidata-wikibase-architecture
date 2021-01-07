module.exports = {
    title: 'Wikibase Architecture Documentation',
    description: 'I\'m all about architecture',
    patterns: [
        '**/*.md',
        '!**/node_modules'
    ],
    themeConfig: {
        repo: '',
        docsDir: '',
        lastUpdated: true,
        activeHeaderLinks: false, // Default: true
        nav: [
            {
                text: 'Meta',
                link: '/meta/',
            },
            {
                text: 'Overview',
                link: '/',
            },
            {
                text: 'WikibaseRepo',
                link: '/subsystems/WikibaseRepo/',
            },
            {
                text: 'WikibaseClient',
                link: '/subsystems/WikibaseClient/',
            },
        ],
        sidebar: {
            '/meta/': [
                '',
                'decisions/client-repo-split',
                'decisions/usecase-scope',
            ],
            '/subsystems/WikibaseRepo/': [
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
            '/subsystems/WikibaseClient/': [
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
        }
    },
}





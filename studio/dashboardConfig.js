export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6108de55415ce06ed7626985',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-testing-studio',
                  apiId: '086652a0-8248-4d87-bd59-4319ca6c00c7'
                },
                {
                  buildHookId: '6108de55fa1df80b468a80b6',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-testing',
                  apiId: '6ea0ba31-d25c-4109-8694-a439b389142a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Sunnychan123455/sanity-gatsby-testing',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-testing.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}

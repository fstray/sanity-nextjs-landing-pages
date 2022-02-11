export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '620688840d99320c9d5bd05a',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-6pekv1ia',
                  apiId: 'f2510427-2029-48d9-9cdc-08a2cfa878f9'
                },
                {
                  buildHookId: '62068884b5f3540895b503aa',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ido7pqbq',
                  apiId: '870813c5-16cd-4706-b0a4-2e751d44b52d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/fstray/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ido7pqbq.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}

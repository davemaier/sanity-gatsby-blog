export default {
  widgets: [
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
                  buildHookId: '5e068211c926f790349a46ff',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-6dtgpfo4',
                  apiId: '0e598c36-6299-4258-959d-c98dc193b4da'
                },
                {
                  buildHookId: '5e0682112799fcd7a3d448f8',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-bjb1wr8x',
                  apiId: 'c295c554-3155-421d-926b-d748eb2d554d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/davemaier/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-bjb1wr8x.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}

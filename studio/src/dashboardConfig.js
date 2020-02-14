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
                  buildHookId: '5e466cc4a6a1b0eb34682417',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-whcxp1ry',
                  apiId: '29f41555-5283-47f8-ba5f-2b20fe72b733'
                },
                {
                  buildHookId: '5e466cc521deab8a106294f7',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-mv33kfd1',
                  apiId: 'f527c6fa-c484-4dd7-ae83-843454c2aa63'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Jasper1997Ti/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-mv33kfd1.netlify.com', category: 'apps' }
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

// schemas/robotsConfig.js
export default {
    name: 'robotsConfig',
    type: 'document',
    title: 'robots.txt Config',
    fields: [
      {
        name: 'content',
        type: 'text',
        title: 'robots.txt Content',
      },
    ],
  }
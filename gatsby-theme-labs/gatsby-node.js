const fs =require('fs');

exports.onPreBootstrp = ({reporter}) => {
  const contentPath = 'data';

  if(!fs.existsSync(contentPath)) {
    reporter.info(`creating the ${contentPath} directory`);
    fs.mkdirSync(contentPath);
  }
}

exports.sourceNdoes = ({actions}) => {
  actions.createTypes(`
    type WeddingDetail implements Node @dontInfer {
      location: String!
      startDate: Date! @dateformat 
      startTime: String!
    }
  `)
}

exports.createPages = async ({actions, graphql, reporter}) => {
  const basePath = '/';
  actions.createPage({
    path: basePath,
    component: require.resolve('./src/templates/wedding-detail.js')
  })

  const result = await graphql(`
    query {
      allWeddingDetail(sort: { fields: startDate, order: ASC }) {
        nodes {
          id
          location
          startDate
          startTime
        }
      }
    }
  `)

  if(result.errors) {
    reporter.panic('error loading wedding details', reporter.errors);
    debugger;
    return;
  }

}

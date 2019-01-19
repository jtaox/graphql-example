
// 引入GraphQL各种方法类型

const {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLInputObjectType,
  isOutputType,
} =  require('graphql');

const {
  ArticleType
} = require('./type')

const Article = require('./../../model/article')


const articlebQueries = {
  articles: {
    type: new GraphQLList(ArticleType),
    resolve(root, params, options) {
      return new Article().find({})
    }
  }
}

module.exports = {
  articlebQueries
}


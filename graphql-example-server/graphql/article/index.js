
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
const User = require('./../../model/user')


const articlebQueries = {
  articles: {
    type: new GraphQLList(ArticleType),
    resolve(root, params, options) {
      return new Article().find({})
    }
  },
  // search: {
  //   type: new GraphQLList(ArticleType),
  //   args: {
  //     keyword: { type: GraphQLString }
  //   },
  //   resolve(root, {keyword}) {
  //     const articles = new Article().find({title: keyword})
  //     const users = new User().find({user_name: keyword})
  //     console.log(users)
  //     return [...articles, ...users]
  //   }
  // }
}

module.exports = {
  articlebQueries
}



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
  ArticleType,
  ArticleInputType
} = require('./type')

const Article = require('./../../model/article')
const User = require('./../../model/user')


const articlebQueries = {
  articles: {
    type: new GraphQLList(ArticleType),
    resolve(root, params, options) {
      const articles = new Article().find({})

      return articles.map(article => {
        const user = (new User().find({id: article.user_id}) || [])[0]
        
        return {
          ...article,
          user,
        }
      })
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

const articleMutations = {
  createArticle: {
    type: ArticleType,
    args: {
      article: {
        type: ArticleInputType
      }
    },
    resolve: (root, { article }) => {
      return new Article().insert(article)
    }
  }
}

module.exports = {
  articlebQueries, articleMutations
}


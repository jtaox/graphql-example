
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
  SearchableType
} = require('./type')

const Article = require('./../../model/article')
const User = require('./../../model/user')


const interfaceQueries = {
  search: {
    type: new GraphQLList(SearchableType),
    args:  {
      text: { type : new GraphQLNonNull(GraphQLString) }
    },
    resolve: (root, {text}) => {
      
      const articles = new Article().find({title: text})
      const users = new User().find({user_name: text})
      return [...articles, ...users]
    }
  },
}

module.exports = {
  interfaceQueries
}


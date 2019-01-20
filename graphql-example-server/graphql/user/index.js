
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
  UserType
} = require('./type')

const Article = require('./../../model/article')

const articlebQueries = {
  
}

module.exports = {
  articlebQueries
}


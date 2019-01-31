const { buildSchema, GraphQLSchema, GraphQLObjectType, GraphQLList, GraphQLNonNull, GraphQLString } = require('graphql')

const {
  articlebQueries,
  articleMutations
} = require('./article')

const {
  unionQueries
} = require('./union')

const {
  interfaceQueries
} = require('./interface')
const { ArticleType } = require("./article/type")

const { UserType } = require("./user/type")
const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "Query",
    fields: {
      ...unionQueries,
      // ...interfaceQueries,
      ...articlebQueries,
    }
  }),
  // types: [ArticleType, UserType],
  mutation: new GraphQLObjectType({
    name: "Mutation",
    fields: {
      ...articleMutations
    }
  })
});

// 使用 GraphQL Schema Language 创建一个 schema
// const schema = buildSchema(`
//   type Query {
//     hello: String
//   }
// `);

// const root = {
//   hello: () => {
//     return 'world~'
//   }
// }

module.exports = {
  schema
}
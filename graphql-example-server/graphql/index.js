const { buildSchema, GraphQLSchema, GraphQLObjectType } = require('graphql')

const {
  articlebQueries
} = require('./article')

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "Query",
    fields: {
      ...articlebQueries
    }
  }),
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
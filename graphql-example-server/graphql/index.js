const { buildSchema } = require('graphql');

// 使用 GraphQL Schema Language 创建一个 schema
const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

const root = {
  hello: () => {
    return 'world~'
  }
}

module.exports = {
  schema, root
}
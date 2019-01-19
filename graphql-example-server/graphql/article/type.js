const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
} = require("graphql");

const ArticleType = new GraphQLObjectType({
  name: "Article",
  fields: {
    id: {
      type: GraphQLID
    },
    title: {
      type: GraphQLString
    },
    content: {
      type: GraphQLString
    },
    user_id: {
      type: GraphQLID
    },
    create_time: {
      type: GraphQLString
    }
  }
})

module.exports = {
  ArticleType,
}

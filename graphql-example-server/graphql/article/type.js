const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
} = require("graphql");

const {
  SearchableType
} = require('./../interface/type')

const { UserType } = require('./../user/type')

const ArticleType = new GraphQLObjectType({
  name: "Article",
  interfaces: [SearchableType],
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
    user: {
      type: UserType
    },
    create_time: {
      type: GraphQLString
    },
  }
})

module.exports = {
  ArticleType,
}

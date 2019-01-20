const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
} = require("graphql");

const {
  SearchableType
} = require('./../interface/type')

const UserType = new GraphQLObjectType({
  name: "User",
  interfaces: [SearchableType],
  fields: {
    id: {
      type: GraphQLID
    },
    user_name: {
      type: GraphQLString
    },
    create_time: {
      type: GraphQLString,
    }
  }
})

module.exports = {
  UserType,
}

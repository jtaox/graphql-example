const { GraphQLUnionType } = require("graphql")

const { ArticleType } = require("./../article/type")

const { UserType } = require("./../user/type")

const SearchableType = new GraphQLUnionType({
  name: "Searchable",
  types: [ArticleType],
  resolveType: (data) => {
    console.log(data)
    if (data.title) {
      return ArticleType
    }

    if (data.user_name) {
      return UserType
    }
  }
})

module.exports = {
  SearchableType,
}

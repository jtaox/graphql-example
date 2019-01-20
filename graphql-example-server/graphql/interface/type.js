const {
  GraphQLInterfaceType,
  GraphQLString
} = require('graphql')

const SearchableType = new GraphQLInterfaceType({
  name: "Searchable",
  fields: {
    create_time: { type: GraphQLString }
  },
  resolveType: (data) => {
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

// 存在循环引用问题 所以放到最下面
const {
  ArticleType
} = require('./../article/type')

const {
  UserType
} = require('./../user/type')
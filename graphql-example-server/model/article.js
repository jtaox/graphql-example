const data = [
  {id: 0, title: '什么是GraphQL', content: 'GraphQL 是一个用于 API 的查询语言...', user_id: '1', create_time: Date.now},
  {id: 1, title: 'GraphQL和RESTful 的区别', content: 'API入口、数据关联...', user_id: '1', create_time: Date.now() + 86400000 },
  {id: 2, title: 'GraphQL的优点', content: '性能优化...', user_id: '1', create_time: Date.now() + 86400000 * 2},
  {id: 3, title: 'GraphQL的缺点', content: 'n + 1问题...', user_id: '2', create_time: Date.now() + 86400000 * 3},
  {id: 4, title: '什么是GraphQL Apollo', content: '提供GraphQL解决方案，简化开发...', user_id: '0', create_time: Date.now() + 86400000},
  {id: 5, title: 'GraphQL', content: 'GraphQLJS', user_id: '2', create_time: Date.now() + 86400000},
]

class Article {
  find(condition = {}) {
    return data.filter(item => {
      return Object.keys(condition).every(key => {
        return item[key] === condition[key]
      })
    })
  }
  filter(condition = {}) {
    return data.filter(item => {
      return Object.keys(condition).every(key => {
        return item[key].indexOf(condition[key]) !== -1
      })
    })
  }
}

module.exports = Article

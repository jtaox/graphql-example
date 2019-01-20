const data = [
  {id: '0', user_name: 'GraphQL', create_time: Date.now()},
  {id: '2', user_name: 'GraphQLJS', create_time: Date.now()},
  {id: '1', user_name: 'GraphQL-Apollo', create_time: Date.now()},
]

class User {
  find(condition = {}) {
    return data.filter(item => {
      return Object.keys(condition).every(key => {
        return item[key] === condition[key]
      })
    })
  }
}

module.exports = User

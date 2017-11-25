export default `
type User {
  id: Int!
  username: String!
  email: String!
  teams: [Team!]!
  manager: String!
  subscriptionType: String!
}
type RegisterResponse {
  ok: Boolean!
  user: User
  errors: [Error!]
}
type LoginResponse {
  ok: Boolean!
  token: String
  refreshToken: String
  errors: [Error!]
}
type Mutation {
  register(username: String!, email: String!, password: String!, 
    manager: String!, subscriptionType: String!): RegisterResponse!

  login(email: String!, password: String!): LoginResponse!
}
type Query {
  allUsers: [User!]!
  getUser(id: Int!): User!
}
`;

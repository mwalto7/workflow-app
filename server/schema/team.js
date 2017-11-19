export default `
type Team {
  id: Int!
  name: String!
  owner: User!
  members: [User!]!
  channels: [Channel!]!
}

type Mutation {
  createTeam(id: Int!, name: String!): Boolean!
}

type Query {
  allTeams: [Team!]!
  getTeam(id: Int!): Team!
}

`;

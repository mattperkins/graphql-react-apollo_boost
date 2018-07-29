// GraphQL Schema 
// GQL refers to schemas as typeDefs
// models === types (converted to GQL syntax)
exports.typeDefs = `
 type Software {
     _id: ID
     name: String!
     description: String!
     paradigm: String!
     discipline: String!
     dateCreated: String
     likes: Int
     username: String
 }
 type User {
     _id: ID
     username: String! @unique
     password: String!
     email: String!
     joinDate: String
     favourites: [Software]
 }

 type Query {
     getAllSoftware: [Software]
     getCurrentUser: User
 }

 type Token {
     token: String!
 }

 type Mutation {
     addSoftware(
         name: String!,
         description: String!,
         paradigm: String!,
         discipline: String!,
         username: String
     ): Software

     signinUser(
         username: String!,
         password: String!
     ): Token

     signupUser(
         username: String!,
         email: String!,
         password: String!
     ): Token

 }

 `
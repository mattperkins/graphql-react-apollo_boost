// GraphQL Schema 
// GQL refers to schemas as typeDefs
// models === types (converted to GQL syntax)
exports.typeDefs = `
    type Software {
        name: String!
        category: String!
        description: String!
        instructions: String!
        createdDate: String
        likes: Int
        uername: String
    }
    type User {
        username: String! @unique
        password: String!
        email: String!
        joinDate: String
        favourites: [Software]
    }

    type Query {
        getAllSoftware: [Software]
    }
 `
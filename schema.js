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
    }

    type Mutation {
        addSoftware(
            name: String!,
            description: String!,
            paradigm: String!,
            discipline: String!,
            username: String
        ): Software
    }

 `
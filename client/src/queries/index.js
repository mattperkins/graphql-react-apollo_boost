import { gql } from "apollo-boost"
export const GET_ALL_SOFTWARE = gql`
    query {
        getAllSoftware {
            name
            description
            paradigm
            discipline
            username
            dateCreated
            likes
            username
        }
    }
`
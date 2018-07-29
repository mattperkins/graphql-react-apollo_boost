import { gql } from "apollo-boost"

// Software Queries
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
// Software Mutations


// User Queries


// User Mutations
export const SIGNUP_USER = gql`
 mutation(
  $username: String!, 
  $email: String!, 
  $password: String!) {
  signupUser(
    username: $username, 
    email: $email, 
    password: $password) {
    token
  }
}
`
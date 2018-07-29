# RUN
## yarn run dev (concurrently script)
## yarn run server
## yarn start

# ENDPOINTS
## http://localhost:4444/graphiql
## http://localhost:3000

# Query schema structure
```
query {
  getAllSoftware {
    _id
    name
    description
    paradigm
    discipline
    dateCreated
    likes
    username
  }
}
```

# Mutation schema structure
```
mutation {
  addSoftware(name: "Python",
  description: "An interpreted high-level programming language for general-purpose programming",
  paradigm: "Object Orientated",
  discipline: "Duck, Dynamic",
  username: "Fred"){
    name
    description
    paradigm
    discipline
    uername
  }
}
```

```
mutation {
  signupUser(username: "Sandy", 
    email: "sandy@email.com", 
    password: "test1234") {
    token
  }
}
```

```
mutation(
  $username: String!, 
  $password: String!) {
  signinUser(
    username: $username, 
    password: $password) {
    token
  }
}
```
Query Variables (add to graphiql bottom left tab)
```
{
  "username": "Bob",
  "password": "test1234"
}
```

```
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
```
Query Variables (add to graphiql bottom left tab)
```
{
  "username": "Bob",
  "email": "Bob@email.com",
  "password": "test1234"
}
```
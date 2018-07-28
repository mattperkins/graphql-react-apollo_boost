# ENDPOINTS
## http://localhost:4444/graphiql

# Mutation schema structure
```
mutation{
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
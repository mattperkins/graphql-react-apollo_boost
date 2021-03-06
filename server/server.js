const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const jwt = require('jsonwebtoken')

require('dotenv').config({ path: 'variables.env' })

const Software = require('./models/Software')
const User = require('./models/User')

// GraphQL middleware
const { graphiqlExpress, graphqlExpress } = require('apollo-server-express')
const { makeExecutableSchema } = require('graphql-tools')


const { typeDefs } = require('./schema')
const { resolvers } = require('./resolvers')

// Create GraphQL schema
const schema = makeExecutableSchema({
 typeDefs: typeDefs,
 resolvers: resolvers
})

// Connect to db
mongoose
 .connect(process.env.MONGO_URI, { useNewUrlParser: true })
 .then(() => console.log('DB connected'))
 .catch(err => console.error(err))


// Initialise application
const app = express()
// specify the origin for the request
const corsOptions = {
 origin: "http://localhost:3000",
 // required by Apollo Client
 credentials: true
}
app.use(cors(corsOptions))

// Set up JWT authenitcation middleware
app.use(async (req, res, next) => {
 const token = req.headers['authorization']
 if (token !== "null") {
  try {
   const currentUser = await jwt.verify(token, process.env.SECRET)
   req.currentUser = currentUser
  } catch (err) {
   console.error(err)
  }
 }
 next()
})

// Create GraphiQL application (in browser)
app.use(
 '/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
 }))

// Add Mongoose models to GraphQL 
// which binds or connects Schemas to GraphQL
app.use(
 '/graphql',
 bodyParser.json(),
 graphqlExpress(({ currentUser }) => ({
  schema,
  context: {
   Software,
   User,
   currentUser
  }
 }))
)

const PORT = process.env.PORT || 4444

app.listen(PORT, () => {
 console.log(`Server listening on ${PORT}`)
})
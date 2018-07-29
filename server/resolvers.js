const jwt = require('jsonwebtoken')

const createToken = (user, secret, expiresIn) => {
 const { username, email } = user
 return jwt.sign({
  username,
  email,
 }, secret, {
   expiresIn
  })
}

exports.resolvers = {
 Query: {
  getAllSoftware: async (root,
   args,
   { Software }) => {
   // const allSoftware = await Software.find()
   // return allSoftware
   // shorthand =
   return await Software.find()
  }
 },
 Mutation: {
  addSoftware: async (root,
   { name, description, paradigm, discipline, username },
   { Software }) => {
   const newSoftware = await new Software({
    name,
    description,
    paradigm,
    discipline,
    username
   }).save()
   return newSoftware
  },

  signupUser: async (root,
   {
    username,
    email,
    password },
   // context = User model
   { User }) => {
   const user = await User.findOne({
    username: username
   })
   if (user) {
    throw new Error('User already exists')
   }
   const newUser = await new User({
    username,
    email,
    password
   }).save()
   return { token: createToken(newUser, process.env.SECRET, '1hr') }
  }
 } // end Mutation
} // end resolvers
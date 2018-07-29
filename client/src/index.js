import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import './index.css'
import App from './components/App'
import Navbar from './components/Navbar'
import withSession from './components/withSession'

import Signin from './components/Auth/Signin'
import Signup from './components/Auth/Signup'
import Search from './components/Software/Search'
import AddSoftware from './components/Software/AddSoftware'
import Profile from './components/Profile/Profile'

import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

const client = new ApolloClient({
 uri: 'http://localhost:4444/graphql',
 fetchOptions: {
  credentials: 'include'
 },
 request: operation => {
  const token = localStorage.getItem('token')
  operation.setContext({
   headers: {
    authorization: token
   }
  })
 },
 // GraphQLErrors
 onError: ({ networkError }) => {
  if (networkError) {
   console.log('Network Error', networkError)
   // * options for apollo in a React app
   // if(networkError.statusCode === 401) {
   // * clear token set to empty string
   // localStorage.setItem('token', '')
   // * delete token
   // localStorage.removeItem('token')}

  }
 }
})

const Root = ({ refetch, session }) => (
 <Router>
  <Fragment>
   <Navbar session={session} /> {/* placed here to make it available on all routes */}
   <Switch>
    <Route
     path="/"
     exact
     component={App}
    />
    <Route
     path="/search"
     component={Search}
    />
    <Route
     path="/signin"
     render={() => <Signin refetch={refetch} />}
    />
    <Route
     path="/signup"
     render={() => <Signup refetch={refetch} />}
    />
    <Route
     path="/software/add"
     component={AddSoftware}
    />
    <Route
     path="/profile"
     component={Profile}
    />
    <Redirect to="/" />
   </Switch>
  </Fragment>
 </Router>
)
// HOC
const RootWithSession = withSession(Root)

ReactDOM.render(
 <ApolloProvider client={client}>
  <RootWithSession />
 </ApolloProvider>,
 document.getElementById('root')
)
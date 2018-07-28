import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'

import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

const client = new ApolloClient({
    uri: 'http://localhost:4444/graphql'
})

const root = document.getElementById('root')
ReactDOM.render( 
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>, 
    root 
)
import React from 'react'
import { Query } from 'react-apollo'
import { GET_ALL_SOFTWARE } from '../queries'

const App = () => (
 <div className="center">
  <h1>Home</h1>
  {/* // Query props */}
  <Query query={GET_ALL_SOFTWARE}>
   {/* // Render Props destructured  */}
   {({ data, loading, error }) => {
    if (loading) return <div>Loading...</div>
    if (error) return <div>Error!</div>
    console.log(data)
    return (
     <p>Software</p>
    )
   }}
  </Query>
 </div>
)
export default App
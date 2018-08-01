import React from 'react'
import { Query } from 'react-apollo'
import { GET_ALL_SOFTWARE } from '../queries'
import SoftwareItem from './Software/SoftwareItem'

const App = () => (
 <div>
  {/* // Query props */}
  <Query query={GET_ALL_SOFTWARE}>
   {/* // Render Props destructured  */}
   {({ data, loading, error }) => {
    if (loading) return <div>Loading...</div>
    if (error) return <div>Error!</div>
    console.log(data.getAllSoftware);

    return (
     <ul>
      {data.getAllSoftware.map(software =>
       (
        <SoftwareItem
         key={software._id}
         {...software}
        />
       )
      )}
     </ul>
    )
   }}
  </Query>
 </div>
)
export default App
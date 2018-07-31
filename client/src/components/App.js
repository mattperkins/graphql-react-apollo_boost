import React from 'react'
import { Query } from 'react-apollo'
import { GET_ALL_SOFTWARE } from '../queries'

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
        <li style={{ padding: 40, paddingTop: 0 }}
         key={software._id}>
         <h3>{software.name}</h3>
         <p>{software.description}</p>
         <p>{software.paradigm}</p>
         <p>{software.discipline}</p>
         <p>{software.dateCreated}</p>
         <p>{software.likes}</p>
         <p>{software.username}</p>
        </li>
       )
      )}
     </ul>
    )
   }}
  </Query>
 </div>
)
export default App
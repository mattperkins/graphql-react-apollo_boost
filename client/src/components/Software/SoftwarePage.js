import React from 'react'
import { withRouter } from 'react-router-dom'

import { Query } from 'react-apollo'
import { GET_SOFTWARE } from '../../queries'

const SoftwarePage = ({ match }) => {
 const { _id } = match.params
 // console.log(_id);
 return (
  <Query query={GET_SOFTWARE} variables={{ _id }}>
   {({ data, loading, error }) => {
    if (loading) return <div>Loading...</div>
    if (error) return <div>Error!</div>
    console.log(data)


    return <div>Software Page</div>
   }}
  </Query>
 )
}

export default withRouter(SoftwarePage)
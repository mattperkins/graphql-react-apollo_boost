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

    const { name, description, paradigm, discipline, dateCreated, likes, username } = data.getSoftware
    return (
     <div className="pad softwarePage">
      <h3>{name}</h3>
      <p>{description}</p>
      <p><span>Paradigm:</span> {paradigm}</p>
      <p><span>Discipline:</span> {discipline}</p>
      <p><span>Date Created:</span> {dateCreated}</p>
      <p><span># of Likes:</span> {likes}</p>
      <p><span>Posted by:</span> {username}</p>
      <button>Like</button>
     </div>
    )
   }}
  </Query>
 )
}

export default withRouter(SoftwarePage)
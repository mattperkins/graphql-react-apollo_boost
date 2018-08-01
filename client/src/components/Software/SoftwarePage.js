import React from 'react'
import { withRouter } from 'react-router-dom'

const SoftwarePage = ({ match }) => {
 const { _id } = match.params
 console.log(_id);

 return (
  <div>Software Page</div>
 )
}

export default withRouter(SoftwarePage)
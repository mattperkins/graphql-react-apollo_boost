import React from 'react'
import { Link } from 'react-router-dom'

const SoftwareItem = ({ _id, name, description, paradigm, discipline, dateCreated, likes, username }) => (
 <li className="pad">
  <Link to={`/software/${_id}`}><h3>{name}</h3></Link>
  <p>{description}</p>
  <p>{paradigm}</p>
  <p>{discipline}</p>
  <p>{dateCreated}</p>
  <p>{likes}</p>
  <p>{username}</p>
 </li>
)
export default SoftwareItem


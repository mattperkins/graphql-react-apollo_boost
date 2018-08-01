import React from 'react'
const SoftwareItem = ({ name, description, paradigm, discipline, dateCreated, likes, username }) => (
 <li style={{ padding: 40, paddingTop: 0 }}>
  <h3>{name}</h3>
  <p>{description}</p>
  <p>{paradigm}</p>
  <p>{discipline}</p>
  <p>{dateCreated}</p>
  <p>{likes}</p>
  <p>{username}</p>
 </li>
)
export default SoftwareItem


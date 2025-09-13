import React from 'react'
import { useParams } from 'react-router'
// component to take params from url
function User() {
    const {id} = useParams()
  return (
    <div>
      UserID : {id}
    </div>
  )
}

export default User

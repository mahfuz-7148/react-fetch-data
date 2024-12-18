import React from 'react'

const UserData = ({data}) => {

    const {name, email, phone} = data
  return (
    <div className='border-2 border-green-500 p-10 m-10'>
        <h1>Name: {name} </h1>
        <h1>Email: {email} </h1>
        <h1>Phone: {phone} </h1>
    </div>
  )
}

export default UserData
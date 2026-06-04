import React, { useState } from 'react'
import { useAuthConsumer } from './ProAuthContext'
import { Button } from '@mui/material'

function ProHome() {

  return (
    <div>Pro Home</div>
  )
}

export default ProHome

export const ProAbout = () => {
    return (
        <div>Pro About</div>
    )
}

export const ProProfile = () => {
    const obj = useAuthConsumer()

    return <>
        <h1>Welcome {obj.user}</h1>
        <Button onClick={() => obj.logout()}>Logout</Button>
    </>
}
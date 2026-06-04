import { Button, Input } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useAuthConsumer } from './ProAuthContext'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'

function ProLogin() {
    const [name, setName] = useState('')
    const auth = useAuthConsumer()
    const navigate = useNavigate()
    const location = useLocation()

    const redirect = location.state || '/proHome'; //Redirect to path if u have anything in state elser, default to /proHome

    function handleLogin() {
        auth.login(name)
        navigate(redirect, {replace: true})
    }

  return (
    <>
        <Input value={name} onChange={(event) => setName(event.target.value)}/>
        <Button onClick={handleLogin}>Login</Button>
    </>
  )
}

export default ProLogin
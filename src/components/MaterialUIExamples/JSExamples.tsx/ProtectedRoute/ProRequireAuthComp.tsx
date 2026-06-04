import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuthConsumer } from './ProAuthContext'

function ProRequireAuthComp({children}:any) {
  const auth = useAuthConsumer()
  const location = useLocation()

  if(!(auth && auth.user)) {
    return <Navigate to={"/proLogin"} state={location.pathname}/>
  }

  return (
    <>
      {children}
    </>
  )
}

export default ProRequireAuthComp
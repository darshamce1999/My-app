import React from 'react'
import { Link } from 'react-router-dom'
import style from "./ProStyle.module.css"
import { useAuthConsumer } from './ProAuthContext'

function ProNavLink() {
    const obj = useAuthConsumer()
  return (
    <div className={style.link}>
        <Link to={"/proHome"}>Pro Home</Link>
        <Link to={"/proAbout"}>Pro About</Link>
        <Link to={"/proProfile"}>Pro Profile</Link>
        {!(obj && obj.user) && <Link to={"/proLogin"}>Pro Login</Link>}
    </div>
  )
}

export default ProNavLink
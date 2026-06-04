import { Switch } from '@mui/material'
import React, { useEffect, useState } from 'react'
import "./DarkMode3.css"

function DarkMode3() {
  const [state, setState] = useState(false)

  useEffect(() => {
    if(state) {
      document.documentElement.style.backgroundColor="black"
      document.documentElement.style.color="white"
    } else {
      document.documentElement.style.backgroundColor="white"
      document.documentElement.style.color="black"
    }
  }, [state])
    
  return (
    <div>
      <Switch onChange={(e) => setState(e.target.checked)}/>
    </div>
  )
}
export default DarkMode3


export function DarkMode4() {
  const [state, setState] = useState(false)

  useEffect(() => {
    if(state) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [state])

  return (
    <div>
      <Switch onChange={(e) => setState(e.target.checked)} />
    </div>
  )
}


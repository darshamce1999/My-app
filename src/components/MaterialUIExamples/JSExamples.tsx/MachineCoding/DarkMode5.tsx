import { Switch } from '@mui/material'
import React, { useEffect, useState } from 'react'
import style from "./DarkMode5.module.css"

function DarkMode5() {
    const [state, setState] = useState(false)
    
    useEffect(() => {
        if(state) {
            document.documentElement.classList.add(style.darksss)
        } else {
            document.documentElement.classList.remove(style.darksss)
        }
    }, [state])
    
  return (
    <div>
        <Switch onChange={(e) => setState(e.target.checked)} />
        Dark mode 5
    </div>
  )
}

export default DarkMode5
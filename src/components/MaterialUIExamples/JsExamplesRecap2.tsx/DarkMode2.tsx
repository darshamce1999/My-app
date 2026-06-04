import React, { useEffect, useState } from 'react'
import "./DarkMode2.css"

function DarkMode2() {
    const [isDark, setDark] = useState(false)

    useEffect(() => {
        document.documentElement.setAttribute('dark-mode', isDark? "dark": "light")
    }, [isDark])

  return (
    <>
        <input type='checkbox' onClick={() => setDark(!isDark)}/>
        <p>Just random text</p>
    </>
  )
}

export default DarkMode2
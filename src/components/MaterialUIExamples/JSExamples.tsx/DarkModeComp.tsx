import { Switch } from "@mui/material";
import { useEffect, useState } from "react";
import "./DarkModeComp.css"

export default function DarkModeComp() {
    const [isDarkMode, setDarkMode] = useState(false)

    useEffect(()=>{ 
        document.documentElement.setAttribute('data-theme', isDarkMode? "dark": "light");
        document.getElementById("randomid")?.setAttribute('data-randomid', "succeed");
    }, [isDarkMode])

    return <>
        <Switch onClick={()=>setDarkMode(!isDarkMode)}/>
        <p id="randomid">Just trying to attach data atribute to some random html elem</p>
    </>
}
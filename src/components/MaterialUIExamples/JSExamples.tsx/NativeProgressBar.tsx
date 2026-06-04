import { useEffect, useRef, useState } from "react"
import styleee from "./NativeProgressBar.module.css"

console.log(styleee)

export const NativeProgressBar = () => {
    const [state, setState] = useState(0);
    const ref = useRef<any>()

    useEffect(()=>{
        ref.current = setInterval(() => {
            setState(prev=>prev+1)
        }, 100);

        if(state > 99) {
            clearInterval(ref.current)
        }

        return () => {
            clearInterval(ref.current)
        }
    }, [state])

    return <div className={styleee.parent}>
        <span className={styleee.percemtageText}>{state}%</span>
        <div className={styleee.progress} style={{width: `${state}%`}}></div>
    </div>
}
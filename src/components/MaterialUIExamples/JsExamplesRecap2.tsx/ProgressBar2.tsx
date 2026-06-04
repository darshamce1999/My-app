import React, { useEffect, useRef, useState } from 'react'
import style from "./ProgressBar2.module.css"

function ProgressBar2() {

    const [state, setState] = useState(0)
    const ref = useRef<any>()

    useEffect(() => {
        if(state < 100) {
            ref.current = setInterval(() => {
                setState((prev) => prev + 1 )
            }, 50)
        } else {
            clearInterval(ref.current)
        }

        return () => {
            clearInterval(ref.current)
        }
    }, [state])

  return (
    <div className={style.container}>
        <div className={style.progressCount}>{state}%</div>
        <div className={style.progressBar} style={{width: `${state * 5}px`}}></div>
    </div>
  )
}

export default ProgressBar2
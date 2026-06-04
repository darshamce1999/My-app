import React, { useEffect, useRef, useState } from 'react'
import style from "./TrafficLight.module.css"

enum Ind {
    red = 'red',
    yellow = 'yellow',
    Green = 'green'
}

function TrafficLightComp() {
    const [indicator, setIndicator] = useState(Ind.red)
    const ref = useRef<any>()

    useEffect(() => {
        if(indicator == Ind.red) {
            ref.current = setTimeout(() => {
                setIndicator(Ind.Green)
            }, 4000)
        } else if (indicator == Ind.Green) {
            ref.current = setTimeout(() => {
                setIndicator(Ind.yellow)
            }, 4000)
        } else if(indicator == Ind.yellow) {
            ref.current = setTimeout(() => {
                setIndicator(Ind.red)
            }, 1000)
        }

        return () => {
            clearTimeout(ref.current)
        }
    }, [indicator])

  return (
    <div style={{width: "200px", height:"200px", backgroundColor: `${indicator}`}}>TrafficLightComp</div>
  )
}

export default TrafficLightComp


export function TrafficLightWithDesign() {
    const [indicator, setIndicator] = useState(Ind.red)
    const ref = useRef<any>()

    useEffect(() => {
        if(indicator == Ind.red) {
            ref.current = setTimeout(() => {
                setIndicator(Ind.Green)
            }, 4000)
        } else if (indicator == Ind.Green) {
            ref.current = setTimeout(() => {
                setIndicator(Ind.yellow)
            }, 4000)
        } else if(indicator == Ind.yellow) {
            ref.current = setTimeout(() => {
                setIndicator(Ind.red)
            }, 1000)
        }

        return () => {
            clearTimeout(ref.current)
        }
    }, [indicator])
    
    // return <div className={style.wrapper}>
    //     <div className={style.light} style={{backgroundColor: `${indicator == Ind.red? "red": ""}`}}>{indicator == Ind.red? "Stop": "b"}</div>
    //     <div className={style.light} style={{backgroundColor: `${indicator == Ind.yellow? "yellow": ""}`}}>{indicator == Ind.yellow? "Wait": "g"}</div>
    //     <div className={style.light} style={{backgroundColor: `${indicator == Ind.Green? "green": ""}`}}>{indicator == Ind.Green? "GO": "s"}</div>
    // </div>

    return <div className={style.wrapper}>
        <div className={style.light} style={{backgroundColor: `${indicator == Ind.red? "red": ""}`}}>{indicator == Ind.red? "Stop": ""}</div>
        <div className={style.light} style={{backgroundColor: `${indicator == Ind.yellow? "yellow": ""}`}}>{indicator == Ind.yellow? "Wait": ""}</div>
        <div className={style.light} style={{backgroundColor: `${indicator == Ind.Green? "green": ""}`}}>{indicator == Ind.Green? "GO": ""}</div>
    </div>
}
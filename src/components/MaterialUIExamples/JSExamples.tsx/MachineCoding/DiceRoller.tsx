import React, { useState } from 'react'
import style from "./DiceRoller.module.css"

function DiceRoller() {
    const [count, setCount] = useState(0)
    const [diceNumbers, setDiceNumbers] = useState<number[]>([])

    function setDice() {
        // const temp = diceNumbers.map(slice => {
        //     return Math.ceil((Math.random() * 100) % 6)
        // })
        // if(count !)
        // temp.push(Math.ceil((Math.random() * 100) % 6))

        // setDiceNumbers(temp)

        const res = new Array(count).fill(null).map(slice => {
            return Math.ceil((Math.random() * 100) % 6)
        })
        setDiceNumbers(res)
    }

  return (
    <div style={{width: "fit-content", margin: "auto", textAlign: "center"}}>
        <input type="number" value={count} onChange={(e) => setCount(Number(e.target.value))}/>
        <button onClick={setDice}>Roll</button>

        <div className={style.diceWrapper}>{diceNumbers.map(singleDice => <DiceComp count={singleDice}/>
        )}</div>
    </div>
  )
}

export default DiceRoller

function DiceComp(props:any) {

    if(props.count == 1) {
         return <div className={style.singleDotWrapper}><span className={style.dots}></span></div>
    } else if(props.count == 2) { 
        return <div className={style.twoDotWrapper}>
            <span style={{gridArea: "a"}}></span>
            <span className={style.dots} style={{gridArea: "b"}}></span>
            <span style={{gridArea: "c"}}></span>
            <span className={style.dots} style={{gridArea: "d"}}></span>
        </div>
    } else if(props.count == 3) { 
        return <div className={style.threeDotWrapper}>
            <span style={{gridArea: "a"}}></span>
            <span style={{gridArea: "b"}}></span>
            <span className={style.dots} style={{gridArea: "c"}}></span>
            <span style={{gridArea: "d"}}></span>
            <span className={style.dots} style={{gridArea: "e"}}></span>
            <span style={{gridArea: "f"}}></span>
            <span className={style.dots} style={{gridArea: "g"}}></span>
            <span style={{gridArea: "h"}}></span>
            <span style={{gridArea: "i"}}></span>
        </div>
    } else if(props.count == 5) { 
        return <div className={style.fiveDotWrapper}>
            <span className={style.dots} style={{gridArea: "a"}}></span>
            <span style={{gridArea: "b"}}></span>
            <span className={style.dots} style={{gridArea: "c"}}></span>
            <span style={{gridArea: "d"}}></span>
            <span className={style.dots} style={{gridArea: "e"}}></span>
            <span style={{gridArea: "f"}}></span>
            <span className={style.dots} style={{gridArea: "g"}}></span>
            <span style={{gridArea: "h"}}></span>
            <span className={style.dots} style={{gridArea: "i"}}></span>
        </div>
    } else {
        return  <div className={style.dotsWrapper}>{new Array(props.count).fill(null).map((dots) => <span className={style.dots}></span>)}</div>
    }
}
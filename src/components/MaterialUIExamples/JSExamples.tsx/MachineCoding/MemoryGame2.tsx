import React, { useEffect, useState } from 'react'
import style from "./MemoryGame2.module.css"

function MemoryGame2({size=4}) {
    function init() {
        const arr = new Array((size * size) / 2).fill('').map((ele, index) => index)
        const newArr = [...arr, ...arr].sort((a, b) => 0.5 - Math.random())
        return newArr
    }
    const [state, setState] = useState(init())
    const [show, setShow] = useState<number[]>([])
    const [group, setGroup] = useState<number[]>([])

    function handleClick( index:number) {        
        setGroup([...group, index])
    }

    useEffect(() => {
        if(group.length == 2) {
            if(state[group[0]] == state[group[1]]) {
                setShow([...show, state[group[0]]])
            }
            setTimeout(() => {
                setGroup([])
            }, 300)
        }
    }, [group])

    useEffect(() => {
        if(show.length == state.length /2) {
            setTimeout(() => {
                setShow([])
                setState(init())
            }, 500);
        }
    }, [show])

  return (
    <div className={style.wrapper} style={{"--col": size, "--row": size} as React.CSSProperties}>{state.map((data, index) => <button disabled={show.includes(data) || group.includes(index)} onClick={() => handleClick(index)}>{(show.includes(data) || group.includes(index)) && data}</button>)}</div>
  )
}

export default MemoryGame2
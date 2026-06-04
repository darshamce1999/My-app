import React, { useEffect, useState } from 'react'

function GridLight() {
    const [state, setState] =  useState<number[]>([])

    useEffect(() => {
        if(state.length == 9) {
            let i = 1;
        
            [...state].forEach(() => {
                i++
                setTimeout(() => {
                    setState(prev => {
                        const temp = [...prev]
                        temp.pop()
                        return temp
                    })
                }, 500 * i);
            })
        }
    }, [state])


  return (
    <div style={{display: "grid", border:"1px solid black", width:"fit-content", margin:"auto", padding:"10px", justifyContent:"center", alignContent:"center", gridTemplateRows:"repeat(3, 80px)", gridTemplateColumns:"repeat(3, 80px)", gap:"10px"}}>
        {new Array(9).fill('').map((slice:any, index:number) => <button style={{border: "1px solid black", backgroundColor: `${state.includes(index) ? "blue": ""}`}} onClick={() => {
            const temp = [...state]
            temp.push(index)
            setState(temp)
        }}
        disabled={state.includes(index)}
        ></button>)}
    </div>
  )
}

export default GridLight
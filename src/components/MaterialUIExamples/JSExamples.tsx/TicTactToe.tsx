import { useEffect, useState } from "react"
import style from "./TicTactToe.module.css"
import { Button, Stack } from "@mui/material"

export const TicTactToe = () => {
    const initialState = new Array(9).fill(null)
    const [state, setState] = useState(initialState)
    const [isXTurn, setXTurn] = useState(true)
    const [whoWon, setWhoWon] = useState(null)

    const winningCombination = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    function handleClick(index: number): void {
        const temp = [...state]
        temp[index] = isXTurn ? 'X': 'O'
        setState(temp)
        setXTurn(!isXTurn)
    }

    function winn(): void {
        for(let i=0; i<winningCombination.length; i++) {
            const [a,b,c] = [...winningCombination[i]]
            if(state[a] !== null && state[b] === state[a] && state[c] === state[a]) {
                setWhoWon(state[a])
            }
        }
    }

    useEffect(()=>{
        winn()
    }, [state])

    return <Stack sx={{width:"250px", textAlign: "center", margin:"auto"}}>
            <div>It's {isXTurn ? 'X': 'O'} turn now</div>
            <Button onClick={()=>{
                setWhoWon(null)
                setState(initialState)
                setXTurn(true)
            }}>
                Reset
            </Button>
            {whoWon && <div className={style.result}>{whoWon} has won</div>}
            {!state.includes(null) && whoWon == null && <div className={style.result}>it's draw</div>}
            <div 
                style={{display: 'grid', gridTemplateColumns: `repeat(3, 1fr)`, gridTemplateRows: `repeat(3, 1fr)`}} 
                className={style.grid}
            >
                {state.map((data, index)=> 
                    <button 
                        key={index} 
                        className={style.cell} 
                        onClick={()=>handleClick(index)} 
                        disabled={data != null}
                    >
                        {data}
                    </button>)}
            </div>
    </Stack>
}
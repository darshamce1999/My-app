import React, { useEffect, useState } from 'react'
import styled from "./MemoryGame.module.css"
import { Button, Stack } from '@mui/material';

function MemoryGameComp() {
    const boxSize = 4;
    function init() {
        const arrSize = Math.floor((boxSize * boxSize) / 2)
        const arrMap = [...new Array(arrSize)].map((_:any,index:number) => { return index})
        const initialState = [...arrMap, ...arrMap].sort((a,b)=> 0.5 - Math.random())
        return initialState.map((data, index) => { return {data, index}});
    }
    const [box, setBox] = useState<any>(init())
    const [flipped, setFlipped] = useState<any>([])
    const [matched, setMatched] = useState<any>([])
    const [won, setWon] = useState(false)

    function reset() {
        setBox(init())
        setFlipped([])
        setMatched([])
        setWon(false)
    }

    function checkMatch(index: number) {
        const firstEle = flipped[0]
        if(box[firstEle].data === box[index].data) {
            setMatched([...matched, box[firstEle].index, box[index].index])
            setFlipped([])
            if(matched.length + 2 === box.length) {
                setWon(true)
                setTimeout(() => {
                    reset()
                }, 5000)
            }
        } else {
            setTimeout(() => {
                setFlipped([])
            }, 500)
        }
    }

    function handleClick(index:number) {
        if(flipped.length === 0) {
            setFlipped([index])
        } else {
            setFlipped([...flipped, index])
            checkMatch(index)
        }
    }

    function displayNumber(index:number) {
        return flipped.includes(index) || matched.includes(index)
    }

  return <Stack sx={{width: "250px", margin: "auto", textAlign: "center"}}>
        <div>MemoryGameComp</div>
        <div 
            style={{display:"grid", gridTemplateColumns: `repeat(${boxSize}, 1fr)`, gridTemplateRows: `repeat(${boxSize}, 1fr)`}}
            className={styled.gridBox}
        >
            {box.map((data:any) =>  <button
                                    onClick={() => handleClick(data.index)}
                                    disabled={flipped.includes(data.index) || matched.includes(data.index)}
                                    className={matched.includes(data.index) ? styled.green: styled.grey}
                                    key={data.index}
                                >
                                    {displayNumber(data.index) ? data.data: "?"}
                                </button>)}
        </div>
        <Button onClick={() => {
            reset()
        }}>Reset</Button>
        {won && <div style={{color: "green"}}>you won</div>}
    </Stack>
}

export default MemoryGameComp

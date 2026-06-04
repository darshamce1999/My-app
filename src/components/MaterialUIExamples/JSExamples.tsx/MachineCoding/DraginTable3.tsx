import React, { useState } from 'react'

function DraginTable3() {
    const rowSize = 6
    const colSize = 6
    const [table, setTable] = useState(new Array(rowSize * colSize).fill(null).map((item, index) => index))
    const [start, setState] = useState<number[]>([])
    const [selected, setSelected] = useState<number[]>([])

    function handleMouseDown(index:number) {
        const row = Math.floor(index / rowSize)
        const col = index % colSize
        setState([row, col])
    }

    function handleMouseUp(index:number) {
        let startRow = start[0]
        let startCol = start[1]
        let endRow = Math.floor(index / rowSize)
        let endCol = index % colSize
        
        if(startRow > endRow) {
            [endRow, startRow] = [startRow, endRow]
        }

        if(startCol > endCol) {
            [endCol, startCol] = [startCol, endCol]
        }

        console.warn(startRow, startCol, endRow, endCol)
        const temp = []
        for(let i = startRow; i<=endRow; i++) {
            for(let j = startCol; j<=endCol; j++) {
                temp.push((i * rowSize) + j)
            }
        }
        console.warn(temp)
        setSelected(temp)
    }

  return (
    <div style={{display:"grid", justifyContent:"center", textAlign:"center", gridTemplateRows: `repeat(${rowSize}, 40px)`, gridTemplateColumns: `repeat(${colSize}, 40px)`}}>{table.map((item, index) => <span key={index} style={{userSelect:"none", backgroundColor:`${selected.includes(index)? "rgba(116, 214, 214, 0.93)": ""}`}} onMouseDown={() => handleMouseDown(index)} onMouseUp={() => handleMouseUp(index)}>{item + 1}</span>)}</div>
  )
}

export default DraginTable3
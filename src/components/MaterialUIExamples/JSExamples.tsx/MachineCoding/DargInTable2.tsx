import React, { useState } from 'react'

// function DargInTable2(props: { rows: number, columns: number }) {
//     const [table, setTable] = useState(new Array(props.rows * props.columns).fill(null).map((i, index) => index))
//     const [selected, setSelected] = useState<number[]>([])
//     const [startIndex, setStartIndex] = useState<number | undefined>()

//     function handleMouseDown(index: number) {
//         setStartIndex(index)
//         setSelected([index])
//     }

//     function handleMousUp(endIndex: number) {
//         const temp: number[] = []
//         if (startIndex && startIndex < endIndex) {
//             let startColumn = startIndex % props.columns;
//             let startRow = Math.floor(startIndex / props.rows)

//             let endColumn = endIndex % props.columns;
//             let endRow = Math.floor(Math.abs(endIndex - startIndex) / props.rows)

//             console.log(startColumn, endColumn, startRow, startRow + endRow)

//             if(startColumn > endColumn) {
//                 [startColumn, endColumn] = [endColumn, startColumn]
//             }
//             if(startRow > endRow) {
//                 [startRow, endRow] = [endRow, startRow]
//             }
//             for (let i = startRow; i<= startRow + endRow; i++) {
//                 for (let j = startColumn; j <= endColumn; j++) {
//                     temp.push(table[j + (i * props.columns)])
//                 }
//             }
//             console.log(temp)
//             setSelected(temp)
//         }
//     }

//     return (
//         <div style={{ width: "fit-content", margin: "auto", display: "grid", gridTemplateColumns: `repeat(${props.columns}, 50px)`, gridTemplateRows: `repeat(${props.rows}, 50px)`, userSelect: "none" }}>
//             {table.map((item, index) => <span key={index} style={{ backgroundColor: `${selected.includes(index) ? "lightblue" : ""}`, display: "flex", justifyContent: "center", alignItems: "center" }} onMouseDown={() => handleMouseDown(index)} onMouseUp={() => handleMousUp(index)}>{item}</span>)}
//         </div>
//     )
// }

function DargInTable2(props: { rows: number, columns: number }) {
    const [table, setTable] = useState(new Array(props.rows).fill(null).map((row, i) => new Array(props.columns).fill(null).map((col, j) => j + (i * props.columns))))
    const [startIndex, setStartIndex] = useState<any>()
    const [selected, setSelected] = useState<any>([])

    function handleDown(col:number, row:number) {
        console.log(col, row)
        setStartIndex({col, row})
    }

    function handleUp(col:number, row:number) {
        let startCol = startIndex.col
        let startRow = startIndex.row


        let [endCol, endRow] = [col, row]

        if(startCol > endCol) {
            [startCol, endCol] = [endCol, startCol]
        }

        if(startRow > endRow) {
            [startRow, endRow] = [endRow, startRow]
        }
        
        console.log(startCol, endCol, startRow, endRow)
        const temp = []
        for(let i = startRow; i <= endRow; i++) {
            for(let j = startCol; j<= endCol; j++) {
                // console.log(table[i][j])
                temp.push(table[i][j])
            }
        }
        setSelected(temp)
    }

    return <table>
        {table.map((row, rowIndex) => <tr>{row.map((col, colIndex) => <td style={{padding:"10px", userSelect:"none", backgroundColor: selected.includes(col)? "lightBlue": ""}} onMouseDown={(e) => handleDown(colIndex, rowIndex)} onMouseUp={(e) => handleUp(colIndex, rowIndex)}>{col}</td>)}</tr>)}
    </table>
}

export default DargInTable2
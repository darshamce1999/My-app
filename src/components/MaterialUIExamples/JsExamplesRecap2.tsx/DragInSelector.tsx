import React, { useEffect, useLayoutEffect, useState } from 'react'
import style from "./DragInSelector.module.css"
import { start } from 'repl'

type cellInfo = {
    value:number, 
    rowIndex:number, 
    cellIndex:number
}

function DragInSelector({rows=7, columns=7}:{rows:number, columns:number}) {
    const arr:number[][] = []
    const [start, setStart] = useState<cellInfo | undefined>(undefined)
    const [end, setEnd] = useState<cellInfo | undefined>(undefined)
    const [selected, setSelected] = useState<number[]>([])

    for(let i = 0; i< rows*rows; i=i+rows) {
        const newArr: number[] = []
        for(let j=0; j< columns; j++) {
            newArr.push(i+ j + 1)
        }
        arr.push(newArr);
    }

    function mouseDown(cellValue:string|null, rowIndex:number, cellIndex: number) {
        setSelected([])
        setStart({value: Number(cellValue), rowIndex:rowIndex, cellIndex:cellIndex})
    }

    function mouseUp(cellValue:string | null, rowIndex:number, cellIndex: number) {
        setEnd({value: Number(cellValue), rowIndex:rowIndex, cellIndex:cellIndex})
    }

    // useLayoutEffect(() => {
    //     setSelected([])
    // }, [start])
    
    useEffect(() => {
        if(!end || !start) {
            return
        }
        let startInfo = start;
        let endInfo = end;
        if(end && start && start.rowIndex > end.rowIndex) {
            startInfo = end;
            endInfo = start
        }
        const res = []
        for(let i=startInfo.rowIndex; i<=endInfo.rowIndex; i++) {
            // if(startInfo.rowIndex == endInfo.rowIndex) {
            //     res.push(arr[i].slice(startInfo.cellIndex, endInfo.cellIndex + 1))
            // } else if (i = startInfo.rowIndex) {
            //     res.push(arr[i].slice(startInfo.cellIndex))
            // } else if (i = endInfo.rowIndex) {
            //     res.push(arr[i].slice(0, endInfo.cellIndex + 1))
            // } else {
            //     res.push(arr[i].slice(0))
            // }
            //this is different selector logic based on from start number to end number 


            if(startInfo.cellIndex > endInfo.cellIndex) {
                res.push(...arr[i].slice(endInfo.cellIndex, startInfo.cellIndex + 1))
            } else {
                res.push(...arr[i].slice(startInfo.cellIndex, endInfo.cellIndex + 1))
            }
        }
        setSelected(res)
    }, [start, end])


    return (
        <>
            <table className={style.center}>
                <tbody>
                    {arr.map((data, rowIndex) => {
                        return <tr key={rowIndex}>
                            {
                                data.map((cell, cellIndex) => {
                                    return <td key={cellIndex} style={{padding: "10px", backgroundColor: selected.includes(cell)? "aquamarine": ""}} 
                                                onMouseDown={(event) => mouseDown(event.currentTarget.textContent, rowIndex, cellIndex)} 
                                                onMouseUp={(event) => mouseUp(event.currentTarget.textContent, rowIndex, cellIndex)}
                                            >
                                                    {cell}
                                            </td>
                                        })
                            }
                        </tr>
                    })}
                </tbody>
            </table>
        </>
    )
}

export default DragInSelector
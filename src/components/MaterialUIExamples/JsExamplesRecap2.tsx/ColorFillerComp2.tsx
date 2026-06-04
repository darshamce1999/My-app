import { Button } from "@mui/material"
import style from "./ColorFillerComp2.module.css"
import { useEffect, useState } from "react"

function CellComp(props:any) {
    return <Button className={style.cell} onClick={props.onClick} style={{backgroundColor: props.value === 1? "rgba(16, 225, 191, 0.447)": "rgba(197, 189, 189, 0.438)"}}>
        {props.value}
    </Button>
}

function ColorFillerComp2(props:any) {
    const gridSize:number = props.gridSize || 2
    const gridArray = new Array(gridSize * gridSize).fill(0)
    const [state, setState] = useState(gridArray)

    useEffect(() => {
        const res = state.reduce((acc, value) => acc + value, 0)
        if(res === gridSize *gridSize) {
            setTimeout(() => {
                setState(gridArray.fill(0))
            }, 500)
        }
    }, [state])
    
    return (
        <div className={style.grid} 
            style={{"--cols": gridSize} as React.CSSProperties}
        >
            {state.map((data, index) => <CellComp key={index} value={data} onClick={() =>{
                const newArray = [...state]
                newArray.splice(index, 1, data === 0 ? 1: 0)
                setState(newArray)
                console.log(newArray)
            }}/>)}
        </div>
    )
}

export default ColorFillerComp2
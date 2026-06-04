import { useEffect, useState } from "react"
import style from "./ColorFillerComp.module.css"

function CellComp(props:any) {

    return <div className={style.cell}> 
        <button 
            className={props.isActivate? style.activateCell: ""} 
            onClick={props.onClick} 
            disabled={props.isActivate}
        >
        </button>
    </div>
}

export const ColorFillerComp = () => {
    const initalConfig = [
        1,1,1,
        1,1,1,
        1,1,1
    ]
    const initailactivate = [0,0,0,0,0,0,0,0,0];
    const deactivateCount = initalConfig.reduce((sum, val)=>{ return sum+val}, 0)

    const [config, setConfig] = useState(initalConfig);
    const [activate, setActivate] = useState(initailactivate);

    function activateCells(index:any, isAtivate:boolean) {
        const val = [...activate]
        val.splice(index, 1, isAtivate? 1: 0)
        setActivate([...val])
    }

    useEffect(()=>{
        const val = activate.reduce((sum, val)=>{ return sum+val}, 0)
        if(val===deactivateCount) {
            setTimeout(()=>{
                setActivate(initailactivate)
            }, 500)
        }
    }, activate)


    return <div className={style.flex}>
    <div className={style.grid}>
        {config.flat(1).map((data, index)=> 
        data ? 
            <CellComp onClick={() => activateCells(index, !activate[index])} isActivate={activate[index]}/>
        : <span />)}
    </div>
    </div>
}

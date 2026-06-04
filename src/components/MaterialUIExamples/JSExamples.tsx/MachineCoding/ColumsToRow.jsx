import React from 'react'
import style from "./ColumsToRow.module.css"

function ColumsToRow() {
    
  return (
    <div className={style.wrapper}>
        <div style={{backgroundColor:"red"}}>Column 1</div>
        <div style={{backgroundColor:"green"}}>Column 2</div>
        <div style={{backgroundColor:"yellow"}}>Column 3</div>
    </div>
  )
}

export default ColumsToRow
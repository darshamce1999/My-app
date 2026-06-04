import React from 'react'
import style from "./Centering2.module.css"

function Centering2() {

  return (
    // <div className={style.centerGrid}>
    //     <div>Centering2</div>
    // </div>

    // <div className={style.centerFlex}>
    //     <div>Centering2</div>
    // </div>

    <div className={style.centerMarginAuto}>
        <div className={style.content}>Centering2</div>
    </div>
  )
}

export default Centering2
import React from 'react'
import style from "./NativeModal3.module.css";

function NativeModal3() {

  return (
    <div>
        <button>Open</button>
        <div className={style.wrapper}>
            <div className={style.modalWarpper}>
                <div className={style.modal}>
                    <button>Close</button>
                    <p>Are u sure u want to proceed</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NativeModal3
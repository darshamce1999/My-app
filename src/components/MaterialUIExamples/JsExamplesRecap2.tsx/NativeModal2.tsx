import React, { useState } from 'react'
import style from "./NativeMod2.module.css"
import { Button } from '@mui/material'

function NativeModal2() {
    const [state, setState] = useState(false)
  return (
    <>
        <Button onClick={() => setState(true)}>Open</Button>
        {state && <div className={style.wrapper}>
                <div className={style.content}>
                    <div className={style.closeBtn}>
                        <Button onClick={() => setState(false)}>Close</Button>
                    </div>
                    <p>I am the modal, click close button to close modal</p>
                </div>
            </div>}
    </>
  )
}

export default NativeModal2
import { Button } from '@mui/material'
import React, { useState } from 'react'
import style from "./NativeModal.module.css"

export function NativeModalOne() {
    const [state, setState] = useState(false)

  return (
    <>
        <Button onClick={() => setState(true)}>Open</Button>
        {state && <div className={style.wrapper}>
            <div className={style.parent}>
                <div className={style.btn}>
                    <Button onClick={() => setState(false)}>Close</Button>
                </div>
                <p>I am Modal if u click close i will get closed</p>
            </div>
        </div>}
    </>
  )
}
import { Button, CircularProgress, IconButton } from '@mui/material'
import React, { useState } from 'react'
import style from "./NativeModal.module.css"

function NativeModal() {
    const [open, setOpen] = useState(false)

  return (
    <>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        {open && <Modal closeModal={setOpen}/>}
    </>
  )
}

export default NativeModal

// function Modal(props: {closeModal:(value:boolean) => void}) {
//     return (
//             <div className={style.modalWrapper}>
//                 <Button className={style.btnPlacement} onClick={() => props.closeModal(false)}>Close</Button>
//                 <div className={style.progress}>
//                     <CircularProgress size='80px'/>
//                 </div>
//             </div>
//     )
// }


function Modal(props: {closeModal:(value:boolean) => void}) {
    return (
            <div className={style.modalWrapper}>
                <div className={style.modalContainer}>
                    <div className={style.btnPlacement}>
                        <Button onClick={() => props.closeModal(false)}>Close</Button>
                    </div>
                    <div>
                        I am Modal content
                    </div>
                </div>
            </div>
    )
}
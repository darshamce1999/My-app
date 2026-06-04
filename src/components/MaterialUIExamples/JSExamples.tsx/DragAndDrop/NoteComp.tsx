import React, { forwardRef, RefObject } from 'react'

 const NoteComp = forwardRef((props:any, inputRef) => {

  return (
    <div
        ref={inputRef as RefObject<HTMLDivElement>}
        style={{
            width: "200px",
            backgroundColor: 'yellow',
            margin: "20px 0 20px 0",
            border: "2px solid black"
        }}
    >
        📌 {props.note.note}
    </div>
  )
})

export default NoteComp
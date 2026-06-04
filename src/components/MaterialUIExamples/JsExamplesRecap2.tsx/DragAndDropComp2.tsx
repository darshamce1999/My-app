import React, { useEffect, useRef, useState } from 'react'

function DragAndDropComp2() {
  const notesInfo = [
    {
      id: 0,
      text: "The wing of fire by DR Abdul kalam",
      top: 0,
      left: 0
    },
    {
      id: 1,
      text: "The Real story of Darshan N R",
      top: 0,
      left: 0,
    }
  ]
  const [notes, setNotes] = useState(notesInfo)

  const noteRef = useRef<any>([])

  function drag(downEvent:any, id:number) {
    const rect = noteRef.current[id].getBoundingClientRect()
    const offsetX = downEvent.clientX - rect.left;   //it's is where you click inside notes (consider left side) - how far notes is from left side. To simply it's exact position of you cliicked point from left side
    const offsetY = downEvent.clientY - rect.top;

    function mouseMove(event: any) {
      console.log(event)
      const left = event.clientX - offsetX;
      const top = event.clientY - 240 - offsetY;
      const newNotes = notes.map(data=>{
                return data.id === id ? {...data, top:top, left: left}: data
      })
      setNotes(newNotes)
    }

    function mouseUp() {
      document.removeEventListener('mousemove', mouseMove)
      document.removeEventListener('mouseup', mouseUp)
    }

    document.addEventListener('mousemove', mouseMove)
    document.addEventListener('mouseup', mouseUp)

  }

    
  return (
    <div>
      {notes.map(note => (
        <div 
          ref={(node) => {
              noteRef.current[note.id] = node
          }} 
          onMouseDown={(event) => {
              drag(event, note.id)
          }} 
          key={note.id} 
          style={{width: "200px", backgroundColor: "yellow", border: "2px solid black", margin: "20px", position: "relative", cursor: "grab", top: `${notes[note.id].top}px`, left: `${notes[note.id].left}px`}}
        >
        📌 {note.text}
      </div>))}
    </div>
  )
}

export default DragAndDropComp2
import React, { useEffect, useRef, useState } from 'react'
import NoteComp from './NoteComp'
import style from "./DragAndDrop.module.css"

function DragAndDropComp() {
    const [notes, setNotes] = useState([
        {
            id:0,
            note: "Wing of fire by DR APJ Abdul Kalam",
            top:0,
            left:0
        },
        {
            id:1,
            note: "The Real story of Darshan N R",
            top:0,
            left:0
        }
    ])
    const ref = useRef<any>([])

    useEffect(()=>{
        const res = notes.map(data=> {
            const xaxis = window.innerWidth - 220  //width + padding, i don't want note to go behind view port
            const yaxis = window.innerHeight - 50 - 240 //50 is for height of note, and 240 content present before DragAndDropComp
            return {...data, top:Math.round(yaxis * Math.random()), left:Math.round(xaxis * Math.random())}
        })
        setNotes(res)
    }, [])
    
    function handleDrag(event: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) {
        const rect = ref.current[index].getBoundingClientRect()
        const offsetX = event.clientX - rect.left;   //it's is where you click inside notes (consider left side) - how far notes is from left side. To simply it's exact position of you cliicked point from left side
        const offsetY = event.clientY - rect.top;   //it's is where you click inside notes (consider from top) - how far notes is from top. To simply it's exact position of you cliicked point from top

        //Directly updating Dom
        // function handleMouseMove(event:any) {
        //     console.log(ref.current[index])
        //     ref.current[index].style.left = `${event.clientX - offsetX}px`   //left should be, where u clicked (consider left side) - offsetX, will tell start of notes (from left side)
        //     ref.current[index].style.top = `${event.clientY - 240 - offsetY}px`   //top should be, where u clicked (consider top) - offsetY -240(because above componentys)
        // }

        
        //Updating with state
        function handleMouseMove(event:any) {
            const newLeft = event.clientX - offsetX   //left should be, where u clicked (consider left side) - offsetX, will tell start of notes (from left side)
            const newTop = event.clientY - 240 - offsetY   //top should be, where u clicked (consider top) - offsetY -240(because above componentys)
            const newNotes = notes.map(data=>{
                return data.id === index ? {...data, top:newTop, left: newLeft}: data
            })
            setNotes(newNotes)
        }

        function handleMouseUp(event:any) {
            console.log(notes)
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        }

        document.addEventListener('mousemove', handleMouseMove)
        document.addEventListener('mouseup', handleMouseUp)
    }

  return <>
    <div style={{position: 'relative'}}>
        {notes.map((note:any, index) => {
            return <div
                    style={{position: 'absolute', top: `${note.top}px`, left: `${note.left}px`}}
                    ref={(node)=>{
                        ref.current[index] = node
                    }}
                    className={style.note}  
                    onMouseDown={(event)=>handleDrag(event, index)}
                    key={index}
                >
                📌 {note.note}
                </div>
        })}
    </div>
    </>
}

export default DragAndDropComp
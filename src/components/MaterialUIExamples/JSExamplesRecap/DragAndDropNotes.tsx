import { useRef, useState } from "react";
import style from "./DragAndDropNotes.module.css"

function DragAndDropNotes() {
    const initailNotes = [
        {
            id: 1,
            name: "The wing's of fire by APJ Abdul Kalam",
            top: 0,
            left: 0
        },
        {
            id: 2,
            name: "The real story of Darshan N R",
            top: 0,
            left: 0
        }
    ]
    
    const [notes, setNotes] = useState(initailNotes.map(data => { return {...data, left: Math.random() * (window.innerWidth - 200), top: 208 - 60 + Math.random() * (window.innerHeight - 208)} }));  //top = hight of other comp  - height of notes + math.random(total width - hight of other comp)
    const noteRef = useRef<any>([])

    function handleMouseDown(event:any, index:number) {
        //ClientX is from strat of view, pageX is start of document page, ScreenX from strat of computer Screen
        //offset is from start of elemnt i clicked (here it's div) 
        // https://youtu.be/dxADq_DlS-w?si=kK_ocZMYIJ4QlRWt
        
        const offsetX = event.nativeEvent.offsetX;
        const offsetY = event.nativeEvent.offsetY;
        //to know her where u clicked inside note div

        console.log(noteRef.current[index].getBoundingClientRect())

        function handleMove(event:any) {
            noteRef.current[index].style.left = event.clientX - offsetX + "px"
            noteRef.current[index].style.top = event.clientY - offsetY + "px"
        }

        function handleUp() {
            document.removeEventListener('mousemove', handleMove)
            document.removeEventListener('mouseup', handleUp)
        }

        document.addEventListener('mousemove', handleMove)
        document.addEventListener('mouseup', handleUp)
    }
    
    return <>
        {notes.map((data:any, index) => 
            <div style={{position: "absolute", top: `${data.top}px`, left: `${data.left}px`}} 
                className={style.notes} 
                key={data.id}
                onMouseDown={(event:any) => handleMouseDown(event, index)}
                ref={(node) => {noteRef.current[index] = node}}
            >
                📌{data.name}
            </div>
        )}
  </>
}

export default DragAndDropNotes
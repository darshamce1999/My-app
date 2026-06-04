import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

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
// {id:number, top:number, left:number}[]

function DragAndDropComp3() {
    const [notes, setNotes] = useState(initailNotes.map(item => {
        return { ...item, top: Math.random() * (window.innerHeight - 80), left: Math.random() * (window.innerWidth - 250) }
    }))
    const notesRef = useRef<any>([])

    function handleMousedown(e: any, index: number) {
        const offX = e.nativeEvent.offsetX;
        const offY = e.nativeEvent.offsetY
        console.log(e, offX, offY)

        function mouseMove(e: any) {
            const temp = [...notes]
            temp[index].top = e.clientY - offY;
            temp[index].left = e.clientX - offX;

            setNotes(temp)
        }

        function mouseUp(e: any) {
            console.log("MouseUp")
            console.log(e)

            document.removeEventListener('mousemove', mouseMove)
            document.removeEventListener('mouseup', mouseUp)
        }

        document.addEventListener('mousemove', mouseMove)
        document.addEventListener('mouseup', mouseUp)
    }

    return (
        <div>{notes.map((item, index) => <div key={item.id} ref={(e: any) => {
            notesRef.current[index] = e
        }} style={{ position: "absolute", top: `${item.top}px`, left: `${item.left}px`, cursor: "grab", width: "250px", height: "80px", backgroundColor: "yellow", border: "1px solid black" }}
            onMouseDown={(e) => handleMousedown(e, index)}
        >📌 {item.name}</div>)}</div>
    )
}

export default DragAndDropComp3





//from chatgpt https://chatgpt.com/share/69f49000-9948-83e8-a31f-029f40addd52
// const initialNotes = [
//     { id: 1, name: "The wing's of fire by APJ Abdul Kalam", top: 0, left: 0 },
//     { id: 2, name: "The real story of Darshan N R", top: 0, left: 0 }
// ]

// function DragAndDropComp3() {
//     const [notes, setNotes] = useState(
//         initialNotes.map(item => ({
//             ...item,
//             top: Math.random() * (window.innerHeight - 80),
//             left: Math.random() * (window.innerWidth - 250)
//         }))
//     )

//     const dragInfo:any = useRef({
//         isDragging: false,
//         index: null,
//         offsetX: 0,
//         offsetY: 0
//     })

//     const handleMouseMove = (e:any) => {
//         if (!dragInfo.current.isDragging) return

//         const { index, offsetX, offsetY } = dragInfo.current

//         const temp = [...notes]
//         temp[index!].top = e.clientY - offsetY
//         temp[index!].left = e.clientX - offsetX

//         setNotes(temp)
//     }

//     const handleMouseUp = () => {
//         dragInfo.current.isDragging = false
//     }

//     return (
//         <div
//             style={{ width: "100vw", height: "100vh" }}
//         >
//             {notes.map((item, index) => (
//                 <div
//                     onMouseMove={handleMouseMove}
//                     onMouseUp={handleMouseUp}
//                     key={item.id}
//                     style={{
//                         position: "absolute",
//                         top: item.top,
//                         left: item.left,
//                         cursor: "grab",
//                         width: "250px",
//                         height: "80px",
//                         backgroundColor: "yellow",
//                         border: "1px solid black"
//                     }}
//                     onMouseDown={(e) => {
//                         dragInfo.current = {
//                             isDragging: true,
//                             index,
//                             offsetX: e.nativeEvent.offsetX,
//                             offsetY: e.nativeEvent.offsetY
//                         }
//                     }}
//                 >
//                     📌 {item.name}
//                 </div>
//             ))}
//         </div>
//     )
// }

// export default DragAndDropComp3



//My logic wanted to build drag, within notes inself, ot work within note only
// function DragAndDropComp3() {
//     const [notes, setNotes] = useState(initailNotes.map(item => {
//         return { ...item, top: Math.random() * (window.innerHeight - 80), left: Math.random() * (window.innerWidth - 250) }
//     }))
//     const notesRef = useRef<any>([])
//     const offsetRef = useRef<any>({})

//     return (
//         <div>{notes.map((item, index) => <div key={item.id} ref={(e: any) => {
//             notesRef.current[index] = e
//         }} style={{ position: "absolute", top: `${item.top}px`, left: `${item.left}px`, cursor: "grab", width: "250px", height: "80px", backgroundColor: "yellow", border: "1px solid black" }}
//             onMouseDown={(e) => {
//                 offsetRef.current.offX = e.nativeEvent.offsetX;
//                 offsetRef.current.offY = e.nativeEvent.offsetY;
//                 offsetRef.current.isDrag = true
//             }}
//             onMouseMove={(e) => {
//                 if(offsetRef.current && offsetRef.current && offsetRef.current.isDrag) {
//                 console.log(e.clientY - offsetRef.current.offY)
//                 console.log(e.clientX - offsetRef.current.offX)
//                 const temp = [...notes]
//                 temp[index].top = e.clientY - offsetRef.current.offY;
//                 temp[index].left = e.clientX - offsetRef.current.offX;
//                 setNotes(temp)
//                 }
//             }}
//             onMouseUp={(e:any) => {
//                 offsetRef.current = {}
//             }}
//         >📌 {item.name}</div>)}</div>
//     )
// }

// export default DragAndDropComp3
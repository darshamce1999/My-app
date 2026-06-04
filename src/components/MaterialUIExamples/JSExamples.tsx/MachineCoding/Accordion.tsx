import React, { useState } from 'react'

const accordionList = [{ title: "What is React", body: "React is Javascript Library debelpoed by facebook by group of engineers." },
    { title: "What is React", body: "React is Javascript Library" }, { title: "What is React", body: "React is Javascript Library" },
    { title: "What is React", body: "React is Javascript Library" }, { title: "What is React", body: "React is Javascript Library" }]

function Accordion() {
    const [state, setState] = useState(accordionList.map(item => {
        return { ...item, isOpen: false }
    }))

    function handleClick(index:number) {
        const temp = [...state]
        temp[index].isOpen = !temp[index].isOpen
        setState(temp)
    }


    const [selected, setSelected] = useState(-1)
    function handleClickOnlyOne(index:number) {
        if(index !== selected) {
            setSelected(index)
        } else {
            setSelected(-1)
        }
    }

    return (
        // <div>{state.map((item, index) => <div style={{width:"30vw", margin:"auto", display:"flex", flexDirection:"column", flexGrow:"1", backgroundColor:" rgba(197, 195, 195, 0.27)", marginBlock:"5px" ,borderRadius:"20px", border:"1px solid black", overflow:"hidden"}}>
        //     <p style={{display:"flex", justifyContent:"space-between", margin:"0", padding:"10px"}}><span>{item.title}</span> <button onClick={() => handleClick(index)}>{item.isOpen? "-": "+"}</button></p>
        //     {item.isOpen && <p style={{backgroundColor:"rgba(197, 195, 195, 0.98)", margin:"0", padding:"10px"}}>{item.body}</p>}
        // </div>)}</div>

        //only one 
        <div>{state.map((item, index) => <div style={{width:"30vw", margin:"auto", display:"flex", flexDirection:"column", flexGrow:"1", backgroundColor:" rgba(197, 195, 195, 0.27)", marginBlock:"5px" ,borderRadius:"20px", border:"1px solid black", overflow:"hidden"}}>
            <p style={{display:"flex", justifyContent:"space-between", margin:"0", padding:"10px"}}><span>{item.title}</span> <button onClick={() => handleClickOnlyOne(index)}>{selected == index ? "-": "+"}</button></p>
            {selected == index && <p style={{backgroundColor:"rgba(197, 195, 195, 0.98)", margin:"0", padding:"10px"}}>{item.body}</p>}
        </div>)}</div>
    )
}

export default Accordion
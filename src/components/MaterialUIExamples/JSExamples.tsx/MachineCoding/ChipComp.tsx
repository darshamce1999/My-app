import React, { useState } from 'react'

function ChipComp() {
    const [input, setInput] = useState('')
    const [chip, setChip] = useState<string[]>([])

  return (
    <div style={{width: "50vw", margin:"auto"}}>
        <input style={{width: "50vw", color: `${input == "abc"? "red": ""}`}} type='text' value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => {
            console.log(e.key)
            if(e.key == 'Enter' && input !== "") {
                const temp = [...chip]
                temp.push(input)
                setChip(temp)
                setInput('')
            }
        }}/>
        <div style={{display:"flex", gap:"4px", flexWrap: "wrap"}}>{chip.map((item, index) => 
            <p style={{backgroundColor:"lightGray", flex:"0 0 auto", padding:"5px 10px", border:"1px solid black", borderRadius:"8%"}}>
                {item} <span style={{ cursor:"pointer"}} onClick={() => {
                            const temp = [...chip]
                            temp.splice(index, 1)
                            setChip(temp)
                        }}>❌</span>
            </p>)}
        </div>
    </div>
  )
}

export default ChipComp
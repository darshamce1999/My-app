import React, { useEffect, useRef, useState } from 'react'

function TrafficLight2() {
    const [light, setLight] = useState('red')
    const ref = useRef<any>()

    useEffect(() => {
        if(light == 'red') {
            ref.current = setTimeout(() => {
                setLight('green')
            }, 4000)
        } else if(light == 'green') {
            ref.current = setTimeout(() => {
                setLight('yellow')
            }, 4000)
        } else if(light == 'yellow') {
            ref.current = setTimeout(() => {
                setLight('red')
            }, 1000)
        }

        return () => {
            clearTimeout(ref.current)
        }
    }, [light])

  return (
    <div style={{display:"flex", flexDirection:"column", width:"fit-content", padding:"10px", borderRadius:"50px", backgroundColor:"rgba(186, 181, 181, 0.86)", gap:"2px", border:"1px solid black", margin:"auto",}}>
        <div style={{backgroundColor:`${light == 'red'? "red": "rgba(99, 92, 92, 0.95)"}`, flexBasis:"50px", width:"50px", textAlign:"center", border:"1px solid black", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center"}}>{light == 'red' && "Stop"}</div>
        <div style={{backgroundColor:`${light == 'yellow'? "yellow": "rgba(99, 92, 92, 0.95)"}`, flexBasis:"50px", width:"50px", textAlign:"center", border:"1px solid black", borderRadius:"50%",  display:"flex", alignItems:"center", justifyContent:"center"}}>{light == 'yellow' && "Wait"}</div>
        <div style={{backgroundColor:`${light == 'green'? "green": "rgba(99, 92, 92, 0.95)"}`, flexBasis:"50px", width:"50px", textAlign:"center", border:"1px solid black", borderRadius:"50%",  display:"flex", alignItems:"center", justifyContent:"center"}}>{light == 'green' && "Go"}</div>
    </div>
  )
}

export default TrafficLight2
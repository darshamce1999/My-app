import { Button, Input } from "@mui/material"
import { useEffect, useRef, useState } from "react"

// export const CountDownTimerComp = () => {
//     const [hour, setHour] = useState<number>(0)
//     const [min, setMin] = useState<number>(0)
//     const [sec, setSec] = useState<number>(0)
//     const timerRef = useRef<any>(); 

//     function handleMin(min:number) {
//         if(min>59) {
//             const totalHour = hour + Math.floor(min/60)
//             setHour(totalHour)
//         }
//         setMin(min%60)
//     }

//     function handleSec(sec:number) {
//         if(sec>59) {
//             const totalMinutes = min + Math.floor(sec/60)
//             setMin(totalMinutes)
//         }
//         setSec(sec%60)
//     }

//     function handleTimer() {
//         if(sec>0) {
//             setSec(prev => prev -1)
//         } else if(min>0) {
//             setMin(prev=>prev-1)
//             setSec(59)
//         } else if(hour>0) {
//             setHour(prev => prev-1)
//             setMin(59)
//             setSec(59)
//         } else {
//             clearInterval(timerRef.current)
//         }
//     }
 
//     function handleStart() {
//         timerRef.current = setInterval(()=>{
//             handleTimer()
//         }, 1000)
//     }

//     return <>
//         <Input type="number" onChange={(event)=>setHour(Number(event.target.value))} value={hour}/>
//         <Input type="number" onChange={(event)=>handleMin(Number(event.target.value))} value={min}/>
//         <Input type="number" onChange={(event)=>handleSec(Number(event.target.value))} value={sec}/>
//         <Button onClick={handleStart}>Start</Button>
//         <h4>{hour}:{min}:{sec}</h4>
//     </>
// }


export const CountDownTimerComp = () => {
    const [hour, setHour] = useState<number>(0)
    const [min, setMin] = useState<number>(0)
    const [sec, setSec] = useState<number>(0)
    const [action, setAction] = useState<string>('')
    const timerRef = useRef<any>(); 

    function handleMin(min:number) {
        if(min>59) {
            const totalHour = hour + Math.floor(min/60)
            setHour(totalHour)
        }
        setMin(min%60)
    }
    function handleSec(sec:number) {
        if(sec>59) {
            const totalMinutes = min + Math.floor(sec/60)
            setMin(totalMinutes)
        }
        setSec(sec%60)
    }

    function handleTimer() {
        if(sec>0) {
            setSec(prev => prev -1)
        } else if(min>0) {
            setMin(prev=>prev-1)
            setSec(59)
        } else if(hour>0) {
            setHour(prev => prev-1)
            setMin(59)
            setSec(59)
        } else {
            clearInterval(timerRef.current)
            setAction('')
        }
    }

    useEffect(()=>{
        if(action === "start") {
            timerRef.current = setInterval(()=>{
                handleTimer()
            }, 1000)
        } else if (action == "stop") {
            clearInterval(timerRef.current)
        } else if(action == "reset") {
            clearInterval(timerRef.current)
            setAction('')
            setHour(0)
            setMin(0)
            setSec(0)
        }

        return () => {
            clearInterval(timerRef.current)
        }
    }, [action, sec])

    return <>
        <Input type="number" onChange={(event)=>setHour(Number(event.target.value))} value={hour}/>
        <Input type="number" onChange={(event)=>handleMin(Number(event.target.value))} value={min}/>
        <Input type="number" onChange={(event)=>handleSec(Number(event.target.value))} value={sec}/>
        <br />
        <Button onClick={()=>setAction("start")}>{action=="stop"? "Resume": "Start"}</Button>
        <Button onClick={()=>setAction("stop")}>Stop</Button>
        <Button onClick={()=>setAction("reset")}>Reset</Button>
        <h4>{hour}:{min}:{sec}</h4>
    </>
}
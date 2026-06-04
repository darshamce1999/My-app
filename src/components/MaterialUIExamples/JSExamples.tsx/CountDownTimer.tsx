import { Button, Input } from "@mui/material";
import { useEffect, useRef, useState } from "react"

export const CountDownTimer = () => {
    const [sec, setSec] = useState(0);
    const [min, setMin] = useState(0);
    const [hour, setHour] = useState(0);
    const [action, setAction] = useState<string | null>()
    const ref = useRef<any>()

    function handleMin(min:number) {
        let getHour = Math.floor(min / 60) + hour
        let getMin = min % 60;
        setMin(getMin)
        setHour(getHour)
    }

    function handleSec(sec:number) {
        let getMin = Math.floor(sec / 60) + min
        let getSec = sec % 60;
        setMin(getMin)
        setSec(getSec)
    }

    function handleStart() {
        if(sec>0) {
            setSec((prevState)=>{return prevState-1})
        } else if(sec==0 && min > 0){
            setMin((prevState)=>{return prevState-1})
            setSec(59)
        } else if(min ==0 && hour>0){
            setMin(59)
            setSec(59)
            setHour((prevState)=>{return prevState-1})
        } else {
            clearInterval(ref.current)
            setAction(null)
        }
    }

    useEffect(()=>{
        if(action==='start') {
            ref.current = setInterval(()=> {
                handleStart()
            }, 1000)
        } else if(action==='stop') {
            clearInterval(ref.current);
        } else if(action==='reset') {
            setHour(0)
            setMin(0)
            setSec(0)
            clearInterval(ref.current);
            setAction(null)
        }
        return () => {
            clearInterval(ref.current);
        }
    }, [action, hour, min, sec])

    return (<>
        <Input onChange={(event)=>{
                setHour(Number(event.target.value))
            }} 
            type="number"
            placeholder="hour"
            size="small"
            value={hour}
        />
        <Input onChange={(event)=>{
                handleMin(Number(event.target.value))
            }} 
            type="number"
            placeholder="min"
            size="small"
            value={min}
        />
        <Input onChange={(event)=>{
                handleSec(Number(event.target.value))
            }} 
            type="number"
            placeholder="sec"
            size="small"
            value={sec}
        />
        <p>Hour {hour}, min {min}, sec {sec}</p>
        <Button onClick={()=>setAction('start')}>{action=="stop"? "Resume": "Start"}</Button>
        <Button onClick={()=>setAction('stop')}>Stop</Button>
        <Button onClick={()=>setAction('reset')}>Reset</Button>
    </>)
}


export const CountDownTimerObj = () => {
    const [time, setTime] = useState({hour:0, min:0, sec:0});
    const [action, setAction] = useState<string | null>()
    const ref = useRef<any>()

    function handleMin(min:number) {
        let getHour = Math.floor(min / 60) + time.hour
        let getMin = min % 60;
        setTime((prevState)=>{return {...prevState,hour:getHour, min:getMin}})
    }

    function handleSec(sec:number) {
        let getMin = Math.floor(sec / 60) + time.min
        let getSec = sec % 60;
        setTime((prevState)=>{return {...prevState, min:getMin, sec:getSec}});
    }

    function handleStart() {
        if(time.sec>0) {
            setTime((prevState)=>{return {...prevState, sec:prevState.sec-1}});
        } else if(time.sec==0 && time.min > 0){
            setTime((prevState)=>{return {...prevState,min:prevState.min-1, sec:59}});
        } else if(time.min ==0 && time.hour>0){
            setTime((prevState)=>{return {...prevState,hour:prevState.hour-1,min:59, sec:59}});
        } else {
            clearInterval(ref.current)
            setAction(null)
        }
    }

    useEffect(()=>{
        if(action==='start') {
            ref.current = setInterval(()=> {
                handleStart()
            }, 1000)
        } else if(action==='stop') {
            clearInterval(ref.current);
        } else if(action==='reset') {
            setTime((prevState)=>{return {hour:0, min:0, sec:0}});
            clearInterval(ref.current);
            setAction(null)
        }
        return () => {
            clearInterval(ref.current);
        }
    }, [action, time])

    return (<>
        <Input onChange={(event)=>{
                setTime((prevState)=>{return {...prevState,hour:Number(event.target.value)}});
            }} 
            type="number"
            placeholder="hour"
            size="small"
            value={time.hour}
        />
        <Input onChange={(event)=>{
                handleMin(Number(event.target.value))
            }} 
            type="number"
            placeholder="min"
            size="small"
            value={time.min}
        />
        <Input onChange={(event)=>{
                handleSec(Number(event.target.value))
            }} 
            type="number"
            placeholder="sec"
            size="small"
            value={time.sec}
        />
        <p>Hour {time.hour}, min {time.min}, sec {time.sec}</p>
        <Button onClick={()=>setAction('start')}>{action=="stop"? "Resume": "Start"}</Button>
        <Button onClick={()=>setAction('stop')}>Stop</Button>
        <Button onClick={()=>setAction('reset')}>Reset</Button>
    </>)
}
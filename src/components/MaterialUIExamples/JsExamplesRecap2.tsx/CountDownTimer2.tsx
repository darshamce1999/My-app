import { Button, Input } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'

function CountDownTimer2() {
    const [hour, setHour] = useState(0)
    const [min, setMin] = useState(0)
    const [sec, setSec] = useState(0)
    const [action, setAction] = useState('')
    const intervalRef = useRef<any>()

    function handleMin(minutes:number) {
        if(minutes > 59) {
            setHour(hour + Math.floor(minutes/60))
            setMin(minutes % 60)
        } else {
            setMin(minutes)
        }
    }

    function handleSec(secound:number) {
        if(secound > 59) {
            setMin(min + Math.floor(secound/60))
            setSec(secound % 60)
        } else {
            setSec(secound)
        }
    }

    useEffect(() => {
        if(action === 'start') {
            intervalRef.current = setInterval(() => {
                if (sec > 0) {
                    setSec(sec -1)
                } else if(sec === 0 && min > 0) {
                    setMin(min -1)
                    setSec(59)
                } else if(sec === 0 && min === 0 && hour > 0) {
                    setHour(hour -1)
                    setMin(59)
                    setSec(59)
                }
            }, 1000)
        } else if(action === 'stop') {
            clearInterval(intervalRef.current)
        } else if (action == 'reset') {
            setHour(0)
            setMin(0)
            setSec(0)
            setAction('')
        } else {
            clearInterval(intervalRef.current)
        }
        return () => {
            clearInterval(intervalRef.current)
        }
    })

  return (
    <>
        <Input placeholder='Hour' value={hour} onChange={(event) => setHour(Number(event.target.value))}/>
        <Input placeholder='Min' value={min} onChange={(event) => handleMin(Number(event.target.value))}/>
        <Input placeholder='Sec' value={sec} onChange={(event) => handleSec(Number(event.target.value))}/>
        {/* {hour + ", " + min + "," + sec} */}
        <br />
        <Button onClick={() =>setAction('start')}>{action === 'stop'? "Resume": "Start"}</Button>
        <Button onClick={() =>setAction('stop')}>Stop</Button>
        <Button onClick={() =>setAction('reset')}>Reset</Button>
    </>
  )
}

export default CountDownTimer2
import { Button } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'

function StopWatch() {
    const [time, setTime] = useState({sec:0, milliSec:0})
    const [action, setAction] = useState('')
    const ref = useRef<any>()

    useEffect(() => {
        if(action == 'start') {
            ref.current = setInterval(() => {
                if(time.milliSec < 99) {
                    setTime({...time, milliSec: time.milliSec + 1})
                } else {
                    setTime({sec: time.sec + 1, milliSec: 0})
                }
            }, 10);
        } else if(action == 'stop') {
            clearInterval(ref.current)
        } else if(action == 'reset') {
            setTime({sec: 0, milliSec: 0})
            clearInterval(ref.current)
        }

        return () => {
            clearInterval(ref.current)
        }
    }, [action, time])

  return (
    <div>
        <div style={{}}>
            <span style={{fontSize:"2rem"}}>{time.sec}</span>
            S
            <span style={{paddingInline: "20px"}}>{time.milliSec}</span>
        </div>
        <div>
            <Button onClick={() => {
                if(action === 'start') {
                    setAction('stop')
                } else {
                    setAction('start')
                }
            }}>{action =='start'? "Stop": "Start"}</Button>
            <Button onClick={() => setAction('reset')}>Reset</Button>
        </div>
    </div>
  )
}

export default StopWatch
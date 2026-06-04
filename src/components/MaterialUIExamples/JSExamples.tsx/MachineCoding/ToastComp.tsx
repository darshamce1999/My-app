import React, { useEffect, useRef, useState } from 'react'
import style from "./ToastComp.module.css"
import { Button } from '@mui/material'

function ToastComp() {
    const {triggerNotification, template} = useNotificationHook()

  return (
    <div>
        <Button onClick={() => triggerNotification({type:"success", message:"Successfully saved", duration:3000, position:"bottomLeft"})}>Sucess</Button>
        <Button onClick={() => triggerNotification({type:"warning", message:"It will get deleted", duration:3000, position:"bottomRight"})}>Warning</Button>
        {template}
    </div>
  )
}

export default ToastComp

function Notification({type, message, clickHandler, position}:any) {

    return <div className={`${style[type]} ${style.toast} ${style[position]}`} onClick={clickHandler}>
        <span>{"ℹ️"}</span>
        <span>{message}</span>
        <span>{"❌"}</span>
    </div>
}

function useNotificationHook() {
    const [notification, setNotification] = useState<any>(null)
    const ref = useRef<any>()

    useEffect(() => {
        if(notification) {
            ref.current = setTimeout(() => {
                setNotification(null)
            }, 100000);
        }

        return () => {
            clearTimeout(ref.current)
        }
    }, [notification])

    function triggerNotification(value:any) {
        setNotification(value)
    }

    const template = notification !== null ? <Notification {...notification} clickHandler={() => setNotification(null)}/>: <></>
    return {triggerNotification, template}
}
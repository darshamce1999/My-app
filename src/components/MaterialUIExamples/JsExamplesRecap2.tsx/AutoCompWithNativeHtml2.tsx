import { Input } from '@mui/material'
import React, { useState } from 'react'
import style from "./AutoComp.module.css"

function AutoCompWithNativeHtml2() {
    const countries = ['india','swedon', 'finland', "Australia", "France"]
    const [seachRes, setSeachRes] = useState<string[]>([])
    const [text, setText] = useState('')

    function autoSuggest(value:string) {
        setText(value)
        if(value.length < 2) {
            setSeachRes([])
        } else {
            const res = countries.filter(data => data.toLowerCase().includes(value.toLowerCase()))
            setSeachRes(res)
        }
    }

  return (
    <div className={style.container}>
        <Input type='text' value={text} onChange={(event) => autoSuggest(event.target.value)}/>
        {seachRes.map(data => <div className={style.suggestion} onClick={() => setText(data)}>{data}</div>)}
    </div>
  )
}

export default AutoCompWithNativeHtml2
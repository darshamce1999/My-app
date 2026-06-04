import React, { useRef } from 'react'
import ForwardRefChildComp from './ForwardRefChildComp';
import { Button } from '@mui/material';

function ForwardRefComp() {
    const inputRef = useRef<any>();

  return <>
        <div>ForwardRefComp</div>
        <ForwardRefChildComp ref={inputRef}/>
        <Button onClick={() => {
            inputRef.current.style.backgroundColor = "red"
            console.log(inputRef.current)
        }}>Change background</Button>
    </>
}

export default ForwardRefComp

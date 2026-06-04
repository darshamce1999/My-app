import React, { useEffect, useRef, useState } from 'react'
import style from "./ProgressBar3.module.css"
import { Button } from '@mui/material';

function ProgressComp3() {
  const [state, setState] = useState(0);
  const [pause, setPause] = useState(false);
  const ref = useRef<any>();

  useEffect(() => {
    if(pause) {
      clearInterval(ref.current);
    }

    if(state < 100 && !pause) {
        ref.current = setInterval(() => {
            setState((prev) => prev + 5);
        }, 1000);
    } else {
        clearInterval(ref.current);
    }

    return () => {
      clearInterval(ref.current);
    };
  }, [state, pause]);

  return (
    <div className={style.wrapper} onMouseOver={() => {
      setPause(true)
    }}
    onMouseLeave={() => {
      setPause(false)
    }}
    >
      <span>{`${state} %`}</span>
      <div className={style.progress} style={{width: `${state}%`}}></div>
    </div>
  );
}

export default ProgressComp3

export function ProgressBarGroup() {
  const [state, setState] = useState([null])

  return <>
    <Button onClick={() => {
      const temp = [...state]
      temp.push(null)
      setState(temp)
    }}>Add</Button>
    {state.map(data => <ProgressComp3 />)}
  </>
}
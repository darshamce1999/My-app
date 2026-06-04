import React, { useEffect, useRef, useState } from 'react'
import style from "./AutoComplete3.module.css"

function AutoComplete3() {
  const countries = ['india','swedon', 'finland', "Australia", "France"]
  const [state, setState] = useState('')
  const [sugg, setSugg] = useState<string[]>([])

  useEffect(() => {
    if(state.length > 1) {
      const res = countries.filter(data => data.toLowerCase().includes(state.toLowerCase()))
      setSugg(res)
    } else {
      setSugg([])
    }
  }, [state])

  return (
    <div style={{width: "fit-content", margin: "auto"}}>
      <input onChange={(e) => setState(e.target.value)} value={state}/>
      {sugg.map((data, index) => <div key={index} className={style.suggestion} onClick={() => setState(data)}>{data}</div>)}
    </div>
  )
}

export default AutoComplete3


export function AutoCompleteWithDebouncing3() {
  const countries = ['india','swedon', 'finland', "Australia", "France"]
  const [state, setState] = useState('')
  const [sugg, setSugg] = useState<string[]>([])
  const ref = useRef<any>(null)

  function debouncing(value:string, timeOut:number) {
    if(ref.current) {
      clearTimeout(ref.current)
    }

    ref.current = setTimeout(() => {
      if(value.length > 1) {
        const res = countries.filter(data => data.toLowerCase().includes(value.toLowerCase()))
        setSugg(res)
      } else {
        setSugg([])
      }
    }, timeOut)
  }

  useEffect(() => {
    return () => {
      if (ref.current) clearTimeout(ref.current);
    };
  }, []);

  return (
    <div style={{width: "fit-content", margin: "auto"}}>
      <input onChange={(e) => {
        setState(e.target.value)
        debouncing(e.target.value, 3000)
      }} value={state}/>
      {sugg.map((data, index) => <div key={index} className={style.suggestion} onClick={() => setState(data)}>{data}</div>)}
    </div>
  )
}

// export function AutoCompleteWithThrottling3() {
//   const countries = ['india','swedon', 'finland', "Australia", "France"]
//   const [state, setState] = useState('')
//   const [sugg, setSugg] = useState<string[]>([])

//   function callbackFn(value:string) {
//     if(value.length > 1) {
//       const res = countries.filter(data => data.toLowerCase().includes(value.toLowerCase()))
//       setSugg(res)
//     } else {
//       setSugg([])
//     }
//   }

//   return (
//     <div style={{width: "fit-content", margin: "auto"}}>
//       <input onChange={(e) => {
//         setState(e.target.value)
//         throttling(callbackFn, e.target.value)
//         }} value={state}/>
//       {sugg.map((data, index) => <div key={index} className={style.suggestion} onClick={() => setState(data)}>{data}</div>)}
//     </div>
//   )
// }

// function throttlingUtil(timeout:number) {
//   let ref = Date.now()
//   return function(fn:any, value:string) {
//     if(Date.now() - ref > timeout) {
//       fn(value)
//       ref = Date.now()
//     }
//   }
// }

// const throttling = throttlingUtil(3000)

export function AutoCompleteWithThrottling3() {
  const countries = ["india", "swedon", "finland", "Australia", "France"];

  const [state, setState] = useState("");
  const [sugg, setSugg] = useState<string[]>([]);

  const lastExecuted = useRef<number>(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const throttle = (value: string, delay: number) => {
    const now = Date.now();

    if (now - lastExecuted.current >= delay) {
      // Execute immediately
      lastExecuted.current = now;
      runFilter(value);
    } else {
      // Schedule for later (trailing call)
      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      timeoutRef.current = setTimeout(() => {
        lastExecuted.current = Date.now();
        runFilter(value);
      }, delay - (now - lastExecuted.current));
    }
  };

  const runFilter = (value: string) => {
    if (value.length > 1) {
      const res = countries.filter((data) =>
        data.toLowerCase().includes(value.toLowerCase())
      );
      setSugg(res);
    } else {
      setSugg([]);
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div style={{ width: "fit-content", margin: "auto" }}>
      <input
        value={state}
        onChange={(e) => {
          const value = e.target.value;
          setState(value);
          throttle(value, 5000); // ⏱ throttle delay
        }}
      />

      {sugg.map((data, index) => (
        <div key={index} onClick={() => setState(data)}>
          {data}
        </div>
      ))}
    </div>
  );
}
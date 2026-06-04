import { Input } from '@mui/material'
import React, { useRef } from 'react'

export default function DebouncingAndThrotling() {
    const ref = useRef<any>()
    const throttleRef = useRef(true)
    const lastData = useRef('')

    function inputFn(data: string) {
        console.log(data)
    }

    function debouncing(fn: (data:string) => void, timeInterval: number) {
        return function(data:string) {
            if(ref.current) clearTimeout(ref.current)
            ref.current = setTimeout(() => {
                fn(data)
            }, timeInterval);
        }
    }

    function throttling(fn: (data:string) => void, timeInterval: number) {
        return function(data:string) {
            lastData.current = data
            if(throttleRef.current) {
                setTimeout(() => {
                    fn(lastData.current)
                    throttleRef.current = true
                }, timeInterval);
                throttleRef.current = false
            }
        }
    }
    // my logic


//  function throttling(fn: (data: string) => void, interval: number) {
//   return function (data: string) {
//     lastData.current = data;

//     if (!throttleRef.current) return;

//     //leading call
//     fn(lastData.current);
//     throttleRef.current = false;

//     setTimeout(() => {
//       throttleRef.current = true;

//       // trailing call
//       if (lastData.current !== data) {
//         fn(lastData.current);
//       }
//     }, interval);
//   };
// }
// chatgpt logic which is best one https://chatgpt.com/share/6962216e-f758-8010-9a7e-1201b85dd084



// function throtleFn(time: number) {
//     let timer = 0;
//     let timeoutId: any = null;

//     return function (fn: any, search: string) {
//         const now = Date.now();

//         if (now - timer > time) {
//             // Leading call
//             timer = now;
//             fn(search);
//         } else {
//             // Trailing call (last key press)
//             if (timeoutId) clearTimeout(timeoutId);

//             timeoutId = setTimeout(() => {
//                 timer = Date.now();
//                 fn(search);
//             }, time - (now - timer));
//         }
//     };
// }
//the the best https://chatgpt.com/share/69d1327a-cf68-83e8-bf65-d68d92b006f3


  return (
    <>
        <div>DebouncingAndThrotling</div>
        {/* <Input onChange={(event) => debouncing(inputFn, 1000)(event.target.value)}/> */}
        <Input onChange={(event) => throttling(inputFn, 5000)(event.target.value)}/>
    </>
  )
}

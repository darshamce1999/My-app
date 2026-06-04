import { useEffect, useRef, useState } from "react";

export function DebouncingAndThr3() {
    const [state, setState] = useState('')
    const ref = useRef<any>(0)
    const timerRef = useRef<any>()

    //Debouncing concept
    // function debouncing() {
    //     if(ref.current) clearTimeout(ref.current)

    //     ref.current = setTimeout(() => {
    //         const temp = ""
    //         console.log(state + temp)
    //     }, 1000);
    // }
    // useEffect(() => {
    //     if(!state.length) return
    //     debouncing()
    // }, [state])

     function throttling(timeout:number) {
        const now = Date.now()
        const diff = now - ref.current
        if(diff >= timeout) {
            console.log("now" + state)
            ref.current = now
        } else {
            if(timerRef.current) clearTimeout(timerRef.current)

            timerRef.current = setTimeout(() => {
                console.log("timeout" + state)
                ref.current = Date.now()
            }, timeout - diff);
        }
    }

    // function throttling(timeout:number) {

    // }

    useEffect(() => {
        if(!state.length) return
        throttling(8000)
    })
    
    return <>
        <input type="text" onChange={(e) => setState(e.target.value)} />
    </>
}
import { Key, useEffect, useRef, useState } from "react"
import style from "./OtpComp.module.css"
import { Console } from "console"

export const OtpComp = () => {
    const optLength = 4
    const [otp, setOtp] = useState<any>(new Array(optLength).fill(''))
    const ref = useRef<any>([])

    useEffect(()=>{
        if(ref.current[0]) {
            ref.current[0].focus()
        }
    }, [])

    function handleChange(index: number, value: string): void {
        const val = value.substring(value.length-1)
        const otpRef:any = [...otp]
        otpRef[index] = val
        setOtp([...otpRef])
        console.log(otpRef)

        if(val && index<optLength-1 && ref.current[index+1]) {
            ref.current[index+1].focus()
        }

        if(!val && index>0 && ref.current[index-1]) {
            ref.current[index-1].focus()
        }
    }

    console.log(otp)

    // function handleKeyDown(event: any, index: number): void {
    //     console.log(event)
    //     if(event.key === "Backspace" && index>0 && ref.current[index-1]) {
    //         ref.current[index-1].focus()
    //     }
    // }
    // onKeyDown={(event)=>handleKeyDown(event, index)}

    return <>
        {otp.map((_: any, index:number)=>
            <input 
                type="number"
                key={index}
                value={otp[index]}
                className={style.optBox}
                ref={(node)=>{
                    ref.current[index]=node
                }}
                onChange={(event)=>handleChange(index, event.target.value)}
            />
        )}
    </>
}
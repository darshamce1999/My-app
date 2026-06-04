import { Button } from "@mui/material"
import { useEffect, useState } from "react"

export const UseEffectWIthCondition = () => {
    const [count, setCount] = useState(0)

    //  useEffect(()=>{
    //     if(count%2 === 0) {
    //         console.log(count+ " is even")
    //     }
    //  },[count])

    //  useEffect(()=>{
    //     
    //         console.log(count+ " is even")
    //     
    //  },[count%2 === 0])  it won't through any error, and it won't work

     useEffect(()=>{
        
            console.log(count+ " is even")
        
     },[true? null: count])
    
     return <Button onClick={()=>setCount(count+1)}>Increment {count}</Button>
}
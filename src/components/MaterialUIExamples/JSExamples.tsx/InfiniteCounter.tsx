import { useEffect, useState } from "react"

export const InfiniteCounter = () => {

    const [count,setCount] = useState(0)

    useEffect(()=>{
        // setCount(count+1)
        const aa = count;
        console.log(aa)
    }, [count])

    return <button onClick={()=>{
        setCount(count+1)
    }}>
        Increment {count}
    </button>
}
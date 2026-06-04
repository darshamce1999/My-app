import React, { useEffect, useRef, useState } from 'react'

const config =[
    {
        title: "Customer Info",
        comp: () => <p>Enter your contact details</p>
    },
    {
        title: "Shipping Info",
        comp: () => <p>Enter shipping address</p>
    },
    {
        title: "Payment",
        comp: () => <p>Complete payment for your order</p>
    },
    {
        title: "Delivered",
        comp: () => <p>Your order has been delivered</p>
    }
]

function StepperComp() {
    const [count, setCount] = useState(0)
    const ref = useRef<any>([])
    const progressRef = useRef<any>()
    const greenProgressRef = useRef<any>()

    useEffect(() => {
        console.log(ref.current[0].offsetLeft)
        console.log(ref.current[config.length -1].offsetLeft)
        if(progressRef.current) {
            progressRef.current.style.left = `${ref.current[0].offsetLeft}px`
            progressRef.current.style.width = `${ref.current[config.length - 1].offsetLeft - ref.current[0].offsetLeft}px` 
        }
    }, [])

    useEffect(() => {
        if(greenProgressRef.current && count< config.length) {
            greenProgressRef.current.style.left = `${ref.current[0].offsetLeft}px`
            greenProgressRef.current.style.width = `${ref.current[count].offsetLeft - ref.current[0].offsetLeft}px` 
        }
    }, [count])
    
  return (
  <div style={{textAlign:"center", position:"relative", width:"80%", margin:"auto"}}>
    <div style={{display:"grid", gridTemplateRows:"50px", gridAutoColumns: "25%", gridAutoFlow: "column", position:"relative", zIndex:"10"}}>{config.map((data, index) => 
        <div style={{textAlign:"center"}}>
            <div style={{width:"25px", height: "25px",border:"1px solid black", backgroundColor: `${count > index ? "green" : count == index? "rgba(48, 132, 168, 0.53)": "lightGrey"}`, 
                borderRadius:"50%", margin:"auto"}} ref={(e) => ref.current[index] = e}>
                {count > index ? "✅": index +1}
            </div>
            <div >{data.title}</div>
        </div>)}
    </div>
    <div ref={progressRef} style={{height:"4px", backgroundColor:"black", position:"absolute", top:"12px", width:"100%", zIndex:"1"}}>
        <div ref={greenProgressRef} style={{height:"4px", backgroundColor:"green", zIndex:"1"}}></div>
    </div>
    {count < config.length && <div>{config[count].comp()}</div>}
    {count < config.length && <button style={{margin:"auto"}} onClick={() => setCount(count +1)}>Next</button>}
  </div>
    )
}

export default StepperComp
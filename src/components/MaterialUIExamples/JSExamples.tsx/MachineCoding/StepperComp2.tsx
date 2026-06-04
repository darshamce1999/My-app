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

function StepperComp2() {
    const [step, setStep] = useState(0)
    const ref = useRef<any>([])
    const progressRef = useRef<any>()
    const greenProgressRef = useRef<any>()

    useEffect(() => {
        if(progressRef.current) {
            progressRef.current.style.left = ref.current[0] + "px"
            progressRef.current.style.width = ref.current[config.length - 1] - ref.current[0] + "px"
        }
    }, [])

    useEffect(() => {
         if(greenProgressRef.current) {
            greenProgressRef.current.style.left = ref.current[0] + "px"
            greenProgressRef.current.style.width = ref.current[step] - ref.current[0] + "px"
        }
    }, [step])

  return (
    <div style={{width: "60vw", margin: "auto", position:"relative"}}>
        <div ref={progressRef} style={{height:"3px", backgroundColor:"black", position:"absolute", top:"12px", zIndex:1}}>
            <div ref={greenProgressRef} style={{height:"4px", backgroundColor:"green"}}></div>
        </div>

        <div style={{display: "flex", justifyContent: "space-between", alignItems:"center", position:"relative", zIndex:10}}>
            {config.map((data, index) => 
                <div style={{backgroundColor:"grey", 
                    border: "1px solid black", width:"25px", height:"25px", textAlign:"center", borderRadius:"50%"}} ref={(e) => {
                        if(e) {
                            ref.current[index] = e.offsetLeft
                        }
                }}>
                    {step > index? "✅": index + 1}
                </div>)}
        </div>

        <div style={{textAlign:"center"}}>
            
            {step < config.length && <p>{config[step].comp()}</p>}
            {step < config.length && <button onClick={() => setStep(step + 1)}>Next</button>}
        </div>
    </div>
  )
}

export default StepperComp2
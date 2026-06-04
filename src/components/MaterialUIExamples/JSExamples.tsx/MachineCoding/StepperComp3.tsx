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

function StepperComp3() {
  const [step, setStep] = useState(0)
  const ref = useRef<any>([])
  const bar = useRef<any>()
  const [dimension, setDimension] = useState<any>({left:"0", width:"0"})

  useEffect(() => {
    bar.current.style.left = `${ref.current[0].offsetLeft}px`;
    bar.current.style.width = ref.current[config.length - 1].offsetLeft - ref.current[0].offsetLeft + "px";
  }, [])

  useEffect(() => {
    if(step < config.length) {
      setDimension({left:ref.current[0].offsetLeft, width:ref.current[step].offsetLeft - ref.current[0].offsetLeft})
    }
  }, [step])
    
  return (
    <div style={{width:"60vw", margin:"auto", display:"flex", flexDirection:"column", alignItems:"center"}}>
    <div style={{width:"60vw", display:"flex", justifyContent:"space-between", position:"relative"}}>
      <div ref={bar} style={{position:"absolute", zIndex:"-1", top:"10px", height:"3px", backgroundColor:"black"}}>
        <div style={{backgroundColor:"green", height:"inherit", position:"relative", zIndex:1, width:`${dimension.width}px`}}></div>
      </div>
      {config.map((item, index) => <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
        <div style={{width:"25px", height:"25px", border:"1px solid black", borderRadius:"50%", textAlign:"center", backgroundColor: `${step == index ? "rgb(120, 202, 216)": index > step ? "rgba(123, 122, 122, 0.98)": "rgb(90, 209, 122)" }`}} ref={(e) => {
          ref.current[index] = e
        }}>{index + 1}</div>
        <span>{item.title}</span>
      </div>)}
    </div>
    {step < config.length && <p>{config[step].comp()}</p>}
    {step < config.length && <button onClick={() => setStep(step + 1)}>Next</button>}
    </div>
  )
}

export default StepperComp3
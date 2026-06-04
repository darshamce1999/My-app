import React, { useEffect, useRef, useState } from 'react'

function OtpLogin2() {
    const [otp, setOtp] = useState(new Array(4).fill(''))
    const ref = useRef<HTMLInputElement | any>([])

    useEffect(() => {
        if(ref.current[0]) {
            ref.current[0].focus()
        }
    }, [])


    function update(e:any, index:number) {
        // console.log(ref.current, value)
        const val = e.target.value

        if(isNaN(val)) return

        const temp = [...otp]
        temp[index] = val[val.length - 1]
        setOtp(temp)

        if(e.nativeEvent.inputType == "deleteContentBackward" && index>0) {
            ref.current[index - 1].focus();
        } else if(index < otp.length -1) {
            ref.current[index + 1].focus()
        }
    }

    function handleKeyDown(e:any, index:number) {
       if (e.key === "Backspace") {
            // const newOtp = [...otp];        
            // Move to previous field if empty
            ref.current[index - 1].focus();
        }
    }

  return (
    <div style={{width:"fit-content", margin: "auto"}}>
        {otp.map((data, index) => 
            <input key={index} type='text' value={data} style={{width: "50px", height: "50px", marginRight:"10px"}} 
                onChange={(e) => update(e, index)}
                ref={(e) => {
                    console.log('Calling...')
                    ref.current[index] = e
                }}
                // onKeyDown={(e) => handleKeyDown(e, index)}
            />
        )}
    </div>
  )
}

export default OtpLogin2
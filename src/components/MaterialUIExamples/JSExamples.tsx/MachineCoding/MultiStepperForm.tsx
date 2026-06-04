import React, { useState } from 'react'


const userDet = {
    step0: {
        firstName: "",
        lastName: "",
    },
    step1: {
        email: "",
        address: "",
    },
    step2: {
        cardNo: "",
        cvv: "",
    }
}

function MultiStepperForm() { 
    const [userDetails, setUserDetails] = useState(userDet)
    const [currentStep, setCurrentStep] = useState(0)

    const steps = [UserName,
        UserAdress,
        UserCardDetails
    ]

    function handleNext() {
            setCurrentStep(currentStep + 1)
    }

    const TemplateComp = steps[currentStep]


  return (
    <div style={{width:"fit-content", margin:"auto"}}>
        <TemplateComp />
        <div style={{display: "flex", justifyContent: `${currentStep != 0? "space-between": "flex-end"}`, paddingTop: "10px"}}>
            {currentStep != 0 ? <button onClick={() => setCurrentStep(currentStep - 1)}>Previous</button>: <></>}
            {currentStep < Object.keys(steps).length -1 && <button onClick={handleNext}>Next</button>}
        </div>
    </div>
  )
}

export default MultiStepperForm

function UserName() {


    return <div style={{display:"flex", flexDirection:"column", width:"30vw"}}>
        <label>First Name</label>
        <input type='text'/>
        <label>Last Name</label>
        <input type='text'/>
    </div>
}

function UserAdress() {


    return <div style={{display:"flex", flexDirection:"column", width:"30vw"}}>
        <label>Email</label>
        <input type='text'/>
        <label>Adress</label>
        <input type='text'/>
    </div>
}

function UserCardDetails() {


    return <div style={{display:"flex", flexDirection:"column", width:"30vw"}}>
        <label>Card No</label>
        <input type='text'/>
        <label>CVV</label>
        <input type='text'/>
    </div>
}
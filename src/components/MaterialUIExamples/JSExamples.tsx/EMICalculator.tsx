import { Box, Button, Input, Slider, TextField } from "@mui/material"
import { useState } from "react"

// export const EMICalculatorWithoutSlider = () =>{
//     const [amount, setAmount] = useState(0);
//     const [interest, setInterest] = useState(0);
//     const [tenure, setTenure] = useState(0);
//     const [emi, setEmi] = useState(0);

//     function getEmi() {
//         const r = Number(interest) / 100 / 12;  //get intreset in month, convert percentage to fraction
//         const n = Number(tenure) * 12;          //get tenure in month
//         const x = Math.pow(1 + r, n);
//         const monthlyEmi = (amount * r * x) /(x-1)
//         setEmi(Number(monthlyEmi.toFixed()))
//     }

//     return <Box sx={{padding: "20px"}}>
//         <Input type="number" placeholder="Loan amount" onChange={(event)=> {
//             setAmount(Number(event.target.value))
//         }}
//         />
//         <br /> <br />
//         <Input type="number"  placeholder="Rate of interest" onChange={(event)=> {
//             setInterest(Number(event.target.value))
//         }}
//         />
//         <br /> <br />
//         <Input type="number"  placeholder="Tenure" onChange={(event)=> {
//             setTenure(Number(event.target.value))
//         }}/>
//         <br /> <br />
//         <Button onClick={getEmi}>Calcualte EMI</Button>
//         <p>{emi}</p>
//     </Box>
// }

export const EMICalculator = () =>{
    const [amount, setAmount] = useState(0);
    const [interest, setInterest] = useState(0);
    const [tenure, setTenure] = useState(0);
    const [emi, setEmi] = useState(0);

    function getEmi() {
        const r = Number(interest) / 100 / 12;  //get intreset in month, convert percentage to fraction
        const n = Number(tenure) * 12;          //get tenure in month
        const x = Math.pow(1 + r, n);
        const monthlyEmi = (amount * r * x) /(x-1)
        //EMI = P x R x (1+R)^N / [(1+R)^N-1] 
        setEmi(Number(monthlyEmi.toFixed()))
    }

    return <Box sx={{padding: "20px", width:"40%"}}>
        <TextField type="number" placeholder="Loan amount" label="Loan Amount" onChange={(event)=> {
            setAmount(Number(event.target.value))
        }} value={amount}/>
        <Slider aria-label="Loan amount" min={1000} max={10000000} onChange={(event:any)=> {
            setAmount(Number(event.target.value))
        }} value={amount}/>
        <br /> <br />

        <TextField type="number" placeholder="Interest" label="Interest" onChange={(event)=> {
            setInterest(Number(event.target.value))
        }} value={interest}/>
        <Slider aria-label="Interest" min={1} max={20} step={0.1} onChange={(event:any)=> {
            setInterest(Number(event.target.value))
        }} value={interest}/>
        
        <TextField type="number" placeholder="Tenure" label="Tenure" onChange={(event)=> {
            setTenure(Number(event.target.value))
        }}
        value={tenure} />
        <Slider aria-label="Tenure" min={1} max={20} onChange={(event:any)=> {
             setTenure(Number(event.target.value))
        }} value={tenure}/>

        <Button variant="contained" onClick={getEmi}>Calcualte EMI</Button>
        <p>{`Monthly EMI - ${emi}`}</p>
        <p>{`Loan Amount - ${amount}`}</p>
        <p>{`Total Interest - ${emi * 12 *tenure - amount}`}</p>
        <p>{`Total Amount - ${emi * 12 * tenure}`}</p>
    </Box>
}
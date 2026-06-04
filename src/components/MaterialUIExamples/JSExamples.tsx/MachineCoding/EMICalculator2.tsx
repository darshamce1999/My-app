import React, { useEffect, useState } from 'react'

function EMICalculator2() {
    const [totalAmt, setTotalAmt] = useState(0)
    const [interest, setInterest] = useState(10)
    const [downPT, setDownPT] = useState(0)
    const [tenre, setTenure] = useState(1)
    const [emi, setEmi] = useState(0)

    function handleDownPayment(amt:number) {
        setDownPT(amt)
    }

    useEffect(() => {
        const r = (interest / 12 / 100)
        const temp = ((totalAmt - downPT) * r * Math.pow(1 + r, tenre * 12)) / (Math.pow(1 + r, tenre * 12) - 1)
        setEmi(Math.ceil(temp))
    }, [totalAmt, downPT, interest, tenre])

  return (
    <div style={{width:"fit-content", margin:"auto"}}>
        <p>Total Amount</p>
        <input placeholder="Total Amount" type='number' style={{width:"50vw"}} value={totalAmt} onChange={(e) => setTotalAmt(Number(e.target.value))}/>
        <p>Interest Rate in %</p>
        <input placeholder='Interest' type='number' style={{width:"50vw"}} value={interest} onChange={(e) => setInterest(Number(e.target.value))}/>
        <p>Down Payment {downPT}</p>
        <input type='range' style={{width:"50vw"}} min={0} max={totalAmt} value={downPT} onChange={(e) => handleDownPayment(Number(e.target.value))}/>
        <p>Total Loan Amount {(emi * tenre * 12)}</p>
        <p>Emi per month {emi}</p>
        {/* <input value={emi} type='range' style={{width:"50vw"}}/> */}
        <div style={{display:"flex", justifyContent:"space-between", gap:"1%"}}>
            {new Array(5).fill('').map((data:any,index:number) => <button style={{flexBasis:"10%", background:`${tenre == index + 1? "rgba(32, 179, 186, 0.4)" : ""}`, padding:"5px", borderRadius:"10px"}} onClick={(e) => setTenure(index + 1)}>{index + 1}</button>)}
        </div>
    </div>
  )
}

export default EMICalculator2
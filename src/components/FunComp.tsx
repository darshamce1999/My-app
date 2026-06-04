import React, { useEffect, useState } from "react";

export const FunComp:React.FunctionComponent = () =>{

    const [state, setState] = useState<{salary:number, age:number}>({salary:30000, age:22});

    useEffect(()=>{
        return () =>{
            console.log("useEffect clean up");
        }
    })

    return <>
        <h1 className="head">
            This is Fun comp
        </h1>
        <button onClick={()=>setState({...state, salary:state.salary+1000})}>Increase Salary</button>
        <button onClick={()=>setState({...state, age:state.age+1})}>Increase age</button>
        <p>Salary: {state.salary}, Age: {state.age}</p>
    </>
}

function qq() {
    console.log("qq function")
    return "Aa";
}
qq()
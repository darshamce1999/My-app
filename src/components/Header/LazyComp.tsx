import { useEffect } from "react";

function resolePromise () {
    return new Promise((resole, reject)=>{
        setTimeout(()=>{
            console.log('I ran after 2 sec')
            resole("11")
        }, 2000)
    })
}

function rejectPromise () {
    return new Promise((resole, reject)=>{
        setTimeout(()=>{
            console.log('I ran after 2 sec')
            reject("11")
        }, 2000)
    })
}

export const LazyComp = () => {

    async function getData() {
        const data = await resolePromise()
        console.log("inside getData")
        console.log(data)
    }
    getData()
    console.log("AFter getData")

    return <h1>I am Lazy laoded comp</h1>
}
export default LazyComp;
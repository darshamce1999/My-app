import React from 'react'

function PromisePollyFill() {

//     const promise = new Promise((res, rej) => {
//     setTimeout(() => {
//         res(10)
//     }, 3000)
// })

// promise
//     .then(data => console.log("Then block " + data))
//     .catch(err => console.log("Catch block " + err))
    
// function myPromise(fn) {
//     let successValue = null
//     let isExecuted = false
//     let thenBlock
//     let catchBlock
//     const res = (value) => {
//         // console.log("res =" + value)
//         successValue = value
//         if(!isExecuted && typeof thenBlock === 'function') {
//             thenBlock(value)
//         }
//     }
    
//     let failureValue = null
//     const rej = (value) => {
//         // console.log("rej =" + value)
//         failureValue = value
//         if(!isExecuted && typeof catchBlock === 'function') {
//             catchBlock(value)
//         }
//     }
    
//     fn(res, rej)
    
    
//     return {
//         then: function (thenFn) { 
//             thenBlock = thenFn
//             if(successValue !== null) {
//                 console.log('Promise Pollyfill then')
//                 isExecuted = true
//                 thenFn(successValue)
//             }
//             return this
//          },
//         catch: function (catchFn) { 
//             catchBlock = catchFn
//             if(failureValue !== null) {
//                 console.log('Promise Pollyfill catch')
//                 isExecuted = true
//                 catchFn(failureValue)
//             }
//             return this
//         }
//     }
// }

// const myPrm = myPromise((res, rej) => {
//     rej(10)
//     // setTimeout(() => res(10), 5000)
// })

// myPrm
//  .then(data => console.log("myPrm " + data))
//  .catch(err => console.log("myPrm " + err))
    

  return (
    <div>PromisePollyFill</div>
  )
}

export default PromisePollyFill
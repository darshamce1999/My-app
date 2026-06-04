import React from 'react'

function PromiseAllPolyFill() {
// const p1 = new Promise((res, rej) => {
//     res(10)
//     // setTimeout(() => res(10), 3000)
// })

// const p2 = new Promise((res, rej) => {
//     res(20)
//     // setTimeout(() => res(20), 2000)
// })

// // Promise.all([p1, p2])
// //     .then(data => console.log(data))
// //     .catch(err => console.log("error " + err))
    
    
// class customPromise {
//     static all(promiseArr) {
//         let success = []
//         let successFn
//         let errFn

//         for(let i=0; i<promiseArr.length; i++) {
//             promiseArr[i]
//                 .then(data => {
//                     success.push(data)
//                     if(promiseArr.length === success.length) {
//                         successFn(success)
//                     }
//                 })
//                 .catch(err => {
//                     errFn(err)
//                 })
//         }
//         return {
//              then: function(fn)  {
//                 successFn = fn
//                 return this
//             },
//             catch: function(fn) {
//                 errFn = fn
//                 return this
//             }
//         }
//     }
// }

// customPromise.all([p1, p2])
//     .then(data => console.log(data))
//     .catch(err => console.log("err " + err))


  return (
    <div>PromiseAllPolyFill</div>
  )
}

export default PromiseAllPolyFill
import React from 'react'

function FunctionCurrying2() {

    //  function sum(...a:any[]) {
    //     if(arguments.length > 1) {
    //         return a[0]+a[1]
    //     } else {
    //         return function(b:any) {
    //             return a+b
    //         }
    //     }
    // }
    // console.log(sum(1,2))
    // console.log(sum(1)(2))

     function infinteFnCurrysum(a:any) {
        return function(...b: any) {
            if(arguments.length > 0) {
                return infinteFnCurrysum(a + arguments[0])
            } else {
                return a
            }
        }
    }

    console.log(infinteFnCurrysum(1)(8)(1)())

  return (
    <div>FunctionCurrying2</div>
  )
}

export default FunctionCurrying2
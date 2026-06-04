import React from 'react'

function Fibonasi() {

    function fib(num: number) {
        const arr = [0, 1]
        for(let i = 2; i< num; i++) {
            arr[i] = arr[i-1] + arr[i-2]
        }
        return arr
    }

    console.log(fib(10))

  return (
    <div>Fibonasi</div>
  )
}

export default Fibonasi
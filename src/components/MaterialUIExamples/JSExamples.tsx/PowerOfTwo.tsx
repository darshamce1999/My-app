import React from 'react'

function PowerOfTwo() { 
    function isPowerOf2(num: number) {
        if(num < 2 && num > 0) {
            return true
        }

        while(num > 1) {
            if(num % 2 !== 0) {
                return false
            }
            num = num /2
        }
        return true
    }

    console.log(isPowerOf2(1))
    console.log(isPowerOf2(2))
    console.log(isPowerOf2(4))
    console.log(isPowerOf2(9))

  return (
    <div>PowerOfTwo</div>
  )
}

export default PowerOfTwo
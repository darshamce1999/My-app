import React from 'react'

function IsPrimeComp() {

    function isPrime(num: number) {
        if(num<1) {
            return false
        }
        for(let i=2; i<num; i++) {
            if(num % i ==0) {
                return false
            }
        }
        return true;
    }

    console.log(isPrime(11))

  return (
    <div>IsPrimeComp</div>
  )
}

export default IsPrimeComp
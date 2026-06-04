import React from 'react'



function Factorial() {
    function fact(num:number):number {
        if(num == 0) {
            return 1
        } else {
            return num * fact(num - 1)
        }
    }

    console.log(fact(4))

  return (
    <div>Factorial</div>
  )
}

export default Factorial
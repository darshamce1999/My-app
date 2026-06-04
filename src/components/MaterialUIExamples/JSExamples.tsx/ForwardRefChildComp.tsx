import React, { forwardRef } from 'react'

function ForwardRefChildComp(props:any, ref:any) {

    function aaa() {
        console.log("i am ForwardRef Child function")
    }

  return (
    <div ref={ref}>ForwardRefChildComp</div>
  )
}

export default forwardRef(ForwardRefChildComp);
import { Button } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from './CakeAction'

function CakeContainerHook4() {
    const reduxSate = useSelector((state:any) => state.cake.noOfCake)
    const dispatch = useDispatch()

  return (
    <>
        <div>CakeContainerHook4 {reduxSate}</div>
        <Button onClick={() => dispatch(buyCake())}>Buy 2 cake</Button>
    </>
  )
}

export default CakeContainerHook4
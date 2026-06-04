import { Button } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from './CakeAction'

function CakeConatiner() {
    const cakeState = useSelector((state:any) => {
        return state.noOfCake
    })
    const dispatch = useDispatch()

  return (
    <>
        state: {cakeState}
        <Button onClick={() => dispatch(buyCake())}>Buy Cake</Button>
    </>
  )
}

export default  CakeConatiner
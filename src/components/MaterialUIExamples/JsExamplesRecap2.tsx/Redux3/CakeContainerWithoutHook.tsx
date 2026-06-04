import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from './CakeAction'
import { Button } from '@mui/material'

function CakeContainerWithoutHook(props:any) {


  return (
    <>
        State: {props.noOfCake}
        <Button onClick={props.buyCake}>BuyCake</Button>
    </>
  )
}

function mapStateToProps(state:any) {
    return {
        noOfCake: state.noOfCake
    }
}

function mapDispatchToProps(dispatch:any) {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainerWithoutHook)
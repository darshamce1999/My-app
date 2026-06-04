import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from './CakeAction'
import { Button } from '@mui/material'

function CakeContainer(props:any) {
    console.log(props)
  return (
    <>
        <div>CakeContainer 4</div>
        <p>{props.noOfCake}</p>
        <Button onClick={props.buyCake}>Buy Cake</Button>
    </>
  )
}

const mapStateToProps = (state:any) => {
    return {
        noOfCake: state.cake.noOfCake
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
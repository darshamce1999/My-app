import { Button } from '@mui/material'
import React from 'react'
import { buyIceCream } from '../../Redux/IceCream/IceCreamAction'
import { connect } from 'react-redux'

function IceCreamContainer2(props:any) {

  return (
    <>
      <div>{props.iceCream}</div>
      <Button onClick={props.buyIceCream}>Buy Ice Cream</Button>
    </>
  )
}

const mapStateToProps = (state:any) => {
  return {
    iceCream: state.iceCream.noOfIceCream
  }
}

const mapDispatchToProps = (dispatch:any) => {
  return {
    buyIceCream : () => dispatch(buyIceCream()) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer2)
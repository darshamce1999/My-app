import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from './Cake/CakeAction'
import { Button } from '@mui/material'

function CakeContainer2(props:any) {
    return (
        <>
            <div>{props.cakeCount}</div>
            <Button onClick={props.buyCake}>Buy Cake</Button>
        </>
    )
}

  const mapStateToProps = (state: any) => {
        return {
            cakeCount: state.cake.noOfCakes
        }
    }

    const mapDispatchToProps = (dispatch: any) => {
        return {
            buyCake: () => dispatch(buyCake())
        }
    }

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer2)
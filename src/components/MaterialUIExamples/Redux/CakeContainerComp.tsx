import { Button } from "@mui/material"
import { buyCake } from "./Cake/CakeAction"
import { connect } from "react-redux"

const CakeContainerComp = (props:any) => {

    return <>
        <h3>Cake container {props.noOfCakes}</h3>
        <Button onClick={props.buyCake}>Buy Cake</Button>
    </>
}

const mapStateToProps = (state:any) => {
    return {
        noOfCakes: state.cake.noOfCakes
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainerComp);
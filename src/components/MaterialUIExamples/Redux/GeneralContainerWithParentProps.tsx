import { Button } from "@mui/material"
import { buyCake } from "./Cake/CakeAction"
import { connect } from "react-redux"
import { buyIceCream } from "./IceCream/IceCreamAction"

const GeneralContainerWithParentProps = (props:any) => {

    return <>
        <h3>{props.isCake} container {props.item}</h3>
        <Button onClick={props.buyCake}>Buy Cake</Button>
    </>
}

const mapStateToProps = (state:any, ownProps:any) => {
    const item = ownProps.isCake == "cake"? state.cake.noOfCakes: state.iceCream.noOfIceCream;
    return {
        item: item
    }
}

const mapDispatchToProps = (dispatch:any, ownProps:any) => {
    const item = ownProps.isCake == "cake"? buyCake(): buyIceCream();
    return {
        buyCake: () => dispatch(item)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GeneralContainerWithParentProps);
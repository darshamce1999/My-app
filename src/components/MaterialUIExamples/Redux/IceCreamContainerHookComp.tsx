import { Button } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { buyIceCream } from "./IceCream/IceCreamAction";

export const IceCreamContainerHookComp = () =>{
    const noOfIceCream = useSelector((state:any) => state.iceCream.noOfIceCream)
    const dispatch = useDispatch();

    return <>
        <h3>IceCream reducer {noOfIceCream}</h3>
        <Button onClick={()=>dispatch(buyIceCream())}>Buy Ice Cream</Button>
    </>
}
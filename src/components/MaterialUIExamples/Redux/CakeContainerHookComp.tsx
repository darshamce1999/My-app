import { Button } from "@mui/material"
import { buyCake } from "./Cake/CakeAction"
import { useDispatch, useSelector } from "react-redux"

export const CakeContainerHookComp = (props:any) => {

    const noofCakes = useSelector((state:any) => state.cake.noOfCakes)
    const dispatch = useDispatch()

    return <>
        <h3>Cake container Hook {noofCakes}</h3>
        <Button onClick={()=>dispatch(buyCake())}>Buy Cake</Button>
    </>
}
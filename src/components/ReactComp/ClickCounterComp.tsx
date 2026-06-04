import { Button } from "@mui/material";
import HOCComp from "./HOCComp";
import React from "react";

class ClickCounterComp extends React.Component<{count:number, increment:() => void}> {
    constructor(props:{count:number, increment:() => void}) {
        super(props);
    }

    render () {
        return <Button onClick={this.props.increment}>Click {this.props.count}</Button>
    }
}
export default HOCComp(ClickCounterComp);
import React from "react";
import { ChildClassComp } from "./ChildClassComp";

interface propType {
    name?: string
}

export class ClassComp extends React.Component<propType, {count: number}> {

    constructor(props: propType) {
        super(props);
        this.state = {
            count:0
        }
    }
    
    
    render() {
        return <>
            <h1>I am ClassComp {this.state.count}</h1>
            <button onClick={()=>this.setState({count:this.state.count+1})}>Increment</button>
            <ChildClassComp counter={this.state.count} />
        </>
    }
}
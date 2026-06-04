import React from "react";

interface propType {
    counter?:number
}
export class ChildClassComp extends React.Component<propType, {salary:number,age:number}> {
    constructor(props: propType) {
        super(props);
        this.state = {
            salary:30000,
            age:0
        }
        console.log("I am ChildClassComp constructor")
    }

    static getDerivedStateFromProps(props:any, state:any) {
        console.log("getDerivedStateFromProps Props", props)
        console.log("getDerivedStateFromProps state", state)

        console.log(this)
        return {age:props.counter+5}
    }

    componentDidMount(): void {
        console.log("I am ChildClassComp componentDidMount")
    }

    shouldComponentUpdate(nextProps: Readonly<propType>, nextState: Readonly<{ salary: number; age: number; }>, nextContext: any): boolean {
        console.log("shouldComponentUpdate nextProps", nextProps)
        console.log("shouldComponentUpdate CurProp", this.props)
        console.log("shouldComponentUpdate nextState", nextState)
        console.log("shouldComponentUpdate CurState", this.state)
        return true;
    }

    getSnapshotBeforeUpdate(prevProps: Readonly<propType>, prevState: Readonly<{ salary: number; age: number; }>) {
        console.log("getSnapshotBeforeUpdate PrevProp", prevProps)
        console.log("getSnapshotBeforeUpdate CurProp", this.props)
        console.log("getSnapshotBeforeUpdate prevState", prevState)
        console.log("getSnapshotBeforeUpdate CurState", this.state)

        return "abc"

    }

    componentDidUpdate(prevProps: Readonly<propType>, prevState: Readonly<{ salary: number; age: number; }>, snapshot?: any): void {
        console.log("componentDidUpdate PrevProp", prevProps)
        console.log("componentDidUpdate CurProp", this.props)
        console.log("componentDidUpdate prevState", prevState)
        console.log("componentDidUpdate CurState", this.state)
        console.log("componentDidUpdate snapshot", snapshot)
    }

    componentWillUnmount(): void {
        console.log("I am ChildClassComp  componentWillUnmount")
    }

    render(): React.ReactNode {
        console.log("I am ChildClassComp render")
        return <>
            <h1>I am ChildClassComp</h1>
            <h2>Prop {this.props.counter}</h2>
            <button onClick={()=>this.setState({salary:this.state.salary+1000})}>Increase Salary</button>
            <button onClick={()=>this.setState({age:this.state.age+1})}>Increase age</button>
            <p>Salary: {this.state.salary}, Age: {this.state.age}</p>
        </>;
    }
}
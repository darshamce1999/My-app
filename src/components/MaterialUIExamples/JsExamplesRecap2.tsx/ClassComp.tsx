import { Button } from '@mui/material'
import { count } from 'console'
import React, { Component } from 'react'

export class ClassComp extends Component<any, {count: number}> {

    constructor(props:any) {
        super(props)
        this.state = {
            count: 0
        }
        console.log("I am constructor")
    }

    static getDerivedStateFromProps(props:any, state:any) {
        console.log("I am getDerivedStateFromProps")
        console.log(props)
        console.log(state)
        return state
    }

    shouldComponentUpdate(nextProps: Readonly<any>, nextState: Readonly<{ count: number; }>, nextContext: any): boolean {
        console.log("I am shouldComponentUpdate")
        console.log(nextProps)
        console.log(nextState)
        return true
    }

    getSnapshotBeforeUpdate(prevProps: Readonly<any>, prevState: Readonly<{ count: number; }>) {
        console.log("I am getSnapshotBeforeUpdate")
        console.log(prevProps)
        console.log(prevState)
        console.log(this.state)
        return "Dar"
    }

    componentDidMount(): void {
        console.log("I am componentDidMount")
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<{ count: number; }>, snapshot?: any): void {
        console.log("I am componentDidUpdate")
        console.log(prevProps)
        console.log(prevState)
        console.log(this.state)
        console.log(snapshot)
    }

    componentWillUnmount(): void {
        console.log("I am componentWillUnmount")
    }
    
  render() {
    console.log("I am render")
    return (
        <Button onClick={() => this.setState({count: this.state.count + 1})} variant='contained'>
            {this.state.count}
        </Button>
    )
  }
}

export default ClassComp
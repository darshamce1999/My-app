import { Button } from '@mui/material'
import React, { useReducer } from 'react'

function reducer(state:InitailState, action:any) {
    switch(action.type) {
        case 'add':  return {
            ...state,
            value: state.value + 1
        }
        case 'sub':  return {
            ...state,
            value: state.value - 1
        }
        default: return state
    }
}

type InitailState = {
    value: number
}

const initialState = {
    value: 0
}

function UseReducerComp2() {
    const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
        {state.value}
        <Button onClick={() => dispatch({type:'add'})}>Add</Button>
        <Button onClick={() => dispatch({type:'sub'})}>Sub</Button>
    </div>
  )
}

export default UseReducerComp2
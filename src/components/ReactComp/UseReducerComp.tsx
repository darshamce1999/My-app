import { Button } from "@mui/material"
import { useReducer } from "react"

const initialState = {
    count:10
}

const reducer = (state:any, action: { type: string }) => {
    switch(action.type) {
        case 'increment': 
            return {
                count: state.count + 1
            }
        case 'decrement': 
            return {
                count: state.count - 1
            }
        case 'reset': 
            return {
                count: initialState.count
            }
        default: return state;
    }
}






//get array with start from given element number from backside, consider 4
//from backside if we take last 4 number, the number will be "3"

const array1 = [1,2,3,4,5,6];
array1.reverse();
// [6, 5, 4, 3, 2, 1]

  console.log(array1);

  const output=[]

  for(let i=0; i<array1.length; i++) {
    let j = 4-1-i;
    j = j<0 ? array1.length+j: j;
    output.push(array1[j])
  }
  console.log(output);
  //[3, 4, 5, 6, 1, 2]


 var a = 10;
 let b = 20;

 function innearFn() {
    var a = 100;
    let b = 200;
    console.log(a)
    console.log(b)
 }

 innearFn()
 console.log(a)
 console.log(b)


export const UseReducerComp = () =>{
    const [state, dispatch] = useReducer(reducer, initialState);

    return <>
        <p>count - {state.count}</p>
        <Button onClick={()=>dispatch({type: 'increment'})}>Increment</Button>
        <Button onClick={()=>dispatch({type: 'decrement'})}>decrement</Button>
        <Button onClick={()=>dispatch({type: 'reset'})}>Reset</Button>
    </>
}
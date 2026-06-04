import React from 'react'

function SubsetArrayOfUniqueEle() {

    function SubSet(array: number[]):number[][] {
        const result: number[][] = []

        function backTrace(index:number, ele:number[], state: number[]) {
            if(index === array.length) {
                result.push(state.slice())
                return;
            }

            backTrace(index + 1, ele, state)

            state.push(ele[index])
            backTrace(index + 1, ele, state)
            state.pop()
        }

        backTrace(0, array, [])
        return result;
    }

    console.log(SubSet([1,2,3]))

  return (
    <div>SubsetArrayOfUniqueEle</div>
  )
}

export default SubsetArrayOfUniqueEle
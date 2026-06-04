import React from 'react'


function FindingPossibleCombination() {

    function permuation(word:string):string[] {
        const result:string[] = []

        const char = word[0]
        function backtrace(index:number, char:string, state:string[]) { 
            if(word.length === state.length) {
                result.push(state.join(""))
                return
            }

            if(!Number.isInteger(Number.parseInt(char))) {
                state.push(char.toLowerCase())
                backtrace(index + 1 , word[index+1], state)
                state.pop()

                state.push(char.toUpperCase())
                backtrace(index + 1 , word[index+1], state)
                state.pop()
            } else {
                state.push(char)
                backtrace(index + 1 , word[index+1], state)
                state.pop()
            }
        }

        backtrace(0, char, [])
        return result
    }

    console.log(permuation("a1b2"))

  return (
    <div>FindingPossibleCombination</div>
  )
}

export default FindingPossibleCombination
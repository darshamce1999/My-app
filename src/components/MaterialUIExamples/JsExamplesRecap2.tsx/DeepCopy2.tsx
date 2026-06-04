import React from 'react'

function DeepCopy2() {

    function DeepCopy(value:any):any {
        if(typeof value !== 'object') {
            return value
        } else if(Array.isArray(value)) {
            return value.map((data:any) => {
                if(typeof value !== 'object') {
                    return data
                } else {
                    return DeepCopy(data)
                }
            })
        } else {
            return Object.keys(value).reduce((acc:any, key:any) => {
                if(typeof value !== 'object') {
                    acc[key] = value[key]
                } else {
                    acc[key] = DeepCopy(value[key])
                }
                return acc
            }, {})
        }
    }

    // const input = [1,2,3, [4, [5]]]
    const input = {a: 1, b: { c: 2}}
    const deepCopied = DeepCopy(input)
    console.log(deepCopied)

    // input.push(6)
    input.b.c = 3

    console.log(input)
    console.log(deepCopied)

  return (
    <div>DeepCopy2</div>
  )
}

export default DeepCopy2
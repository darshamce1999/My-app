import React from 'react'

function DeepCopyComp() {

    let inputObj = {
        age: 26,
        name: "Dar",
        friends: {
          name:"siddesh",
          age: 25,
          books: {
            name: "Billionaire",
            price: "350",
          }
        }
      }
      
      function deepcopy(obj:any) {
        const outputObj:any = {}
        for(let [key, val] of Object.entries(obj)) {
          if(typeof val !== 'object') {
            outputObj[key] = val;
          } else {
            outputObj[key] = deepcopy(val)
          }
        }
        return outputObj;
      }

      console.log(deepcopy(inputObj))

  return (
    <div>DeepCopyComp</div>
  )
}

export default DeepCopyComp
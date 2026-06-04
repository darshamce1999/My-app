import React from 'react'

function RegexComp() {

    const input = "i am going to be king"

    // console.log(input.search('ing'))
    // console.log(input.search(/ing/i))
  
    //match
    // console.log(input.match('ing'))
    // console.log(input.match(/ing/gi))
  
    //matchAll
    // console.log(input.match(/ing/gi))
    // const res = input.matchAll('ing')
    // console.log(res)
    // for(let i of res) {
    //   console.log(i)
    // }

    // const res2 = input.matchAll(/ing/gi)
    // for(let i of res2) {
    //   console.warn(i)
    // }




    const sentence = "how are you, are you good? i am good.!"
    //expectd output - "good are you you are how,?"
    function transform(input = "") {
      const getSpecialChar = input.matchAll(/[^{\ }\w]/gi) //regex for (not space) and (not word character)
      let specialChar = ""
      for(let i of getSpecialChar) {
        specialChar += i[0];
      }

      const withoutSpecialChar = input.replaceAll(/[^{\ }\w]/gi, "")
      const res = withoutSpecialChar.split(' ').reverse().join(' ')

      return res.concat(specialChar)
    }
    
    // console.log(transform(sentence))

    return <>Regex</>
}

export default RegexComp
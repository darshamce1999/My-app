 
 export const SomePollyFill = () => {
    const ages = [3, 10, 18, 12];

    console.log("some " + ages.some(function checkAdult(age) {
        return age > 18;
      }))


      const arr = [3, 10, 18, 12];
      function mySome(callBack:(a:number)=>boolean) {
        for(let i=0; i<arr.length; i++) {
            const result = callBack(arr[i])
            if(result) {
                return result
            }
        }
        return false
      }

    //   Array.prototype.mySome = function mySome(callBack) {
    //     const arr = this
    //         for(let i=0; i<arr.length; i++) {
    //             const result = callBack(arr[i])
    //             if(result) {
    //                 return result
    //             }
    //         }
    //         return false
    // }

      return <></>
 }
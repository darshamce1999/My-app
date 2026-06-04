
export const ReducerPollyFill = () => {

    const arr = [1,2,4,11]

    const sum = arr.reduce(
        (sum, b)=>
          {return  sum+b}, 
        0);
    console.log(sum)

    // const arr = [1,2,4]

    // Array.prototype.myReduce = function(mapFun, initialValue) {
    //     let output = initialValue? initialValue: 0;
    //     function myReduce(arr, mapFun) {
    //         for(let i=0; i<arr.length; i++) {
    //             output = mapFun(output, arr[i]);
    //         }
    //     }
    //     myReduce(this, mapFun)
    //     return output;
    // }
    
    // console.log(arr.myReduce((a, b)=> a+b, 10))
    
    return <h1>Reducer</h1>

}
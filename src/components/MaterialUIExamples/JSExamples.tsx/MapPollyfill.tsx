
export const MapPollyfill = () => {
    const data = [1,2,3]

    const output = []
    function myMap(arr:any, mapFun: (a:number)=>number) {
        for(let i=0; i<arr.length; i++) {
            output.push(mapFun(arr[i]));
        }
    }

    // Array.prototype.myMap = function(mapFun) {
    // const output = []
    //    function myMap(arr:any, mapFun: (a:number)=>number) {
    //       for(let i=0; i<arr.length; i++) {
    //         output.push(mapFun(arr[i]));
    //       }
    //    }
    //    myMap(this, mapFun)
    //    return output
    // }

    // console.log(arr.myMap((a)=> a*2))

    return <h1>Flat</h1>
}
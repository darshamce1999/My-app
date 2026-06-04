
export const ArrayFlatPollyFill = () => {
    
    const arrData: any[] = []
    let depthlevel = 4

    function MyFalt(arr:any):any {
        depthlevel--;
        for(let i=0; i<arr.length; i++) {
            if(Array.isArray(arr[i]) && depthlevel!==0) {
                MyFalt(arr[i])
            } else {
                arrData.push(arr[i])
            }
        }
        return arrData;
    }

    console.log(MyFalt([1,2,[3,5,[7,8, [9]],10]]))


    // Array.prototype.myflat = function(depth) {
    //     const arrData = []
    //     let depthlevel = depth? depth: Infinity;
    //     function MyFalt(arr) {
    //         depthlevel--;
    //         for(let i=0; i<arr.length; i++) {
    //             if(Array.isArray(arr[i]) && depthlevel!==0) {
    //                 MyFalt(arr[i])
    //             } else {
    //                 arrData.push(arr[i])
    //         }
    //         return arrData;
    //     }
    //     return MyFalt(this)
    // }

    return <h1>Flat</h1>
}
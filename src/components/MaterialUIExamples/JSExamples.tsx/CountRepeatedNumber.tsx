
export const CountRepeatedNumber = () => {


    const arr = [1,2,1,3,2,1]

    let obj:any = {}

    for(let i=0; i<arr.length; i++) {
        if(Object.hasOwn(obj, arr[i])) {
            obj[arr[i]] = obj[arr[i]] + 1
        } else {
            obj[arr[i]] = 1;
        }
    }

    console.log(obj)

    const map = new Map()

    for(let i=0; i<arr.length; i++) {
        if(map.has(arr[i])) {
            const val =  map.get(arr[i])
            map.set(arr[i], val+1)
        } else {
            map.set(arr[i], 1)
        }
    }

    console.log(map)

    //https://github.com/xcollantes/portfolio/issues/74
    // const repeatedCount = Object.groupBy(arr, (a:number)=>{
    //     console.log(a)
    //     return a
    // });
    // console.log(repeatedCount);


    // const arrObj = [{type:'fruit', count:1}, {type:'veg', count:1}, {type:'fruit', count:2}]
    // const repeatedobjCount = Object.groupBy(arrObj, (a:any)=>{
    //     console.log(a)
    //     return a.type
    // });
    // console.log(repeatedobjCount);

    return <h3>CountRepeatedNumber</h3>
}
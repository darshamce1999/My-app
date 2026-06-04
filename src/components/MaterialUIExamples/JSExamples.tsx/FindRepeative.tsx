
export const FindRepeative = () => {

    const arr= [1,1,1,1,3,3,3,3,2,2,1,2,2,2,2];
    
    let count = 1
    let str = ""
    for(let i=0; i<arr.length; i++) {
        if(arr[i] === arr[i+1]) {
            count = count+1
        } else {
            str = str + arr[i] + count
            count = 1
        }
    }
    
    const countArray = str.split('');

    const obj:any = {}

    for(let i=0; i<countArray.length; i=i+2) {
        if(!!obj[countArray[i]]) {
            if(countArray[i+1] > obj[countArray[i]]) {
                obj[countArray[i]] = countArray[i+1]
            } 
        } else {
            obj[countArray[i]] = countArray[i+1]
        }
    }

    let result = null
    let outPut = null
    for(let key of Object.keys(obj)) {
      if(obj[key] > result) {
        result = obj[key];
        outPut = key;
      }
    }

    console.log(obj)
    console.log(outPut)

    // const map = new Map();

    // for(let i=0; i<countArray.length; i=i+2) {
    //     if(map.has(countArray[i])) {
    //         const val = map.get(countArray[i]) > countArray[i+1] ? map.get(countArray[i]): countArray[i+1]
    //         map.set(countArray[i], val)
    //     } else {
    //         map.set(countArray[i], countArray[i+1])
    //     }
    // }

    // console.log(str)
    // console.log(map)

    // let result = null
    // let outPut = null
    // for(let key of map.keys()) {
    //   if(map.get(key) > result) {
    //     result = map.get(key);
    //     outPut = key;
    //   }
    // }

    // console.log(outPut)

    return <p>FindRepeative </p>

}
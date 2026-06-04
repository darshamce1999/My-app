
export function ArrayComp() {
    const data =["Banana", "Orange", "Apple", "Mango"];
    const b = data.keys()

    console.log("Array slice")
    console.log(data.slice(1,3))
    console.log(data)

    console.log("Array splice")
    console.log(data.splice(1,3, "watermlon", "jackfruit"))
    console.log(data)

    console.log("copyWithin")
    console.log(data.copyWithin(1, 0))
    console.log(data)

    console.log("fill")
    console.log(data.fill('Dar', 1, 3))
    console.log(data)

    console.log("shift") //remove first element in arry if u call shift
    console.log(data.shift())
    console.log(data)

    console.log("Delete") //remove first element in arry if u call shift
    console.log(data.push("abc"))
    console.log(delete data[0])
    console.log(data)

    console.log("flat")
    const arr2 = [0, 1, [2, [3, [4, 5]]]];
    console.log(arr2.flat(2));
    console.log(arr2);
    
    const arr3 = [10, 1, 12, 15, 2];
    const sorted = arr3.sort((a, b)=> a-b)
    console.log(sorted)

    return <>
        <p>Array Comp</p>
    </>
}
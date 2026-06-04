
export function FindSumMemoiztion() {
    const memoize:any = {}

    function add(a:number, b:number) {
        const key = a + "," + b
        if(memoize.hasOwnProperty(key)) {
            console.log('getting from cache')
            return memoize[key]
        } else {
            memoize[key] = a+b;
            return memoize[key]
        }
    }

    console.log(add(2,3))
    console.log(add(2,3))

    return <p>Finding Sum</p>
}
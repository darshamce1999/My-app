
//Also PollyFil for findIndex
export const LinearSearchComp = () => {

    const input = [1,2,3,5,6,11,8]

    function myFindIndex(arr: any[], searchText: number) {
        let res = null
        for(let i=0; i<arr.length; i++) {
            if(arr[i] === searchText) {
                res = i
                break;
            } else {
                res = -1
            }
        }
        return res;
    }

    // console.log(myFindIndex(input, 11))
    // console.log(myFindIndex(input, 4))

    return <h3>LinearSearchComp</h3>
}

//Pre condition for binary search is,, array should be insorted ordeer, iymay be acesndong or descending
export const BinarySearchComp = () => {

    const input = [1,2,3,5,6,8]

    function myFindIndex(arr: any[], searchText: number) {
        let start = 0;
        let end = arr.length-1;
        let res = null

        while(start <=end) {
            const mid = Math.floor((start + end)/2)
            if(arr[mid] === searchText) {
                res = mid;
                break;
            } else if(searchText > arr[mid]) {
                start = mid + 1
            } else {
                end = mid -1
            }
        }
        return res ? res: -1
    }

    console.log(myFindIndex(input, 8))
    console.log(myFindIndex(input, 7))

    return <h3>BinarySearchComp 2</h3>
}
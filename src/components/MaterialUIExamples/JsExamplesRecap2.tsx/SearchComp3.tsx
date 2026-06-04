import React from 'react'

function SearchComp3() {
 
    function binarySh(arr: number[], searchEle:number) {
        return binarySearch(arr, searchEle, 0, arr.length)
    }

    function binarySearch(arr: number[], searchEle: number, start:number, end:number):number {
        const mid = Math.floor((start + end) / 2);
        if(arr[mid] === searchEle) {
            return mid;
        } else if(start == end) {
            return -1
        } else if(searchEle > arr[mid]) {
            return binarySearch(arr, searchEle, mid+1, end)
        } else {
            return binarySearch(arr, searchEle, start, mid-1)
        }
    }
    console.log(binarySh([-1,1,2,6,9,12], -6))

  return (
    <div>SearchComp3</div>
  )
}

export default SearchComp3
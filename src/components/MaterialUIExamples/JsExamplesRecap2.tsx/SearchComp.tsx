import React from 'react'

function SearchComp() {

    function linearSearch(arr: number[], ele:number) {
        for(let i=0; i<arr.length; i++) {
            if(arr[i] === ele) {
                return  i
            }
        }
        return -1
    }
    // console.log(linearSearch([3,1,6,9,2,-1], -1))

    //binary search work on sorted array only
    //https://medium.com/techie-delight/binary-search-practice-problems-4c856cd9f26c
    function binarySearch(arr: number[], ele:number) {
        let startIndex = 0
        let endIndex = arr.length
        while(endIndex >= startIndex) {
            const mid = Math.floor((startIndex + endIndex)/2)
            if(arr[mid] === ele) {
                return mid
            } else if(arr[mid] < ele) {
                startIndex = mid + 1
            } else {
                endIndex = mid -1
            }
        }
        return -1
    }
    // console.log(binarySearch([-1,1,2,6,9,12], 12))

    //Same binary search as above, but using recurssion method
    function binarySearchRecursion(arr: number[], ele:number) {
        return searchRecursion(arr, ele, 0, arr.length)
    }

    function searchRecursion(arr:number[], ele:number, startIndex:number, endIndex:number):number {
        const mid = Math.floor((startIndex + endIndex) / 2)
        if(arr[mid] === ele) {
            return mid
        } else if (startIndex === endIndex) {
            return -1
        } else if(ele > arr[mid]) {
            const newStartIndex = mid + 1
            return searchRecursion(arr, ele, newStartIndex, endIndex)
        } else {
            const newEndIndex = mid - 1
            return searchRecursion(arr, ele, startIndex, newEndIndex)
        } 
    }
    // console.log(binarySearchRecursion([-1,1,2,5,6,9,12], -12))

    function jumpSearch(arr:number[], ele:number) {
        const n = arr.length;

        const jumpCount = Math.floor(Math.sqrt(arr.length))
        let startIndex = 0
        let endIndex = jumpCount
        for(let i=0; i<n; i=i+jumpCount) {
            if(arr[i] > ele) {
                break;
            } else {
                startIndex = i
                endIndex =  i + jumpCount
            }
        }
        for(let i=startIndex; i<Math.min(endIndex, n); i++) {
             if(arr[i] === ele) {
                return i
             }
        }
        return -1
    }
    console.log(jumpSearch([-1,1,2,5,6,9,12], 9))

  return (
    <div>SearchComp</div>
  )
}

export default SearchComp
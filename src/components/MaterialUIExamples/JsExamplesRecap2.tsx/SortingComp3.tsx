import React from 'react'

function SortingComp3() {

    function BubbleSort(arr: number[]) {
        for(let  i = 0; i< arr.length-1; i++) {
            for(let j =0; j<arr.length - 1- i; j++) {
                if(arr[j] > arr[j+1]) {
                    [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
                }
            }
        }
        return arr
    }

    // console.log(BubbleSort([25,8,2,9,1,11,-3,22, -5]))

    function insertionSort(arr: number[]) {
        for(let i = 1; i< arr.length; i++) {
            let temp = arr[i]

            let j = i
            while(j > 0 && (arr[j-1] > temp)) {
                arr[j] = arr[j-1]
                j--
            }
            arr[j] = temp;
        }
        return arr
    }
    // console.log(insertionSort([2,25,8,3,9,1,11,-3,22, -5]))


    //ALternate way using for loop
// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let lastIndex = i;
//     let temp = arr[i];
//     for (j = i - 1; j >= 0; j--) {
//       if (temp < arr[j]) {
//         arr[j + 1] = arr[j];
//         lastIndex = j;
//       } else {
//         break;
//       }
//     }
//     arr[lastIndex] = temp;
//   }
//   return arr;
// }
// console.log(insertionSort([0, 5, 8, 1, 3, 4, 6, 7, 2]));


    function selectionSort(arr: number[]) {
        for(let i=0; i< arr.length; i++) {
            let min = arr[i];
            let minIndex = i

            for(let j=i+1; j<arr.length; j++) {
                if(arr[j] < min) {
                    min = arr[j]
                    minIndex = j
                }
            }
            arr[minIndex] = arr[i]
            arr[i] = min
        }
        return arr
    }
    // console.log(selectionSort([2,25,8,3,9,1,11,-3,22, -5]))

    function quickSort(arr: number[]):number[] {
        if(arr.length < 2) {
            return arr
        } 

        const leftArr = []
        const rightArr = []
        const pivot = arr[arr.length -1]
        for(let i = 0; i< arr.length-1; i++) {
            if(arr[i] < pivot) {
                leftArr.push(arr[i])
            } else {
                rightArr.push(arr[i])
            }
        }
        return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]
    }
    // console.log(quickSort([2,25,8,3,9,1,11,-3,22, -5]))

    function mergeSort(arr: number[]):any[] {
        if(arr.length < 2) {
            return arr
        }

        const mid = Math.floor(arr.length /2)
        const leftArr = mergeSort(arr.slice(0, mid))
        const rightArr = mergeSort(arr.slice(mid, arr.length))

        const res = []
        while(leftArr.length > 0 && rightArr.length > 0 ) {
            if(leftArr[0] < rightArr[0]) {
                res.push(leftArr.shift())
            } else {
                res.push(rightArr.shift())
            }
        }
        return [...res, ...leftArr, ...rightArr]
    }
    console.log(mergeSort([2,25,8,3,9,1,11,-3,22, -5]))


  return (
    <div>SortingComp3</div>
  )
}

export default SortingComp3
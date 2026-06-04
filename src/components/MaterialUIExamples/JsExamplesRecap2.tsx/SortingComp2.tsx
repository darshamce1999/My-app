import React from 'react'

function SortingComp2() {

    //Just analyse diagram https://blog.stackademic.com/understanding-bubble-sort-with-kotlin-sorting-algorithm-2-ed72f4ee22fb
    function bubbleSort(arr:number[]) {
        for(let i=0; i<arr.length-1; i++) {
            let end = arr.length;
            for(let j=0; j<end-1; j++) {
                if(arr[j] > arr [j+1]) {
                    [arr[j], arr[j+1]] = [arr[j+1], arr[j]] 
                }
            }
            end--
        }
        return arr
    }
    // console.log(bubbleSort([25,8,2,9,1,11,-3,22, -5]))


    //Just analyse diagram https://www.geeksforgeeks.org/dsa/recursive-insertion-sort/
    // https://youtube.com/shorts/OZRSCRNPj-Y?si=GESDUQF8Rrnm_KrX
    function insertionSort(arr:number[]) {
        for(let i=1; i<arr.length; i++) {
            let key = arr[i]
            let j=i-1
            while(j>=0 && key<arr[j]) {
                arr[j+1] = arr[j]
                j--
            }
            arr[j+1] = key
        }
        return arr
    }
    // console.log(insertionSort([25,8,2,9,1,11,-3,22, -5]))

    //Just analyse diagram https://blog.stackademic.com/sorting-algorithms-in-kotlin-selection-sort-sorting-algorithm-1-a4aa0efe725d
    // https://www.hackerearth.com/practice/algorithms/sorting/selection-sort/tutorial/
    // https://youtube.com/shorts/OszAf8ZK7Is?si=GGqLyTCJmKZGnTaY
    function selectionSort(arr:number[]) {
        for(let i=0; i<arr.length; i++) {
            let smallestIndex = i
            for(let j=i+1; j<arr.length; j++) {
                if(arr[smallestIndex] > arr[j]) {
                    smallestIndex = j
                }
            }
            [arr[i], arr[smallestIndex]] = [arr[smallestIndex], arr[i]]
        }
        return arr
    }
    // console.log(selectionSort([25,8,2,9,1,11,-3,22, -5]))
    
    //https://favtutor.com/blogs/quick-sort-cpp
    //https://youtu.be/ceqwscS_muA?si=tuh1gcwwxYAQROop
    function quickSort(arr: number[]): number[] {
        if(arr.length<2) {
            return arr
        }
        const pivot = arr[arr.length -1]
        const leftArr = []
        const rightArr = []
        for(let i=0; i<arr.length-1; i++) {
            if(arr[i] > pivot) {
                rightArr.push(arr[i])
            } else {
                leftArr.push(arr[i])
            }
        }
        return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]
    }
    // console.log(quickSort([25,8,2,9,1,11,-3,22,-5]))


    function mergeSort(arr: number[]) {
        merge(arr)
    }

    //Just analyse diagram https://www.geeksforgeeks.org/dsa/merge-sort/
    function merge(arr:number[]):number[] {
        if(arr.length<2) {
            return arr
        }
        const mid = Math.floor(arr.length / 2)
        const leftArr = merge(arr.slice(0, mid))
        const rightArr = merge(arr.slice(mid, arr.length))
        const temp:number[] = []
        while(leftArr.length !== 0 && rightArr.length !== 0) {
            if(leftArr[0] < rightArr[0]) {
                temp.push(leftArr.shift()!)
            } else {
                temp.push(rightArr.shift()!)
            }
        }
        return [...temp, ...leftArr, ...rightArr]
    }
    console.log(merge([25,8,2,9,1,11,-3,22,-5, 66, -66]))

  return (
    <div>SortingComp2</div>
  )
}

export default SortingComp2
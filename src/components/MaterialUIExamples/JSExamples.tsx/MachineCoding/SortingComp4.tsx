import React from 'react'

function SortingComp4() {
    const input = [12, 5, 23, 2, 8, 0, 32, 7, -1]

    function insertionSort(input:number[]) {
        for(let i=1; i<input.length; i++) {            
            let temp = input[i]
            let j = i
            while(j>=0 && temp < input[j - 1]) {
                input[j] = input[j - 1]
                j--
            }
            input[j] = temp
        }
        return input
    }

    // console.log(insertionSort(input))

    function selectionSort(inputEle:number[]) {
        for(let i = 0; i<input.length; i++) {
            let temp = i
            for(let j = i+1; j<input.length; j++) {
                if(inputEle[temp] > inputEle[j]) {
                    temp = j
                }
            }
            [inputEle[i], inputEle[temp]] = [inputEle[temp], inputEle[i]]
        }
        return inputEle
    }
    // console.log(selectionSort(input))

    function quickSort(inputEle:number[]):number[] {
        if(inputEle.length < 2) {
            return inputEle
        }

        const pivot = inputEle[inputEle.length - 1]
        const left = []
        const right = []
        for(let i = 0; i<=inputEle.length - 2; i++) {
            if(inputEle[i] > pivot) {
                right.push(inputEle[i])
            } else {
                left.push(inputEle[i])
            }
        }
        return [...quickSort(left), pivot, ...quickSort(right)]
    }
    // console.log(quickSort(input))

    function mergeSort(inputEle:number[]):any {
        if(inputEle.length < 2) {
            return inputEle
        }

        const mid = Math.floor(inputEle.length / 2)
        const left = mergeSort(inputEle.slice(0, mid))
        const right = mergeSort(inputEle.slice(mid, inputEle.length))
        const result = []
        while(left.length > 0 && right.length > 0) {
            if(left[0] < right[0]) {
                result.push(left.shift())
            } else {
                result.push(right.shift())
            }
        }
        return [...result, ...left, ...right]
    }
    console.log(mergeSort(input))

    return (
        <div>SortingComp4</div>
    )
}

export default SortingComp4
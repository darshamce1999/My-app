export const BubbleSortingComp = () => {

    const input = [1,23,2,8,0,32,7]

    //Just analyse diagram https://blog.stackademic.com/understanding-bubble-sort-with-kotlin-sorting-algorithm-2-ed72f4ee22fb
    //Logic is find largest ele between adject ele and swap its position
    function bubbleSort(arr: any[]) {
        for(let i=0; i<arr.length; i++) {
            for(let j=0; j<arr.length-i-1; j++) {
                if(arr[j]>arr[j+1]) {
                    const temp = arr[j]
                    arr[j] = arr[j+1]
                    arr[j+1] = temp
                }
            }
        }
        return arr
    }

    console.log(bubbleSort(input))

    return <h4>SortingComp</h4>
}

export const SelectionSortingComp = () => {
    const input = [12,5,23,2,8,0,32,7]



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
// https://youtube.com/shorts/OszAf8ZK7Is?si=GGqLyTCJmKZGnTaY
//Logic is find smallest ele in entire array and swap it to 0 index,  find 2 smallest ele in entire array and swap it to 1 index,
//here index 0, 1 are sorted, so next interation start from 2,3,..
    function selectionSort(arr: any[]) {

        for(let i=0; i<arr.length; i++) {
            let smallIndex = i
            for(let j=i+1; j<arr.length; j++) {
                if(arr[smallIndex] > arr[j]) {
                    smallIndex = j
                }
            }
            const temp = arr[i]
            arr[i] = arr[smallIndex]
            arr[smallIndex] = temp
        }
        return arr
    }
    console.log(selectionSort(input))
    

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


    return <h3>SelectionSortingComp</h3>
}

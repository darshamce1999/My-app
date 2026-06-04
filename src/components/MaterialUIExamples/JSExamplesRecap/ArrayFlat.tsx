import { AutoComplete, AutoCompleteDebounceWithoutRef, AutoCompleteThrotle, AutoCompleteWithDebounce } from "./AutoComplete"
import { CountDownTimerComp } from "./CountDownTimerComp"
import { InfinteScrollingComp } from "./InfinteScrollingComp"

export const ArrayFlat = () => {

    const input = [1,2,3,[4,5,[6,7,[8]]]]

    const output: any[] = []
    let depth = 2 + 1
    function myFlat(arr:any):any {
        depth--
        for(let i=0; i<arr.length; i++) {
            if(Array.isArray(arr[i])) {
                depth!==0? myFlat(arr[i]): output.push(arr[i]);
            } else {
                output.push(arr[i])
            }
        }
        return output;
    }

    // Array.prototype.myFlat = function(depth) {
    //     const output: any[] = []
    //     let depth = depth + 1
    //     function myFlat(arr:any):any {
    //         depth--
    //         for(let i=0; i<arr.length; i++) {
    //             if(Array.isArray(arr[i])) {
    //                 depth!==0? myFlat(arr[i]): output.push(arr[i]);
    //             } else {
    //                 output.push(arr[i])
    //             }
    //         }
    //         return output;
    //     }

    //     return myFlat(this)
    // }

    return <>
        <p>ArrayFlat</p>
        {/* <AutoComplete /> 
        <AutoCompleteWithDebounce />
        <AutoCompleteDebounceWithoutRef />
        <AutoCompleteThrotle />
        <InfinteScrollingComp />*/}
        <CountDownTimerComp />
    </>
}
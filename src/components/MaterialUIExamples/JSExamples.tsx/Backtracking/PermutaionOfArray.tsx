import React from 'react'

function PermutaionOfArray() {

    function permutation(array: number[]):number[][] {
        const result: number[][] = []

        function backTrace(i:number, nums:number[]) {
            if(i === array.length) {
                result.push(nums.slice())
                return;
            }

            for (let j = i; j < array.length; j++) {
                [nums[i], nums[j]] = [nums[j], nums[i]]
                backTrace(i + 1, nums);
                [nums[i], nums[j]] = [nums[j], nums[i]]
            }
        }

        backTrace(0, array)
        return result;
    }

    console.log(permutation([1,2,3]))



    // var permute = function(nums:any) {
    // const result:any = [];
    // const used = new Array(nums.length).fill(false);

    // function backtrack(current:any) {
    //     // Base case: permutation is complete
    //     if (current.length === nums.length) {
    //         result.push([...current]); // make a copy
    //         return;
    //     }

    //     for (let i = 0; i < nums.length; i++) {
    //         if (used[i]) continue; // skip already used numbers

    //         // Choose
    //         used[i] = true;
    //         current.push(nums[i]);

    //         // Explore
    //         backtrack(current);

    //         // Undo (Backtrack)
    //         current.pop();
    //         used[i] = false;
    //     }
    // }

    // backtrack([]);
    // return result;
    // };

    // console.log(permute([1,2,3]))

  return (
    <div>PermutaionOfArray</div>
  )
}

export default PermutaionOfArray
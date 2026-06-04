import { useState } from "react";

function useCounterCustomHook() {
    const [count, setState] = useState(0); 

    function increment() {
        setState(count+1)
    }

    function decrement() {
        setState(count-1)
    }

    function reset() {
        setState(0)
    }

    return {count, increment, decrement, reset}
}
export default useCounterCustomHook;
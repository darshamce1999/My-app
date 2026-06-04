import useConuterCustomHook from "./useCounterCustomHook";

export function ClickCounterCompWithCustomHook() {
    const {count, increment, decrement, reset} = useConuterCustomHook();

    return <>
        <p>{count}</p>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>reset</button>
    </>
}
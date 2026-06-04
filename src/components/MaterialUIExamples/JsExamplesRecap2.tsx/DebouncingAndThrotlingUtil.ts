function debounceWrapper(timeInterval: number) {
    let timer: any 
    return function(fn: () => void) {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn()
        }, timeInterval);
    }
}

export const debounceFunction = debounceWrapper(1000)
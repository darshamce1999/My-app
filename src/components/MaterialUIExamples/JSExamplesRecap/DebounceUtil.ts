function debounceImp(timeOut:any) {
    let ref:any = null
    return function(fn:any, text:any) {
        if(ref) {
            clearTimeout(ref)
        }
        ref = setTimeout(()=>fn(text), timeOut)
    }
}


export const debounceFn = debounceImp(1000)

function trotlewImp(timeOut:any) {
    let ref:boolean = true
    return function(fn:any, text:any) {
        if(ref) {
            fn(text)
            ref = false
            setTimeout(()=>ref = true, timeOut)
        }
    }
}


export const trotleFn = trotlewImp(3000)
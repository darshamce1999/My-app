console.log('aa')
function debounceImp(time:number) {
    let timer:any = null
    return function(fn:any, search:string) {
        if(timer) clearTimeout(timer)

        timer = setTimeout(()=>{
            fn(search)
        }, time)
    }
}

export const debounceUtil = debounceImp(3000);

function throtleFn(time:number) {
    let timer = 0;
    return function(fn:any, search:string) {
        const now = new Date().getTime();
        if(now - timer > time) {
            timer = now;
            fn(search)
        }
    }
}

export const throtleUtil = throtleFn(8000);

// function trotlewImp(timeOut:any) {
//     let ref:boolean = true
//     return function(fn:any, text:any) {
//         if(ref) {
//             fn(text)
//             ref = false
//             setTimeout(()=>ref = true, timeOut)
//         }
//     }
// }


// export const trotleFn = trotlewImp(3000)

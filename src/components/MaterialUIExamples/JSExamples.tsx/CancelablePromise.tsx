import React from 'react'

function CancelablePromise() {

    const promise = new Promise((res, rej) => {
        setTimeout(() => {
            res("1001")
        }, 5000);
    })

    function cancellablePromise(promise:Promise<any>) {
        let canceled = false

        const newPr = new Promise((res, rej) => {
            promise.then(data => {
                if(!canceled) {
                    res(data)
                }
            }).catch(err => {
                if(!canceled) {
                    rej(err)
                }
            })
        })

        // newPr.cancel = () => {
        //     canceled = true
        // }
        // return newPr
        //in typescript because of struct type u can't assign .cancel to proimes, so created new primise below 

        const temp:any = newPr
        temp.cancel = () => {
            canceled = true
        }
        return temp
    }

    const p = cancellablePromise(promise);

    // p.cancel();
    p.then((data:any) => console.log(data));

    
  return (
    <div>CancelablePromise</div>
  )
}

export default CancelablePromise
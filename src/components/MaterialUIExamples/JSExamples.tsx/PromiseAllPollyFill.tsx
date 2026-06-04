import React from 'react'

export function PromiseAllPollyFill() {

    const myPromiseAll = function(...params:any) {

        const length = params.length
        const result:any = []

        return new Promise((resolve, reject) => {
            params.forEach((promiseItem:any) =>{
                promiseItem
                    .then((data:any) => {
                        result.push(data)
                        if(result.length === length) {
                            resolve(result)
                        }
                    })
                    .catch((err:any) => reject(err))
            })
        })
    }

    const promise1 = new Promise((res, rej) => setTimeout(() => res(10), 2000))

    const promise2 = Promise.resolve(2)

    myPromiseAll(promise1, promise2)
        .then(data => console.log(data))
        .catch(err => console.warn(err))
        

  return (
    <div>PromiseAllPollyFill</div>
  )
}



export function PromiseAllSetteledPollyFill() {

    const myPromiseAll = function(...params:any) {

        const length = params.length
        const result:any = []

        return new Promise((resolve, reject) => {
            params.forEach((promiseItem:any) =>{
                promiseItem
                    .then((data:any) => {
                        result.push({status: 'fulfilled', value: data})
                    })
                    .catch((err:any) => result.push({status: 'rejected', reason: err}))
                    .finally(() => {
                        if(result.length === length) {
                            resolve(result)
                        }
                    })
            })
        })
    }

    const promise1 = new Promise((res, rej) => setTimeout(() => res(10), 2000))

    const promise2 = Promise.resolve(2)

    const promise3 = Promise.reject(2)

    myPromiseAll(promise1, promise2, promise3)
        .then(data => console.log(data))
        .catch(err => console.warn(err))
        

    // Promise.allSettled([promise1, promise2, promise3])
    //     .then(data => console.log(data))
    //     .catch(err => console.warn(err))
        

  return (
    <div>PromiseAllSetteledPollyFill</div>
  )
}

export function PromiseRacePollyFill() {

    function myPromiseRace(...args:any) {
        return new Promise((resolve, reject) => {
            args.forEach((item:any)=> {
                item
                    .then((data:any) => resolve(data))
                    .catch((err:any) => reject(err))

            })

        })
    }

    const promise1 = new Promise((res, rej) => setTimeout(() => res(10), 2000))
    const promise2 = new Promise((res, rej) => setTimeout(() => rej(20), 3000))

    myPromiseRace(promise1, promise2)
        .then(data => console.log(data))
        .catch((err:any) => console.warn(err))


    return (
        <div>PromiseRacePollyFill</div>
      )
}


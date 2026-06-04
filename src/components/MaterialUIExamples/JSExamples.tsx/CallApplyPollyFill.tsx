
export const CallApplyPollyFill = () => {

    const obj = {
        name: 'Darshannr',
        getName: function(gender:string, age:string) {
            console.log(arguments)
            return this.name + " is boy or girl? " +  gender + age
        }
    }

    console.log(obj.getName('boy', '25'))

    console.log(obj.getName.call({name:'NRD'}, "girl", "26"))

    const bindFun = obj.getName.bind({name:'NRD'}, "girl", "26")
    console.log("bind" + bindFun())


    // Function.prototype.myCall = function(details, ...rest) {
    //     details.fun = this
    //     console.log(arguments)
    //     return details.fun(...rest)
    // }
    // console.log(obj.getName.myCall({name:'NRD'}, 'boy', '22'))


    //Perfect Code
    // Function.prototype.myCall = function(details, ...rest) {
    //     const dummy = "dummy"
    //     details[dummy] = this
    //     const res = details.fun(...rest)

    //    delete details[dummy]
    //    return res
    // }
    //console.log(obj.getName.myCall({name:'NRD'}, 'boy', '22'))

    // Function.prototype.myApply = function(details, rest) {
    //     details.fun = this
    //     console.log(arguments)
    //     return details.fun(...rest)
    // }
    // console.log(obj.getName.myCall({name:'NRD'}, ['boy', '22']))

    // Function.prototype.myBind = function(details, ...rest) {
    //     details.fun = this
    //     console.log(arguments)
    //     return function callFn() {
    //         return details.fun(...rest)
    //     }
    // }
    // const bindName = obj.getName.myBind({name:'NRD'}, "girl", "26")
    // console.log(bindName())

    return <p>CallApplyPollyFill</p>
}

export const CallApplyBind = () => {
    console.log(this)
    var bb= "bb";

    const a ={
        name:'dar',
        getName: function () {
            return this.name
        },
    } 

    console.log(a.getName())
    console.log(a.getName.call({name:'shara'}))
    const abc = a.getName.bind({name:'siddesh'})
    console.log(abc())


    
    return <h1>Call Apply bind</h1>

}
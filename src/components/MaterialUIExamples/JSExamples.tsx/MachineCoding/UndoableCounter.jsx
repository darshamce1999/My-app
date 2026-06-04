import React, { useMemo, useState } from 'react'

// function UndoableCounter() {
//     const numbers = [1, 10, 100]
//     const [total, setTotal] = useState([0])
//     const [opp, setOpp] = useState([])

//     function handleChange(value) {
        
//         setTotal(prev => [...prev, total[total.length - 1] + value])
//         setOpp(prev => [...prev, value])
//     }

//     const displayItem = useMemo(() => {
//         return opp.toReversed()
//     }, [opp])

//     const displayTotal = useMemo(() => {
//         return total.toReversed()
//     }, [total])

//     console.log(opp, total)

//   return (
//     <div style={{width:"50vw", margin:"auto", display:"flex", justifyContent:"center", flexDirection:"column", gap:"20px"}}>
//         <div style={{display:"flex", justifyContent:"space-evenly"}}>
//             <button>Undo</button>
//             <button>Redo</button>
//         </div>
//         <div style={{display:"flex", justifyContent:"space-between"}}>
//             {[...numbers.toReversed().map(item => -item)].map(num => <button onClick={() => handleChange(num)} style={{paddingInline:"10px"}}>{num}</button>)}
//             <span>{total[total.length - 1]}</span>
//             {numbers.map(num => <button onClick={() => handleChange(num)} style={{paddingInline:"10px"}}>{num}</button>)}
//         </div>
//         <div style={{width:"15vw", height:"30vh", border:"1px solid black", alignSelf:"center"}}>
//             {displayItem.map((item, index) => <div style={{display:"flex", justifyContent:"space-between"}}>
//                 <span>{item}</span>
//                 <span>{`${displayTotal[index + 1]} -> ${displayTotal[index]}`}</span>
//             </div>)}
//         </div>
//     </div>
//   )
// }

//esay logic, to reverse using flex
function UndoableCounter() {
    const numbers = [1, 10, 100]
    const [total, setTotal] = useState([0])
    const [opp, setOpp] = useState([])

    function handleChange(value) {
        setTotal(prev => [...prev, total[total.length - 1] + value])
        setOpp(prev => [...prev, value])
    }

    function handleUndo() {

    }

    function handleRedo() {
        
    }

    console.log(opp, total)

  return (
    <div style={{width:"50vw", margin:"auto", display:"flex", justifyContent:"center", flexDirection:"column", gap:"20px"}}>
        <div style={{display:"flex", justifyContent:"space-evenly"}}>
            <button onClick={handleUndo}>Undo</button>
            <button onClick={handleRedo}>Redo</button>
        </div>
        <div style={{display:"flex", justifyContent:"space-between"}}>
            {[...numbers.toReversed().map(item => -item)].map(num => <button onClick={() => handleChange(num)} style={{paddingInline:"10px"}}>{num}</button>)}
            <span>{total[total.length - 1]}</span>
            {numbers.map(num => <button onClick={() => handleChange(num)} style={{paddingInline:"10px"}}>{num}</button>)}
        </div>
        <div style={{width:"15vw", height:"30vh", border:"1px solid black", alignSelf:"center", display:"flex", flexDirection:"column-reverse", justifyContent:"start"}}>
            {opp.map((item, index) => <div style={{display:"flex", justifyContent:"space-between"}}>
                <span>{item}</span>
                <span>{`${total[index]} -> ${total[index + 1]}`}</span>
            </div>)}
        </div>
    </div>
  )
}

export default UndoableCounter

// personal detsils - adhar, pan, photo, updatec cv
// employemnt history - offer, lwd, 3 monthly salary slip
// form 26as, uan - 
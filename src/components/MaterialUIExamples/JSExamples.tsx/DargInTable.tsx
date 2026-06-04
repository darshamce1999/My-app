import { useEffect, useState } from "react"
import style from "./DargInTable.module.css"

function DargInTable({rows =10, columns=10}) {
    const [selected, setSelected] = useState<any>([])
    const [isMouseDown, setIsMouseDown] = useState<boolean>(false)

    function handlemouseDown(event:any) {
        console.log("down")
        console.log(event)
        setSelected([Number(event.target.textContent)])
    }

    function handleMouseUp(event:any) {
        console.log("up")
        console.log(event)
        setSelected([...selected, Number(event.target.textContent)])
        setIsMouseDown(true)
    }

    useEffect(()=>{
        if(isMouseDown) {
            const start = selected[0]
            const end = selected[selected.length-1]
            const startRow = Math.floor(start / columns)
            const endRow = Math.floor(end / columns);

            const diffOfRows = endRow - startRow
            const numbersToAdd = end - (start + columns * diffOfRows)
            const ref:any = []
            for(let i = 1; i<=numbersToAdd; i++) {
                ref.push(start + i )
                ref.push(end - i )
            }
            setSelected((prev:any)=>[...prev, ...ref])


            const modules = start % columns
            const middleRows:any = []
            for(let i = 1; i<diffOfRows; i++) {
                middleRows.push((startRow+i)*columns + modules)
            }
            
            const middleRef:any = []
            for(let i=0; i<middleRows.length; i++) {
                for(let j=0; j<numbersToAdd+1; j++) {
                    middleRef.push(middleRows[i]+j)
                }
            }

            setSelected((prev:any)=>[...prev, ...middleRef])
            setIsMouseDown(false)
        }
    }, [isMouseDown])

  return (
    <div style={{display: "grid", gridTemplateColumns: `repeat(${columns}, 1fr)`}} className={style.table}>
        {[...new Array(rows*columns)].map((_, index)=>
            <span key={index+1} onMouseDown={handlemouseDown} onMouseUp={handleMouseUp} className={selected.includes(index+1)? style.selectedNo: ""}>{index+1}</span>
        )}
    </div>
  )
}


export default DargInTable
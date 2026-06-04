import React, { useEffect, useRef, useState } from 'react'

function GridLight2() {
    const size = 3
    const [table, setTable] = useState<number[]>([])
    const ref = useRef<any>()

    useEffect(() => {
        if(table.length == size * size) {
            ref.current = setInterval(() => {
                setTable(prev => {
                    const temp = [...prev]
                    temp.pop()
                    if(temp.length == 0) {
                        clearInterval(ref.current)
                    }
                    return temp
                })
            }, 1000)
        }
        // return () => {
        // clearInterval(ref.current)
        // }
    }, [table])

  return (
    <div style={{display:"grid", gap:"2px", justifyContent:"center", gridTemplateRows:`repeat(${size}, 80px)`, gridTemplateColumns:`repeat(${size}, 80px)`}}>{new Array(size * size).fill(null).map((item, index) => <div key={index} style={{border:"1px solid black", backgroundColor: `${table.includes(index)? "blue":""}`}} onClick={() => {
        setTable([...table, index])
    }}></div>)}</div>
  )
}

export default GridLight2
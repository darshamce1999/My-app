import React, { useRef, useState } from 'react'

function VirtualizationList() {
  const height = 350; 
  const itemHeight = 30;
  const list = Array.from({ length: 100 }, (_, index) => index)
  const [visibleList, setVisibleList] = useState<any>([0, Math.floor(height/itemHeight)])


  function handleScroll(e:any) {
    console.log("Scroll", e.target.scrollTop)

    const startIndex = Math.floor(e.target.scrollTop / itemHeight)
    setVisibleList([startIndex, startIndex + Math.floor(height/itemHeight)])
  }

  return (
    <div onScroll={(e) => handleScroll(e)} style={{ width: "50vw", height: `${height}px`, border: "1px solid black", overflow: "scroll" }}>
      <div style={{height: `${list.length * itemHeight}px`, position:"relative"}}>
        {[...list.slice(visibleList[0], visibleList[1] + 1)].map((item, index) => <div key={item} style={{ marginBlock:"2px",  border: "1px solid grey", width:"100%", height: "30px", position:"absolute", top: (visibleList[0] + index) * itemHeight}}>{item}</div>)}
      </div>
    </div>
  )
}

export default VirtualizationList
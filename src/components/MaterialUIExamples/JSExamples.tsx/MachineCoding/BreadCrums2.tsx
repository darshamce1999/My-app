import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function BreadCrums2() {
  const {pathname} = useLocation()
  const path = pathname.split('/').slice(1)
  let temp = ""
    
  console.log(path)

  return (
    <div>
      {path.length> 1 && path.map((data, index) => {
        if(index == path.length -1 ) {
          return <span style={{color: "black", paddingInline: "5px"}}>{data}</span>
        } else {
          temp = temp + "/" + data 
          let p = temp
          return <>
            <Link style={{color: "blue", paddingInline: "5px"}} to={p}>{data}</Link>
            <span>/</span>
          </>
        }
      })}
    </div>
  )
}

export default BreadCrums2

export function BreadCrums3() {
  const pathname = "/profile/aboutTech/verions/rating/experience"
  const path = pathname.split('/').slice(1)
  const [showRest, setShowRest] = useState(false)
  let temp = `/${path[0]}`
    
  console.log(path)

  return (
    <div>
      {path.length > 1 ? <>
            {path.length > 2 ? 
              <>
                <Link style={{color: "blue", paddingInline: "5px"}} to={temp}>{path[0]}</Link>
                <span>/</span>
                <span></span>
                <span style={{paddingInline: "2px", position: "relative"}} >
                  <span onClick={() => setShowRest(!showRest)}>...</span>
                  {showRest && 
                  <div style={{position:"absolute", left:"1%", transform: "translateX(-50%)"}}>{path.slice(1, path.length-1).map(data => {
                        temp = temp + "/" + data
                        return <div><Link to={temp} style={{color:"blue"}}>{data}</Link></div>
                      })}
                  </div>}
                </span>

                <span>/</span>
                <span style={{color: "black", paddingInline: "5px"}}>{path[path.length-1]}</span>
              </>: 
              <>
                <Link style={{color: "blue", paddingInline: "5px"}} to={`/${path[0]}`}>{path[0]}</Link>
                <span>/</span>
                <span style={{color: "black", paddingInline: "5px"}}>{path[path.length-1]}</span>
              </>}
        </>: null}
        <div style={{backgroundColor:"beige", position:"relative", width:"fit-content", margin:"auto"}}>
          aaaaa
          <div style={{backgroundColor:"red", position:"absolute", left:"50%", transform:"translateX(-50%)"}}>ugvvjvvhvgucyucycyufywffyfsuicgfufugcgfcgcctccggg</div>
        </div>
    </div>
  )
}
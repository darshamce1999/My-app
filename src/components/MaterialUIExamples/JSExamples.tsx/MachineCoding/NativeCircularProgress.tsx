import React from 'react'
import style from "./NativeCircularProgress.module.css"

function NativeCircularProgress() {

  return (
    // <div style={{display:"flex", justifyContent: "center", width:"50vw", position:"relative", zIndex:"10"}}>
    //     <div style={{position:"absolute", width:"220px",  zIndex:"1"}}>njbfjwbfjb</div>
    //     <div style={{position:"relative", zIndex:"10"}}>Hello, how are you</div>
    // </div>

    <div style={{position:"relative"}}>
      <div className={style.a} style={{width:"100px", height:"100px", backgroundColor:"rgba(228, 56, 56)", position:"relative", zIndex:9}}>a</div>
      <div className={style.b} style={{width:"100px", height:"100px", backgroundColor:"blue", position:"absolute", top:"0px", left:"20px", zIndex: 6}}>b</div>
    </div>
  )
}

export default NativeCircularProgress
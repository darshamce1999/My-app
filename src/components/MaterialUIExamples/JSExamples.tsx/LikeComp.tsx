import React, { useState } from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import style from "./Like.module.css"
import CircularProgress from '@mui/material/CircularProgress';

enum ActionStatus {
    default,
    hover,
    loading,
    liked
}

function LikeComp() {
    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState(ActionStatus.default)


  return (
    // <div className={style.likeBtn} 
    //     style={{backgroundColor: `${status == ActionStatus.liked? "red": ""}`, borderColor: `${status == ActionStatus.default? "": "red"}`}}
    //     onClick={() => {
    //         if(status == ActionStatus.liked) {
    //             setStatus(ActionStatus.hover)
    //         } else {
    //             setTimeout(() => {
    //                 setStatus(ActionStatus.loading)
    //             }, 500)

    //             setTimeout(() => {
    //                 setStatus(ActionStatus.liked)
    //             }, 1500)
    //         }
    //     }}
    //     onMouseOver={() => {
    //         if(status !== ActionStatus.liked) {
    //             setStatus(ActionStatus.hover)
    //         }
    //     }}
    //     onMouseLeave={() => {
    //         if(status !== ActionStatus.liked) {
    //             setStatus(ActionStatus.default)
    //         }
    //     }}
    // >
    //     <div style={{paddingRight: "4px"}}>{status == ActionStatus.loading ?  <CircularProgress size={"25px"}/> : status == ActionStatus.liked? <FavoriteSharpIcon color='error'/>: <FavoriteBorderIcon color={`${status == ActionStatus.default? "inherit": "error"}`}/>}</div>
    //     <div>{status == ActionStatus.liked? "Liked": 'Like'}</div>
    // </div>

    <div className={style.likeBtn} onMouseOver={() => setStatus(ActionStatus.loading)} onMouseLeave={() => setStatus(ActionStatus.default)}>
        <div className={style.icon}>{status == ActionStatus.loading ?  <CircularProgress  size={8}/>: <FavoriteSharpIcon color='error'/>}</div>
        <div>Like</div>
    </div>
  )
}

export default LikeComp
import { IconButton } from '@mui/material';
import React, { useState } from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import style from "./ImageCarousel.module.css"

const images = [
  {
    src: 'https://picsum.photos/id/600/600/400',
    alt: 'Forest',
  },
  {
    src: 'https://picsum.photos/id/100/600/400',
    alt: 'Beach',
  },
  {
    src: 'https://picsum.photos/id/200/600/400',
    alt: 'Yak',
  },
  {
    src: 'https://picsum.photos/id/300/600/400',
    alt: 'Hay',
  },
  {
    src: 'https://picsum.photos/id/400/600/400',
    alt: 'Plants',
  },
  {
    src: 'https://picsum.photos/id/500/600/400',
    alt: 'Building',
  },
];

function ImageCarousel() {
    const [state, setState] = useState(0)

    function forward() {
        setState((state + 1) % images.length)
    }

    function backward() {
        const res = (state - 1) % images.length
        if(res<0) {
            setState(images.length + res)
        } else {
            setState(res)
        }
    }
    
  return (
    <div className={style.root}>
        <div className={style.wrapper}>
            <IconButton onClick={backward} className={style.leftBtn} color='warning' ><ArrowBackIosNewIcon /></IconButton>
            {images.map((data, index) => <img className={style.img} src={data.src} alt={data.alt} style={{display: `${state == index? "inline-block": "none"}`}}/>)}
            <IconButton onClick={forward} className={style.rightBtn} color='warning' ><ArrowForwardIosIcon /></IconButton>
        </div>
        <div className={style.circleWrapper}>{images.map((data, index) => <div className={style.circle} style={{backgroundColor: `${state == index? "white": "rgba(128, 128, 128, 0.817)"}`}}></div>)}</div>
    </div>
  )
}

export default ImageCarousel
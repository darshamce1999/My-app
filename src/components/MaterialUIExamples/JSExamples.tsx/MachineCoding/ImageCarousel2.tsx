import React, { useState } from 'react'

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

function ImageCarousel2() {
    const [count, setCount] = useState(0)

    return (
        <div style={{width:"fit-content", margin:"auto", position:"relative"}}>
            <div style={{backgroundColor:"black", width:"fit-content", paddingInline:"2%", margin:"auto", display:"flex", alignItems:"center"}}>
                <span style={{position:"static", top:"", cursor:"pointer"}} onClick={() => {
                    const temp = (count - 1) % images.length
                    if(temp < 0) {
                        setCount(temp + images.length)
                    } else {
                        setCount(temp)
                    }
                }}>⬅️</span>
                {images.map((item, index) => <img style={{ display: `${index == count ? "block" : "none"}` }} src={item.src} alt={item.alt} />)}
                <span style={{position:"static", cursor:"pointer"}} onClick={() => {
                    setCount((count + 1) % images.length)
                }}>➡️</span>
            </div>
            <div style={{display:"flex", gap:"5px", border:"1px solid black", width:"fit-content", padding:"10px", borderRadius:"10px", backgroundColor:"rgba(0, 0, 0, 0.5)", position:"absolute", bottom:"10px", left:"50%", transform:"translateX(-50%)"}}>
                {images.map((item:any, index) => <div style={{width:"10px", height:"10px", border:"1px solid black", backgroundColor:`${index == count? "white": "rgba(178, 158, 158, 0.46)"}`, borderRadius:"50%"}}></div>)}
            </div>
        </div>
    )
}

export default ImageCarousel2
import React from 'react'

const schedule = [
    {
        id:0,
        title:"Sync up",
        start:"10:00",
        end: "11:00"
    },
    {
        id:1,
        title:"Meeting 1",
        start:"12:00",
        end: "12:30"
    },
    {
        id:2,
        title:"Lunch",
        start:"14:00",
        end: "15:00"
    },
    {
        id:3,
        title:"Review",
        start:"16:00",
        end: "17:30"
    },
]

function Calender() {
    const events = Array.from({length:24}, (item, index) => index)

    const res = schedule.map((item) => {
        const top = (Number(item.start.split(":")[0]) * 5) +  (Number(item.start.split(":")[1]) / 60 * 5)
        const height = (Number(item.end.split(":")[0]) - Number(item.start.split(":")[0])) * 5 + (Number(item.end.split(":")[1]) - Number(item.start.split(":")[1])) / 60 * 5
        return {...item, top, height}
    })

  return (
    <div style={{position:"relative"}}>
        {events.map(item => <div style={{height:"5rem", position:"relative", paddingLeft:"20px"}}>
            <span>{item}</span>
            <div style={{position:"absolute", height:"1px", width:"100%", bottom:"0", backgroundColor:"black", zIndex:1}}></div>
            <div style={{position:"absolute", height:"5rem", border:"1px solid black", top:"0", left:"5rem", zIndex:1}}></div>
        </div>)}
        {res.map((item) => <div style={{position:"absolute", top:`${item.top}rem`, height: `${item.height}rem`, backgroundColor:"cyan", width: "calc(100% - 5rem)", left:"5rem"}}></div>)}
    </div>
  )
}

export default Calender
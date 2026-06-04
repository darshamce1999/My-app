import React, { useState } from 'react'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import { IconButton } from '@mui/material';

function StarRating() {
    const [state, setState] = useState(new Array(5).fill(0))
    const [hoverState, setHoverState] = useState(new Array(5).fill(0))

    function clickHandler(index:number) {
        const temp = [...new Array(5).fill(0)].fill(1, 0, index + 1)
        setState(temp)
    }

    function mouseOverHandler(index: number) {
        const temp = [...new Array(5).fill(0)].fill(1, 0, index + 1)
        setHoverState(temp)
    }

    function mouseLeaveHandler(index: number) {
        const temp = new Array(5).fill(0)
        setHoverState(temp)
    }

  return (
    <div style={{margin: "auto", width: "20%"}}>
        {state.map((data, index) => {
            return (<IconButton onClick={() => {
                        clickHandler(index)
                    }} 
                    onMouseOver={() => {
                        mouseOverHandler(index)
                    }}
                    onMouseLeave={() => {
                        mouseLeaveHandler(index)
                    }}
                    >
                        {/* {data == 0 && <StarBorderIcon />} */}
                        {(data == 1 || hoverState[index])? <StarIcon color='warning'/>: <StarBorderIcon />}
                    </IconButton>)
        })}
    </div>
  )
}

export default StarRating
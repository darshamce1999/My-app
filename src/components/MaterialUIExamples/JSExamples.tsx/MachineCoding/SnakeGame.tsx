import React, { useEffect, useRef, useState } from 'react'

function SnakeGame() {
    const size = 15
    const initalState = [[5,5], [4,5], [3,5]]
    const getFood = () => [Math.floor(Math.random() * size), Math.floor(Math.random() * size)]
    const [state, setState] = useState(new Array(size).fill(null).map((item, index) => new Array(size).fill(null).map((i, index) => index)))
    const [snakeCor, setSnakeCor] = useState<number[][]>(initalState)
    const direction = useRef([1, 0])
    const food = useRef(getFood())

    function getSnakeCor(xc:any, yc:any) {
        return snakeCor.some((item) => {
            return item[0] == yc && item[1] == xc
        })
    }

    useEffect(() => {
        setInterval(() => {
            setSnakeCor(prev => {
                const newHead = [prev[0][0] + direction.current[0], prev[0][1] + direction.current[1]]

                if(prev[0][0] >= size || prev[0][0] < 0 || prev[0][1] < 0 || prev[0][1] >= size || prev.some((item:any) => item[0] == newHead[0] && item[1] == newHead[1]) ) {
                    direction.current = [1, 0]
                    return initalState
                }

                const temp = [...prev]

                if(temp[0][0] == food.current[0] && temp[0][1] == food.current[1]) {
                    food.current = getFood()
                } else {
                    temp.pop()
                }

                temp.unshift(newHead)
                return temp
            })
        }, 600)
    }, [])

    useEffect(() => {
        function handleKeyDown(e:any) {
            console.log(e.key)
            if(e.key == 'ArrowDown' && direction.current[1] != -1) {
                direction.current = [0, 1]
            } else if(e.key == 'ArrowUp' && direction.current[1] != 1) {
                direction.current = [0, -1]
            } else if(e.key == 'ArrowLeft' && direction.current[0] != 1) {
                direction.current = [-1, 0]
            } else if(e.key == 'ArrowRight' && direction.current[0] != -1) {
                direction.current = [1, 0]
            }
        }
 
        window.addEventListener('keydown', handleKeyDown)

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [])

    return (
        <div style={{display:"grid", gridTemplateRows:`repeat(${size}, 20px)`, gridTemplateColumns:`repeat(${size}, 20px)`, width:"fit-content", margin:"auto", border:"1px solid black"}}>{state.map((x, xc) => {
            return x.map((y, yc) => <div style={{backgroundColor: `${getSnakeCor(xc, yc)? "blue": ""}`}}>
                {(food.current[0] == yc && food.current[1] == xc) && <div style={{backgroundColor:"red", height: "20px", width:"20px", borderRadius:"50%", position:"relative", zIndex:"-1"}}></div>}
            </div>)
        })}</div>
    )
}

export default SnakeGame
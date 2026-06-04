import React, { useEffect, useState } from 'react'
import style from "./TicTacToe2.module.css"

function TicTacToe2(props:any) {
    const initialState = new Array(9).fill('')
    const [state, setState] = useState(initialState)
    const [isXturn, setXturn] = useState(true)
    const [won, setwon] = useState<string | null>(null)
    console.log(state)

    const solution = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]

    useEffect(() => {
      if(isXturn) {
        //if it's x turn now, the previos updated one is O
        let res = solution.some(data => {
                    return data.every(data => {
                      return state[data] == 'O'
                      })
                    })
        if(res) {
          setwon('O')
          setXturn(false)
          setTimeout(() => {
            setwon(null)
            setState(initialState)
          }, 1000)
        }
      } else {
        let res = solution.some(data => {
                    return data.every(data => {
                      return state[data] == 'X'
                      })
                    })
        if(res) {
          setwon('X')
          setXturn(true)
          setTimeout(() => {
            setwon(null)
            setState(initialState)
          }, 1000)
        }
      }

      if(!state.includes('')) {
        setTimeout(() => {
            setwon(null)
            setState(initialState)
        }, 1000)
      }

    }, [isXturn])

  return (<>
        {won && <p style={{textAlign: "center"}}>{`${won} Won`}</p>}
        {!won && <p style={{textAlign: "center"}}>{isXturn ? "It's X turn now": "It's O turn now"}</p>}
        <div className={style.wrapper}>{state.map((data, index) => 
            <button className={style.gridItem} key={index} onClick={() => {
                const temp = [...state]
                temp[index] = isXturn? "X": "O"
                setState(temp)
                setXturn(!isXturn)
              }}
              disabled={data !== ''}
            >
              {data}
            </button>)}
        </div>
  </>)
}

export default TicTacToe2
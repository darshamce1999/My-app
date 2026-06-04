import React, { useEffect, useMemo, useState } from 'react'
import style from "./TransferList.module.css"

function TransferList() {
    const initalLeft = [
        {
            data: "Javascript",
            isChecked: false
        },
        {
            data: "HTML",
            isChecked: false
        },
        {
            data: "CSS",
            isChecked: false
        },
        {
            data: "Typescript",
            isChecked: false
        }
    ]

    const initalRight = [
        {
            data: "React",
            isChecked: false
        },
        {
            data: "Angular",
            isChecked: false
        },
        {
            data: "View",
            isChecked: false
        },
        {
            data: "Svelte",
            isChecked: false
        }
    ]
    const [leftBucket, setLeftBucket] = useState(initalLeft)
    const [rightBucket, setRightBucket] = useState(initalRight)

    function moveToRight() {
        const tempToPush: { data: string; isChecked: boolean }[] = []
        const filter = leftBucket.filter(data => {
            if(data.isChecked) {
                tempToPush.push(data)
                return false
            } else {
                return true
            }
        })

        const newRightBucket = [...rightBucket, ...tempToPush]
        setLeftBucket(filter)
        setRightBucket(newRightBucket)
    }

    function moveToLeft() {
        const tempToPush: { data: string; isChecked: boolean }[] = []
        const filter = rightBucket.filter(data => {
            if(data.isChecked) {
                tempToPush.push(data)
                return false
            } else {
                return true
            }
        })

        const newLeftBucket = [...leftBucket, ...tempToPush]
        setRightBucket(filter)
        setLeftBucket(newLeftBucket)
    }

    const isleftBkEnabled = useMemo(() => {
        if(leftBucket.length == 0) {
            return true
        } else {
            return !leftBucket.some(data => data.isChecked)
        }
    }, [leftBucket])

    const isRightBkEnabled = useMemo(() => {
        if(rightBucket.length == 0) {
            return true
        } else {
            return !rightBucket.some(data => data.isChecked)
        }
    }, [rightBucket])

    return (
        <div className={style.wrapper}>
            <div className={style.content}>
                {leftBucket.map(({data, isChecked}, index)  => 
                    <div key={data} style={{paddingTop: "5px"}}>
                        <label>
                        <input  type="checkbox" checked={isChecked} id={data} name={data} value={data}  onChange={(e) => {
                            const temp = [...leftBucket]
                            temp[index].isChecked = !temp[index].isChecked
                            setLeftBucket(temp)
                        }} />
                        {data}
                        </label>
                    </div>
                )}
            </div>
            {/* <div className={style.actionRoot}> */}
                <div className={style.actionWrapper}>
                    <button disabled={!leftBucket.length} 
                        onClick={() => {
                        setRightBucket([...leftBucket, ...rightBucket])
                        setLeftBucket([])
                    }}>⏩</button>
                    <button disabled={isleftBkEnabled} onClick={moveToRight}>➡️</button>
                    <button disabled={isRightBkEnabled} onClick={moveToLeft}>⬅️</button>
                    <button disabled={!rightBucket.length} 
                        onClick={() => {
                        setRightBucket([])
                        setLeftBucket([...leftBucket, ...rightBucket])
                    }}>⏪</button>
                </div>
            {/* </div> */}
            <div className={style.content}>
                {rightBucket.map(({data, isChecked}, index)  => 
                    <div key={data} style={{paddingTop: "5px"}}>
                        <label>
                        <input  type="checkbox" checked={isChecked} id={data} name={data} value={data}  onChange={(e) => {
                            console.log(e)
                            const temp = [...rightBucket]
                            temp[index].isChecked = !temp[index].isChecked
                            setRightBucket(temp)
                        }} />
                        {data}
                        </label>
                    </div>
                )}
            </div>
                        <label>
                        <input type="checkbox" checked={false} value={"s"} />sss
                        </label>
        </div>
    )
}

export default TransferList
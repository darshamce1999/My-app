import { Input, Stack } from "@mui/material"
import { useRef, useState } from "react"
import style from "./AutoComplete.module.css"
import {debounceFn, trotleFn} from "./DebounceUtil"

export const AutoComplete = () => {
    const country = ['India', 'USA', 'UK', 'Germany', 'Canada', 'Frnace', 'Luxemberg', 'Swizerland']

    const [seachText, setSeachText] = useState('')
    const [filter, setFilter] = useState<string[]>([])

    function handleChange(event: string): void {
        setSeachText(event);
        const filterData = country.filter((data) => data.toLowerCase().includes(event.toLowerCase()))
        setFilter(filterData)
    }

    return <Stack sx={{width:"300px"}}>
        <Input onChange={(event) => handleChange(event.target.value)} value={seachText}/>
        <div>
            {filter.map(data => <div className={style.suggestionText} onClick={()=>setSeachText(data)}>{data}</div>)}
        </div>
    </Stack>
}

export const AutoCompleteWithDebounce = () => {
    const country = ['India', 'USA', 'UK', 'Germany', 'Canada', 'Frnace', 'Luxemberg', 'Swizerland','Indonesia' ]

    const [seachText, setSeachText] = useState('')
    const [filter, setFilter] = useState<string[]>([])

    const ref = useRef<any>()

    function handleChange(event: string): void {
        console.log('searching')
        const filterData = country.filter((data) => data.toLowerCase().includes(event.toLowerCase()))
        setFilter(filterData)
    }

    function debounce(text:any, timeOut:any) {
        if(ref.current) {
            clearTimeout(ref.current)
        }
        ref.current = setTimeout(()=>handleChange(text), timeOut)
    }

    return <Stack sx={{width:"300px"}}>
        <Input onChange={(event) => {
            setSeachText(event.target.value);
            debounce(event.target.value, 2000)
        }} 
        value={seachText}/>
        <div>
            {filter.map(data => <div className={style.suggestionText} onClick={()=>setSeachText(data)}>{data}</div>)}
        </div>
    </Stack>
}

export const AutoCompleteDebounceWithoutRef = () => {
    const country = ['India', 'USA', 'UK', 'Germany', 'Canada', 'Frnace', 'Luxemberg', 'Swizerland', 'Indonesia']

    const [seachText, setSeachText] = useState('')
    const [filter, setFilter] = useState<string[]>([])

    function handleChange(event: string): void {
        console.log('searching')
        const filterData = country.filter((data) => data.toLowerCase().includes(event.toLowerCase()))
        setFilter(filterData)
    }

    return <Stack sx={{width:"300px"}}>
        <Input onChange={(event) => {
            setSeachText(event.target.value)
            debounceFn(handleChange, event.target.value)
            }} 
        value={seachText}/>
        <div>
            {filter.map(data => <div className={style.suggestionText} onClick={()=>setSeachText(data)}>{data}</div>)}
        </div>
    </Stack>
}

export const AutoCompleteThrotle = () => {
    const country = ['India', 'USA', 'UK', 'Germany', 'Canada', 'Frnace', 'Luxemberg', 'Swizerland', 'Indonesia']

    const [seachText, setSeachText] = useState('')
    const [filter, setFilter] = useState<string[]>([])

    function handleChange(event: string): void {
        console.log('searching')
        const filterData = country.filter((data) => data.toLowerCase().includes(event.toLowerCase()))
        setFilter(filterData)
    }

    return <Stack sx={{width:"300px"}}>
        <Input onChange={(event) => {
            setSeachText(event.target.value)
            trotleFn(handleChange, event.target.value)
            }} 
        value={seachText}/>
        <div>
            {filter.map(data => <div className={style.suggestionText} onClick={()=>setSeachText(data)}>{data}</div>)}
        </div>
    </Stack>
}

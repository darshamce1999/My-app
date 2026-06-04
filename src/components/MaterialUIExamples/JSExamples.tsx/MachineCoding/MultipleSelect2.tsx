import React, { useEffect, useState } from 'react'
import style from "./MultipleSelect2.module.css"

function MultipleSelect2() {
    const [search, setSearch] = useState('')
    const [list, setList] = useState([])
    const [selected, setSelected] = useState<any>([])

    useEffect(() => {
        if(search.length > 0) {
            fetch(`https://dummyjson.com/users/search?q=${search}`)
                .then(res => res.json())
                .then(data => setList(data.users))
        }
    }, [search])

    function handleDelete(index:number) {
        const temp = [...selected]
        temp.splice(index, 1)
        setSelected(temp)
    }

  return (
    <div style={{width:"80vw", margin:"auto"}}>
        <div style={{border:"1px solid black", padding:"5px", display:"flex", flexFlow:"wrap", gap:"5px", borderRadius:"10px"}}>
            {selected.map((item:any, index:number) => <span style={{backgroundColor:"rgba(0, 0, 0, 0.144)", padding:"5px", borderRadius:"10px", flexShrink:"0"}}>{`${item.firstName} ${item.lastName}`} <span style={{cursor:"pointer"}} onClick={() => handleDelete(index)}>❌</span></span>)}
            <input placeholder='Enter search text' style={{width:"inherit", border:"none", outline:"none"}} type='text' value={search} onChange={(e) => setSearch(e.target.value)}/>
        </div>
        <ul className={style.ulList}>
            {list.map((item:any) => <li className={style.suggestion} onClick={(e) => {
                setSelected((prev:any) => [...prev, item])
                setSearch('')
                setList([])
            }}>{`${item.firstName} ${item.lastName}`}</li>)}
        </ul>
    </div>
  )
}

export default MultipleSelect2
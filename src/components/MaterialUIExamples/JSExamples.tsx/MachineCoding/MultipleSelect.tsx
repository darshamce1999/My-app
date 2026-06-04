import React, { useEffect, useRef, useState } from 'react'
import style from "./MultipleSelect.module.css"

function MultipleSelect() {
    const [searchTerm, setSearchTerm] = useState('')
    const [searchRes, setSearchRes] = useState([])
    const [selected, setSelected] = useState<any>([])
    const inputRef = useRef<any>()
    
    useEffect(() => {
        if(searchTerm.length > 0) {
            fetch(`https://dummyjson.com/users/search?q=${searchTerm}`)
            .then(userRes => userRes.json())
            .then(users => setSearchRes(users.users))
        }
    }, [searchTerm])

    function handleSelect(user:any) {
        setSelected([...selected, user])
        setSearchTerm("")
        setSearchRes([])
        inputRef.current.focus()
    }

    function removePill(index:any) {
        const temp = [...selected]
        temp.splice(index, 1)
        setSelected(temp)
    }

    function handleKeyDown(e:any) {
        console.log(e)
        if(e.key == 'Backspace' && e.target.value == '' && selected.length > 0) {
            const temp = [...selected]
            temp.pop()
            setSelected(temp)
        }
    }

  return (
    <div style={{width:"fit-content", margin:"auto"}}>
        <div className={style.userInput}>
            {selected.map((user:any, index:any) => <span className={style.pill} onClick={() => removePill(index)}>{`${user.firstName} ${user.lastName} ❌`}</span>)}
            <input ref={inputRef} type='text' placeholder='Search the user' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}  onKeyDown={handleKeyDown}/>
        </div>
        <ul className={style.ulStyle}>{searchRes.map((user:any) => 
            <li key={user.email} className={style.listItem} style={{paddingBlock: "5px"}} onClick={() => handleSelect(user)}>{`${user.firstName} ${user.lastName}`}</li>)}
        </ul>
    </div>
  )
}

export default MultipleSelect
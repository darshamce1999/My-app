import React, { useState } from 'react'

function TodoListComp() { 
    const [list, setList] = useState<any>([])
    const [input, setInput] = useState('')
    const [editList, setEditList] = useState<Record<number, string>>({})

  return (
    <div style={{width:"50vw", margin:"auto"}}>
        <input type='text' value={input} onChange={(e) => setInput(e.target.value)}/>
        <button onClick={() => {
            setList([...list, {key: Math.random(), value:input, isStrike:false, isEdit:false}])
            setInput('')
        }}>Add Todo</button>
        <div>
            {list.map((item:any, index:number) => <div key={item.key}>
                {item.isEdit ? <input type='text' value={editList[item.key]} onChange={(e) => {
                    const temp = {...editList}
                    temp[item.key] = e.target.value
                    setEditList(temp)
                }}/> : <span style={{width:"40vw", textDecoration: `${item.isStrike? "line-through": "none"}`}}>{item.value}</span>}
                <button onClick={() => {
                    const temp = [...list]

                    if(temp[index].isEdit) {
                        const t = {...editList}

                        temp[index] = {...item, isEdit: !item.isEdit, value: t[item.key]}
                        setList(temp)


                        delete t[item.key]
                        setEditList(t)
                    } else {
                        const t = {...editList}
                        t[item.key] = item.value
                        setEditList(t)

                        temp[index] = {...item, isEdit: !item.isEdit}
                        setList(temp)
                    }
                }}>{item.isEdit? "Save": "Edit"}</button>
                <button onClick={() => {
                    const temp = [...list]
                    temp[index] = {...item, isStrike: !item.isStrike}
                    setList(temp)
                }}>Strike</button>
                <button onClick={() => {
                    const temp = [...list]
                    temp.splice(index, 1)
                    setList(temp)
                }}>Delete</button>
            </div>)}
        </div>
    </div>
  )
}

export default TodoListComp
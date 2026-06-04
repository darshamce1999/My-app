import React, { useState } from 'react'

function TodoListComp2() {
    const [todo, setTodo] = useState<{value:string, strikeOut:boolean, isEditView:boolean}[]>([])
    const [text, setText] = useState('')

    return (
        <>
            <input type='text' value={text} onChange={(e) => setText(e.target.value)}/>
            <button onClick={() => {
                setTodo([...todo, {value: text, strikeOut: false, isEditView:false}])
                setText('')
            }}>Add Todo</button>
            {todo.map((item, index) => <div key={index}>
                {item.isEditView? <input type='text' value={item.value} onChange={(e) => {
                    const temp = [...todo]
                    temp[index] = {...temp[index], value: e.target.value}
                    setTodo(temp)
                }}/>: <span style={{textDecoration: `${item.strikeOut? "line-through": "none"}`}}>{item.value}</span>}
                <button onClick={() => {
                    const temp = [...todo]
                    temp[index] = {...temp[index], isEditView: !temp[index].isEditView}
                    setTodo(temp)
                }}>{item.isEditView? "Save": "Edit"}</button>
                <button onClick={() => {
                    const temp = [...todo]
                    temp[index] = {...temp[index], strikeOut: !temp[index].strikeOut}
                    setTodo(temp)
                }}>StrikeOut</button>
                <button onClick={() => {
                    const temp = [...todo]
                    temp.splice(index, 1)
                    setTodo(temp)
                }}>Delete</button>
            </div>)}
        </>
    )
}

export default TodoListComp2
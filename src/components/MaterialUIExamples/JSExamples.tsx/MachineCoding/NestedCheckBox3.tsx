import React, { useState } from 'react'

const data = [
    {
        id: "electronics",
        label: "Electronics",
        children: [
            {
                id: "mobile",
                label: "Mobile phones",
                children: [
                    { id: "iphone", label: "iPhone" },
                    { id: "android", label: "Android" },
                ],
            },
            {
                id: "laptops",
                label: "Laptops",
                children: [
                    { id: "mac", label: "MacBook" },
                    { id: "surface", label: "Surface Pro" },
                ],
            },
        ],
    },
    {
        id: "books",
        label: "Books",
        children: [
            { id: "fiction", label: "Fiction" },
            { id: "nonfiction", label: "Non-fiction" },
        ],
    },
    { id: "toys", label: "Toys" },
];
function NestedCheckBox3() {
    const [checkBox, setCheckBox] = useState(data)
    const [state, setState] = useState<any>({})

    function getAllChildren(children: any) {
        if (!children) return []

        const res = children.map((item: any) => {
            return [item.id, ...getAllChildren(item.children)]
        })
        return res.flat(Infinity)      
    }

    // function getState(id: string, children: any) {
    //     // if (!children) {
    //     //     return state[id] ? "check": "unCheck"
    //     // }
    //     const temp = getAllChildren(children).map((item:any) => {
    //         return state[item]?? false 
    //     })
    //     console.log(temp)

    //     if(temp.length) {
    //         if(temp.every((item:any) => item == true)) {
    //             return "check"
    //         }

    //         if(temp.every((item:any) => item == false)) {
    //             return "unCheck"
    //         }
    //         return "intermediate"
    //     } else {
    //         return state[id] ? "check": "unCheck"
    //     }
    // }


    function getState(node:any) {
        if (!node.children) {
            return state[node.id] ? "check": "unCheck"
        }

        const childrenStatus = node.children.map(getState)

        if(node.children == "electronics") {
            let a = 3
            console.log(a)
        }
        if(childrenStatus.every((item:any) => item === "check")) return "check"
        if(childrenStatus.every((item:any) => item === "unCheck")) return "unCheck"
        return "indeterminate"
    }


    function HandleChange(id:string, children:any, value:boolean) {
        const res = getAllChildren(children)
        
        const temp = {...state, [id]: value}
        res.forEach((item:any) => {
            temp[item] = value
        })
        setState(temp)
    }

    function CheckBox(props: any) {

        return <div style={{ paddingLeft: "15px" }}>
            <label>
                <input type='checkbox' 
                    checked={getState(props.data) == 'check' ? true: false }
                    // onChange={(e) => setState((prev: any) => {
                    //     return { ...prev, [props.data.id]: e.target.checked }
                    // })}
                    ref={(node) => {
                        if(node) {
                            node.indeterminate = getState(props.data) == "indeterminate"
                        }
                    }}
                    onChange={(e) => HandleChange(props.data.id, props.data.children,  e.target.checked)}
                ></input>
                <span>{props.data.label}</span>
            </label>
            {props.data.children && props.data.children.map((data: any) => <CheckBox data={data} key={data.id} />)}
        </div>
    }

    return (
        <>{checkBox.map(data => <CheckBox data={data} key={data.id} />)}</>
    )
}

export default NestedCheckBox3
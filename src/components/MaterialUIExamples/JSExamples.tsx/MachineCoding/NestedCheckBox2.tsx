import React, { useEffect, useState } from 'react'

function NestedCheckBox2() {
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

    const [check, setCheck] = useState<Record<string, boolean>>({})

    function getAllChildren(node:any) {

        const res = node.children?.flatMap((item:any) => {
            if(item.children) {
                return [item.id, ...getAllChildren(item)]
            } else {
                return item.id
            }
        })
        return res?? []
    }

    function handleChange(node:any, status:boolean) {
        const temp = {...check}
        temp[node.id] = status

        const childNodes = getAllChildren(node)

        childNodes.forEach((item:any) => {
            temp[item] = status
        })

        setCheck(temp)
        console.log(temp)
    }


    return (
        <div><CheckBoxComp data={data} checkState={check} updateCheckState={handleChange}/></div>
    )
}

function CheckBoxComp(props:any) {

    function getState(node:any) {
        if(!node.children) {
            return props.checkState[node.id]? "checked": "unchecked"
        }

        const childrenStatus = node.children.map(getState)
        if(childrenStatus.every((item:any) => item === "checked")) return "checked"
        if(childrenStatus.every((item:any) => item === "unchecked")) return "unchecked"
        return "indeterminate"
    }
   

    return <div style={{paddingLeft:"20px"}}>
        {props.data.map((slice:any, i:never) => <div key={i}>
            <label>
                <input
                    type='checkbox'
                    checked={getState(slice) == "checked"} 
                    onChange={(e) => props.updateCheckState(slice, e.target.checked)}
                    ref={(el) => {
                        if(el) {
                            el.indeterminate = getState(slice) === "indeterminate"
                        }
                    }}
                />
                {slice.label}
            </label>
            {slice.children && <CheckBoxComp data={slice.children} checkState={props.checkState} updateCheckState={props.updateCheckState}/>}
        </div>)}
    </div>
}

export default NestedCheckBox2
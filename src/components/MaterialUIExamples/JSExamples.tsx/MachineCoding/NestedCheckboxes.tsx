import React, { useEffect, useRef, useState } from 'react'

// const checkboxesData = [
//     {
//       id: 1,
//       name: 'Electronics',
//       checked: false,
//       children: [
//         {
//           id: 2,
//           name: 'Mobile phones',
//           checked: false,
//           children: [
//             {
//               id: 3,
//               name: 'iPhone',
//               checked: false,
//             },
//             {
//               id: 4,
//               name: 'Android',
//               checked: false,
//             },
//           ],
//         },
//         {
//           id: 5,
//           name: 'Laptops',
//           checked: false,
//           children: [
//             {
//               id: 6,
//               name: 'MacBook',
//               checked: false,
//             },
//             {
//               id: 7,
//               name: 'Surface Pro',
//               checked: false,
//             },
//           ],
//         },
//       ],
//     },
//     {
//       id: 8,
//       name: 'Books',
//       checked: false,
//       children: [
//         {
//           id: 9,
//           name: 'Fiction',
//           checked: false,
//         },
//         {
//           id: 10,
//           name: 'Non-fiction',
//           checked: false,
//         },
//       ],
//     },
//     {
//       id: 11,
//       name: 'Toys',
//       checked: false,
//     },
//   ];

// // function NestedCheckboxes(props:any) {
// //     const [state, setState] = useState(props.slice.checked)
// //     const ref = useRef<HTMLInputElement | null>(null)

// //     // useEffect(() => {
// //     //     const temp = props.slice.children? props.slice.children.reduce((acc:number, data:any) => {
// //     //         if(data.checked) {
// //     //             acc++
// //     //             return acc
// //     //         } else {
// //     //             return acc
// //     //         }
// //     //     }, 0): 0;

// //     //     if(temp > 0 && props.slice.children > temp && ref.current) {
// //     //         ref.current.indeterminate = true
// //     //     }

// //     //     // console.log(ref.current?.indeterminate)
// //     //     // if(ref.current ) {
// //     //     //     ref.current.indeterminate = true
// //     //     //     ref.current.checked = true
// //     //     // }
// //     // }, [state])


// //     // useEffect(() => {
// //     //     const temp = props.slice
// //     //     temp.checked = !temp.checked;
        
// //     //     temp.map((data:any) => {
// //     //         data
// //     //     })

// //     // }, [state])


// //   return (
// //     <div style={{paddingLeft: "20px"}}>
// //         <label>
// //             <input ref={ref} type='checkbox' value='tygug' checked={state} onChange={(e) => {
// //                 console.warn(e)
// //                 setState(e.target.checked)
// //             }}/>
// //             {props.slice.name}
// //         </label>
// //         {props.slice.children?.map((data:any) => <NestedCheckboxes slice={data} store={props.store} setStore={props.setStore}/>)}
// //     </div>
// //   )
// // }


// function NestedCheckboxes(props:any) {
//     const [state, setState] = useState(props.isChecked)
//     const [count, setCount] = useState(0)
//     const ref = useRef<HTMLInputElement | null>(null)

//     useEffect(() => {
//         if(!(ref.current && props.slice.children)) {
//             return
//         }

//         if (count == 0) {
//             ref.current.indeterminate = false
//             // setState(false)
//         } else if(props.slice.children.length > count) {
//             ref.current.indeterminate = true
//             // setState(false)
//         } else if (props.slice.children.length == count) {
//             ref.current.indeterminate = false
//             ref.current.checked = true
//             // setState(true)
//         }  
//     }, [count])

//     useEffect(() => {
//         if(props.isChecked) {
//             setState(true)
//         } else {
//             setState(false)
//         }
//     }, [props.isChecked])


//   return (
//     <div style={{paddingLeft: "20px"}}>
//         <label>
//             <input ref={ref} type='checkbox' value='tygug' checked={state} onChange={(e) => {
//                 console.warn(e)
//                 setState(e.target.checked)
//                 props.updatedParent(e.target.checked)
//             }}/>
//             {props.slice.name}
//         </label>
//         {props.slice.children?.map((data:any) => <NestedCheckboxes slice={data} isChecked={state} updatedParent={(value:any) => {
//                 if(value) {
//                     setCount(count + 1)
//                 } else {
//                     setCount(count - 1)
//                 }
//                 props.updatedParent?.(value)
//         }}/>)}
//     </div>
//   )
// }


// export default NestedCheckboxes
 
// export function RootCheckBoxComp() {
    

//     return <div style={{width: "fit-content", margin: "auto"}}>{checkboxesData.map(data => <NestedCheckboxes slice={data} isChecked={false} />)}</div>
// }


type Node = {
  id: string;
  label: string;
  children?: Node[];
};

const data: Node[] = [
//   {
//     id: "electronics",
//     label: "Electronics",
//     children: [
//       {
//         id: "mobile",
//         label: "Mobile phones",
//         children: [
//           { id: "iphone", label: "iPhone" },
//           { id: "android", label: "Android" },
//         ],
//       },
//       {
//         id: "laptops",
//         label: "Laptops",
//         children: [
//           { id: "mac", label: "MacBook" },
//           { id: "surface", label: "Surface Pro" },
//         ],
//       },
//     ],
//   },
  {
    id: "books",
    label: "Books",
    children: [
      { id: "fiction", label: "Fiction" },
      { id: "nonfiction", label: "Non-fiction" },
    ],
  },
//   { id: "toys", label: "Toys" },
];

export function RootCheckBoxComp() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  // Get all child ids recursively
  const getAllChildren = (node: Node): string[] => {
    if (!node.children) return [];
    return node.children.flatMap((child) => [
      child.id,
      ...getAllChildren(child),
    ]);
  };

  // Check/uncheck node + all children
  const handleChange = (node: Node, isChecked: boolean) => {
    const newState = { ...checked };
    newState[node.id] = isChecked;

    const children = getAllChildren(node);
    children.forEach((id) => (newState[id] = isChecked));

    setChecked(newState);
  };

  // Determine state
  const getState = (node: Node): "checked" | "indeterminate" | "unchecked" => {
    if (!node.children) {
      return checked[node.id] ? "checked" : "unchecked";
    }

    const childStates = node.children.map(getState);

    if (childStates.every((s) => s === "checked")) return "checked";
    if (childStates.every((s) => s === "unchecked")) return "unchecked";
    return "indeterminate";
  };

  const TreeNode = ({ node }: { node: Node }) => {
    const state = getState(node);

    return (
      <div style={{ marginLeft: 20 }}>
        <input
          type="checkbox"
          checked={state === "checked"}
          ref={(el) => {
            if (el) el.indeterminate = state === "indeterminate";
          }}
          onChange={(e) => handleChange(node, e.target.checked)}
        />
        {node.label}

        {node.children?.map((child) => (
          <TreeNode key={child.id} node={child} />
        ))}
      </div>
    );
  };

  return (
    <div>
      {data.map((node) => (
        <TreeNode key={node.id} node={node} />
      ))}
    </div>
  );
}
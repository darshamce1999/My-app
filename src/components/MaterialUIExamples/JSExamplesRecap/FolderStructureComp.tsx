import { useState } from "react"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

// const folder = [
//     {
//     name: 'src',
//     hasChild: true,
//     children: [
//         {
//             name: 'Component',
//             hasChild: true,
//             children: [
//                 {   
//                     name: 'Home',
//                     hasChild: true,
//                     children: [
//                         {   
//                             name: 'Home.js',
//                             hasChild: false,
//                             children: []
//                         },
//                     ]
//                 },
//                 {   
//                     name: 'About.js',
//                     hasChild: false,
//                     children: []
//                 }
//             ]
//         },
//         {   
//             name: 'Public',
//             hasChild: true,
//             children: [
//                 {   
//                     name: 'index.html',
//                     hasChild: false,
//                     children: []
//                 }
//             ]
//         }
//     ]
//     },
//     {   
//         name: 'package.js',
//         hasChild: false,
//         children: []
//     }
// ]

const mainFolder = {
    name: 'My app',
    hasChild: true,
    children: [
        {
        name: 'src',
        hasChild: true,
        children: [
            {
                name: 'Component',
                hasChild: true,
                children: [
                    {   
                        name: 'Home',
                        hasChild: true,
                        children: [
                            {   
                                name: 'Home.js',
                                hasChild: false,
                                children: []
                            },
                        ]
                    },
                    {   
                        name: 'About.js',
                        hasChild: false,
                        children: []
                    }
                ]
            },
            {   
                name: 'Public',
                hasChild: true,
                children: [
                    {   
                        name: 'index.html',
                        hasChild: false,
                        children: []
                    }
                ]
            }
        ]
        },
        {   
            name: 'package.js',
            hasChild: false,
            children: []
        }
    ]
}

function FolderStructureComp() { 

    return <FolderComp folderNode={mainFolder}/>
}

export default FolderStructureComp


export function FolderComp(props:any) {
    const [isExpand, setExpand] = useState(false)

    return <div style={{marginLeft: "20px"}}>
                <div  onClick={()=>setExpand(!isExpand)}>{props.folderNode.name}</div>
                {props.folderNode.children.map((data:any)=>{
                        return <div style={{display: `${props.folderNode.hasChild && isExpand? "block": "none" }`}}>
                                    <FolderComp folderNode={data} />
                                </div>
                })}
            </div>
}
//I want child expand and clopse data to still persist even if grandParent is colapsed, hence using display none and block

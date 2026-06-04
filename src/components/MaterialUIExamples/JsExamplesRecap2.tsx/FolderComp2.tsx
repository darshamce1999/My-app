import React, { useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

export const folderTree2 = {
    name: "src",
    hasChild: true,
    child: [
        {
            name: "components",
            hasChild: true,
            child: [
                {
                    name: "header",
                    hasChild: true,
                    child: [
                       {
                        name: "header.js",
                        hasChild: false,
                       },
                       {
                        name: "header.css",
                        hasChild: false,
                       }
                    ]
                },
                {
                    name: "footer",
                    hasChild: true,
                    child: [
                        {
                         name: "footer.js",
                         hasChild: false,
                        },
                        {
                         name: "footer.css",
                         hasChild: false,
                        }
                     ]
                }
            ]
        },
        {
            name: "Package.json",
            hasChild: false,
        },
        {
            name: "Package.lock.json",
            hasChild: false,
        }
    ]
}

function FolderComp2(props:any) {
    const [open, setOpen] = useState(false)

  return (
    <div style={{paddingLeft: "20px"}}>
        <p onClick={() => setOpen(!open)}>
            {props.folder.hasChild ? open? <ExpandMoreIcon />: <ExpandLessIcon />: null}
            {props.folder.name}
        </p>
        {/* {open && props.folder.hasChild && props.folder.child.map((data:any) => <FolderComp2 folder={data}/>)} */}
            {/* if u use this if u expand or colapse the compoonet, it will get unmounted and u will lose state  */}
        <div style={{display: open ? "block": "none"}}>{props.folder.hasChild && props.folder.child.map((data:any) => <FolderComp2 folder={data}/>)}</div> 
            {/* use this to keep trxak of any expanded or colapsed ele */}
    </div>
  )
}

export default FolderComp2
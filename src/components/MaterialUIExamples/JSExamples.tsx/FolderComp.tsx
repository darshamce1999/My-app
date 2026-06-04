import { useState } from "react";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';

export const folderTree = {
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

export const FolderComp = (props:any) => {
    const folderTree = props.tree;
    const [state, setState] = useState(false);

    return <div style={{paddingLeft:"20px"}}>
        <div onClick={()=>setState(!state)}>

            {folderTree.hasChild ? 
                <span>{state? <KeyboardArrowDownIcon />: <KeyboardArrowRightIcon />}</span>
                : <TextSnippetIcon fontSize="small"/>
            }

            {folderTree.name}
        </div>
        {folderTree.hasChild && state && folderTree.child.map((data:any)=>{
            return <>
                <FolderComp tree={data}/>
            </>
        })}
    </div>
}
//here child expand and clopse data to will not persist  if grandParent is colapsed, 
// if we need that use display none and block, see FolderStructureComp inside jsExampleRecap

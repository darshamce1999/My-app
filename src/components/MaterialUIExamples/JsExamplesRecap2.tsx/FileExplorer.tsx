import React, { useState } from 'react';

export const FileExplorer = (props:any) => {
    const [open, setOpen] = useState(true)
  return (
    <div style={{margin: "10px"}}>
        <p onClick={() => setOpen(!open)}>{props.tree.name}</p>
        {props.tree.child?.map((data:any, index:number) => {
            return <div style={{display: `${open ? "block": "none"}`}}>
                <FileExplorer tree={data} key={index}/>
            </div>
        }) }
    </div>
  );
};

const fileExplorerRoot = () => {
    const folderTree = [
    {
      name: 'src',
      child: [
        {
          name: 'components',
          child: [
            {
              name: 'header',
              child: [
                {
                  name: 'header.js',
                },
                {
                  name: 'header.css',
                },
              ],
            },
            {
              name: 'footer',
              child: [
                {
                  name: 'footer.js',
                },
                {
                  name: 'footer.css',
                },
              ],
            },
          ],
        },
        {
          name: 'Package.json',
        },
        {
          name: 'Package.lock.json',
        },
      ],
    },
  ];

    return <>
        {folderTree.map((data, index) => {
          return <FileExplorer tree={data} key={index}/>
        })}
    </>
}

export default fileExplorerRoot

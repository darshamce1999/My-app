import React, { useState } from 'react'

function FileUploadWithDragAndDrop() {
    const [files, setFiles] = useState<any>([])

    function handleChange(e: any) {
        console.log(e.target.files)
        setFiles([...files, ...e.target.files])
    }

    function getUrl(file:any) {
        console.log(file)
        // console.log(URL.createObjectURL(file))
        return URL.createObjectURL(file)
    }

    return (
        <>
            <div style={{ width: "50vw", margin: "auto", border: "1px solid black", textAlign: "center", paddingBlock: "5vh" }}>
                <p>Drag and drop your file here</p>
                <input multiple type='file' style={{ textAlign: "center" }} onChange={handleChange} />
            </div>
            <div>
                {files.map((file:any, index:number) => <div key={index}>
                    <img src={URL.createObjectURL(file)} alt={file.name}/>
                </div>)}
            </div>
        </>
    )
}

export default FileUploadWithDragAndDrop
import React, { useState } from 'react'
import {useDropzone} from 'react-dropzone'
const DragDrop=(props)=>{
    const [ files , setFiles] =useState([])
    const {getRootProps ,getInputProps} = useDropzone({
        accept: "image/*",
        onDrop: (acceptedFiles) =>{
            setFiles(
                acceptedFiles.map((file) => Object.assign(file,{
                    preview: URL.createObjectURL(file),
                }))
            )
        }
    })
    const images = files.map((file)=>(
        <div key={file.name}>
            <div>
                <img src={file.preview} style={{width:"200px"}} alt="preview" />
            </div>

        </div>
    ))

    const demoMethod =() =>{
        props.sendData(files);
      }
     
      demoMethod();


    return(
     <div >
         <div {...getRootProps()}>
         <input {...getInputProps()} />
         <p style={{textAlign:"center", padding:"15px", border:"2px solid black" }} >drop files here</p>

          
         </div>
 <div>{images}</div>
     </div>
 )   
}

export default DragDrop;
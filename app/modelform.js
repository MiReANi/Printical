'use client'

import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import {StlViewer} from "react-stl-viewer";

const initValues = {name: "", email: ""}

const initState = {values: initValues}

export default function ModelForm(){
  const [state, setState] = useState(initState);
  const {values} = state;

  const [file, setFile] = useState([]);
  const [preview, setPreview] = useState("https://storage.googleapis.com/ucloud-v3/ccab50f18fb14c91ccca300a.stl");

  const handleChange = ({target}) => setState((prev) => ({
    ...prev,
    values: {
      ...prev.values,
      [target.name] : target.value,
    },
  }));

  // Nyt se alko toimii jotenkuten, korjaa viel osuus et se tyhjentää tän
  const onSubmit = async (e) => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    e.preventDefault()
    const data = values
    const res = await fetch('http://localhost:3000/api', {
      method: 'POST',
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
  })

    const result = await res.json();
    console.log(result);
  };

  const fileChange = e => {
    URL.revokeObjectURL(preview);
    const file = e.target.files[0];
    setFile(file);
    setPreview(URL.createObjectURL(file));
  };

  /*function handleOnChange(e: React.FormEvent<HTMLInputElement>){
    const target = e.target as HTMLInputElement & {
      files: FileList;
    }
    URL.revokeObjectURL(preview);
    const file = target.files[0];

    setPreview(URL.createObjectURL(file));
  }*/

  const style = {
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
}

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="name" value={values.name} onChange={handleChange}/>
      <input type="email" name="email" value={values.email} onChange={handleChange}/>
      {/*<input type="file" name="stl" onChange={e => fileChange(e)}></input>
      <StlViewer
            style={style}
            orbitControls
            shadows
            url={preview}
  />*/}
      <button>Submit</button>
    </form>
  )
}

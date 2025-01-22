'use client'

import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'

const initValues = {name: "", email: ""}

const initState = {values: initValues}

//Lisää
// "Ostoskori"
// Puh(vapaaehtoinen)
// Vapaa sana
export default function ModelForm(){
  const [state, setState] = useState(initState);
  const {values} = state;


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

      <button>Submit</button>
    </form>
  )
}

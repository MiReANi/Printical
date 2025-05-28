'use client'

import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'

const initValues = {name: "", email: "", phone: "", yritys: "", y_tunnus: "", freeWord: ""}

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
    setState(initState)
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
        <div className='grid grid-cols-2'>
            <div className='ml-auto mr-10 space-y-1'>
                <p>Nimi</p>
                <input type="text" className='rounded-sm w-64 pl-2' name="name" value={values.name} onChange={handleChange} required/>
                <p>Sähköposti</p>
                <input type="email" name="email" value={values.email} onChange={handleChange} required/>
                <p>Puhelin</p>
                <input type="phone" name="phone" value={values.phone} onChange={handleChange}/>
                <p>Yritys</p>
                <input type="yritys" name="yritys" value={values.yritys} onChange={handleChange}/>
                <p>Y-tunnus</p>
                <input type="y_tunnus" name="y_tunnus" value={values.y_tunnus} onChange={handleChange}/>
            </div>
            <div className='mr-20 space-y-1'>
                <p>Viesti</p>
                <textarea type="text" rows={10} className='w-full rounded-sm' name="freeWord" value={values.freeWord} onChange={handleChange} required/>
            </div>
        </div>
        <button className='bg-blue p-4 rounded-lg text-white'>Lähetä</button>
    </form>
  )
}

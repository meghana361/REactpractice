import React, { useState } from 'react'
import useLoacalStorage from './useLoacalStorage'
import "./style.css"

const Darklightmode = () => {
    const[theme,setTheme]=useLoacalStorage("theme","dark")
    function handletoggle(){
        setTheme(theme==="dark"?"light":"dark")
    }
    console.log(theme);
    
  return (
    <div className='lightdarkmode' data-theme={theme}>
      <div className='container'>
        <p>Hello world</p>
        <button onClick={handletoggle}>change theme</button>
      </div>
    </div>
  )
}

export default Darklightmode

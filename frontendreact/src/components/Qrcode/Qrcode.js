import React, { useState } from 'react'
import QrCode from "react-qr-code"
const Qrcode = () => {
    const[input,setInput]=useState('')
    const[qrcode,setQrcode]=useState('')
    const generateQrCode=()=>{
        setQrcode(input)
        setInput('')
    }
  return (
    <div>
      <h1>Qr Code generator</h1>
      <div style={{marginBottom:"20px",backgroundColor:"white"}} > 
      <input style={{border:"solid 1px black"}} type="text" name='qrcodevalue' value={input}  placeholder='ENter your Value' onChange={(e)=>setInput(e.target.value)}/>
    <button disabled={input&&input.trim()!==''?false:true} onClick={generateQrCode}>Generate</button>
      </div>
    <div>
<QrCode id='qrcode' value={qrcode} size={400} bgColor='#fff'/>
    </div>
    </div>
  )
}

export default Qrcode

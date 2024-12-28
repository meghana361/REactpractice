import React, { useEffect, useState } from 'react'

const useLoacalStorage = (key,defaultvalue) => {
    const[value,setValue]=useState(()=>{
        let curretvalue;
        try {
            curretvalue=JSON.parse(localStorage.getItem(key)||String(defaultvalue))
        } catch (error) {
            console.log(error);
            curretvalue=defaultvalue;
            
        }
        return curretvalue
        
    })
    console.log(value);
    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(value));
    },[key,value])
  return [value,setValue]
}

export default useLoacalStorage

import React, { useEffect, useState } from 'react'
import style from "./StopWatch.module.css"

const StopWatch = () => {
    let [data,setData]=useState(0)
    let [load,reload]=useState(false)
    let interval

    useEffect(()=>{
        if(load){
            interval=setInterval(()=>{
                setData(data=>data+1)
            },1000)
        }else{
            clearInterval(interval)
        }
        return()=> clearInterval(interval)
    },[load])

    let a=()=>{
        reload(true)
    }
    let pause=()=>{
        
            reload(false)
    }
    let c=()=>{
        setData(0)
        reload(true)
    }


   
  return (
    <div className={style.x}>
         <div className={style.cap}></div>
    <div className={style.a}>
        <h1 className={style.ab}>{data}</h1>
        
        <button onClick={a} >Start</button>
        <button onClick={pause} >Pause</button>
        <button onClick={c} >Restart</button>
    </div>
    </div>
  )
}

export default StopWatch
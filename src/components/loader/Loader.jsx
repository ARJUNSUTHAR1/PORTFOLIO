
import { useEffect, useState } from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import './loader.css'
import run from "../../assets/running.mp4"

const Loader = () => {
    let [count ,setCount] = useState(0)
    const updateCount = ()=>{
        if(count === 100){
            return;
        }
        setCount(count += Math.floor(Math.random()* 10)+1)
        if(count>100){
            setCount(100)
        }
        let delay = Math.floor(Math.random()* 500)+50
        setTimeout(updateCount,delay)
    }
    useEffect(()=>{
        updateCount()
    },[])
    useGSAP(()=>{
        gsap.to('.counter',{
            opacity : 0,
            delay : 3,
        })
        gsap.to('.video-bg',{
            opacity : 0,
            delay : 3,
           
        })
      
        gsap.to('.bar',{
            height : 0,
            delay : 3,
            stagger : 0.05,
            ease : "power4.inOut"
        })
    })
  return (
    
       <div className='loader'>
        
        <div className="counter">{count}</div>
     <video className='video-bg'  loop muted autoPlay="autoplay"  src={run} ></video>
     <div className="overlay">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
     </div>
     </div>
   

  )
}

export default Loader

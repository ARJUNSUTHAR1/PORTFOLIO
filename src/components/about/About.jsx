import React, { useEffect, useRef } from 'react'
import './about.css'
import { useGSAP } from '@gsap/react'

const About = () => {
  const scrollbarRef = useRef(null)
  const scrollerContainerRef = useRef(null);


  useEffect(()=>{
  const texts = document.querySelectorAll('.text');
  const scroller = document.querySelector('.scrollbar');

  const repeat = ()=>{
    let i = 5;
    const repeater = ()=>{
      setTimeout(()=>{
[...texts].forEach((item)=>{
  item.classList.remove('active')

})



       texts[i].classList.add('active');
      
       
       i++;
       if(texts.length == i){
        i = 0;
       }
       if(i >= texts.length){
        return;
       }
       repeater()
      },1000)
    }
    repeater()
  }
    repeat();
  },[]);
 
  return (
    <div className='about'>
      <div className="left">Develop With</div>
      <div className="right" ref={scrollerContainerRef}>
        <div className="scrollbar" ref={scrollbarRef}>
        <div className='text'>love 🫶🏻</div>
        <div className='text'>coffee ☕</div>
        <div className='text'>wizardry 🧙</div>
        <div className='text'>passion ❤️‍🔥</div>
        <div className='text'>good vibes 🎧</div>
        <div className='text '>creativity 🎨</div>
        <div className='text '>love 🫶🏻</div>
        <div className='text'>coffee ☕</div>
        <div className='text'>wizardry 🧙</div>
        <div className='text'>passion ❤️‍🔥</div>
        <div className='text'>good vibes 🎧</div>
        <div className='text'>creativity 🎨</div>
        <div className='text '>love 🫶🏻</div>
        <div className='text'>coffee ☕</div>
        <div className='text'>wizardry 🧙</div>
        <div className='text'>passion ❤️‍🔥</div>
        <div className='text'>good vibes 🎧</div>
        <div className='text'>creativity 🎨</div>
        </div>
      </div>
    </div>
  )
}

export default About

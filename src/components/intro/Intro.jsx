import React from 'react';
import './Intro.css';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';


export default function Intro() {
  const textRef=useRef();
  useEffect(()=>{
    init(textRef.current, { showCursor: false, strings: ['Front-End Developer'], startDelay: 500, backDelay:  1500, autoStart:true,
    loop:true})
  },[])
  return (
    <div className="intro-comp" id="home">
      <div className="intro-left">
        <div>Hy! I Am</div>
        <div>Vaishnavi.R</div>
        <div ref={textRef}></div> <br/><br/>
        <a href="#contact"><button className="button hire-me-button">Hire Me</button></a>
      </div>
      <div className="intro-right">
        <div className="imgContainer">
          {/* <img src="https://st.depositphotos.com/1006152/3315/i/950/depositphotos_33151873-stock-photo-young-attractive-businesswoman-with-folders.jpg" alt="" /> */}
          <img src="assets/vaishnew.png" alt="" />
        </div>
      </div>
      
    </div>
  )
}

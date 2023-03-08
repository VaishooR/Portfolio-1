import React from 'react';
import './Topbar.css';

export default function Topbar() {
  return (
    <div className="topbar-comp">
      {/* left nav */}
      <div className="topbar-left">
        <div className="topbar-name">Vaishnavi </div>
        <a href="https://drive.google.com/file/d/1cyDcz_pBaxrEde8BlNK4yKHz8O9BOYhS/view?usp=sharing" target="_blank"><button className="button contact-button">Resume</button></a>
      </div>
      {/* right nav */}
      <div className="topbar-right">
        {/* <ul>
          <li style={{textDecoration:'underline',textDecorationColor:'crimson',textDecorationThickness:'20%',color:'crimson',textUnderlineOffset:'8px'}}>Home</li>
          <li>Projects</li>
          <li>Skills</li>
          <li>Contact</li>
        </ul> */}
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#proj">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button className="button"><a href="#proj" className="port-btn">Portfolio</a></button>
      </div>
    </div>
  )
}


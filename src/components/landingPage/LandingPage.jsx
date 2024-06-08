import "./landingpage.css";

import { useGSAP } from "@gsap/react";
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../navbar/Navbar.jsx";
gsap.registerPlugin(ScrollTrigger)
const LandingPage = () => {

  return (
    <div>
   <Navbar/>

    <div className="landing">
     
     
        <div className="name">
          <div className="span1">Your vision my code</div>
          <div className="span2"> together we </div>
          <div>innovate.</div>
        </div>
        <div className="second-txt">
       <div className="greeting">hello I'M a</div>
      <div className="role">
          <h4>FULL</h4>
          <h4>STACK</h4>
          <h4>WEB</h4>
          <h4>DEVELOPER</h4>
        </div>
        <div className="who">WHO</div>
        </div>
    </div>
    </div>
  );
};

export default LandingPage;

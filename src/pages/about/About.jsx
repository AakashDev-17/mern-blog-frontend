import React from 'react';
import './about.css';
import aboutImg from '../../assets/about.jpg';
import { Link } from 'react-router-dom';

const about = () => {
   return (
      <div className="about">
         <div className="aboutLeft">
            <div className="aboutTitle">ABOUT ME</div>
            <div className="aboutheadline">
               Hi! I am Aakash Dev, an undergraduate from Delhi Technological University. Currently pursuing my Btech in Electronics & Communication Engineering.
            </div>
            <div className="aboutpara">
               I enjoy taking complex problems and turning them into simple and beautiful interface designs. I also love the logic and structure of coding and always strive to write elegant and efficient code, whether it be HTML, CSS or Java coding.

               When I'm not coding, I love to play Video games as well.
               <br />You can find me in below mentioned social media handles.
            </div>
            <div className="aboutSocial">
               <Link className="link" to={{pathname: "https://facebook.com/aakash.dev.129"}} target="_blank"><i className="aboutSocialIcons facebook fab fa-facebook-square"></i></Link>
               <Link className="link" to={{pathname: "https://twitter.com/aakashdev1712"}} target="_blank"><i className="aboutSocialIcons twitter fab fa-twitter-square"></i></Link>
               <Link className="link" to={{pathname: "https://www.instagram.com/aakashdev.1712"}} target="_blank"><i className="aboutSocialIcons insta fab fa-instagram-square"></i></Link>
               <Link className="link" to={{pathname: "https://www.linkedin.com/in/aakashdev1712"}} target="_blank"><i className="aboutSocialIcons linkedin fab fa-linkedin"></i></Link>
            </div>
         </div>
         <div className="aboutRight">
            <img className="aboutimg" src={aboutImg} alt="hello" />
         </div>
      </div>
   )
}

export default about;

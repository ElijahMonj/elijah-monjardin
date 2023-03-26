import React from "react";
import Mail from './images/mail.svg'
import Learn from './images/1.svg'
import Responsive from './images/2.svg'

import HTMLLogo from './icons/frameworks/1.svg'
import CSSLogo from './icons/frameworks/2.svg'
import JSLogo from './icons/frameworks/3.svg'
import ReactLogo from './icons/frameworks/4.svg'
import MongoLogo from './icons/frameworks/5.svg'
import NodeLogo from './icons/frameworks/6.svg'
import ExLogo from './icons/frameworks/7.svg'
import BSLogo from './icons/frameworks/8.svg'
import JavaLogo from './icons/frameworks/9.svg'
import CLogo from './icons/frameworks/10.svg'
const About = () => {
    function AutoShow(){
        setTimeout(function() {
            const H = document.querySelectorAll('.auto-hidden-left');
            H.forEach(h => {
              h.classList.add("auto-active-left");         
            })
          }, 50); 

          setTimeout(function() {
            const H = document.querySelectorAll('.auto-hidden-right');
            H.forEach(h => {
              h.classList.add("auto-active-right");         
            })
          }, 50); 
           
    }
    function showProjects(){
        setTimeout(function() {
            const H = document.querySelectorAll('.auto-reveal');
            H.forEach(h => {
              h.classList.add("active");         
            })
          }, 1500);
    }
    return(
        <div className="container">
        {AutoShow()}
            <section className="container-fluid row justify-content-center py-5 mx-0 my-5 ">
            <div className="col-md-6 auto-hidden-left d-flex flex-column justify-content-evenly my-5">
                
                <h1 className="display-1">
                    I'm Elijah.
                </h1>
                <h5 className="display-5">
                    I'm here to build a website for you.
                </h5>
            </div>
            <div className="col-md-6 d-flex justify-content-center auto-hidden-right py-5">
               
                <img className="img-fluid my-auto" id="homeProfilePic" src="https://i.ibb.co/S7yPgkC/DALL-E-2023-03-19-17-40-11-husky-with-necktie-digital-art.png" 
                style={{height:"auto",width:"20em"}} alt="me"/>

            </div>

            </section>
            <div className="d-flex flex-column gap-5" >
              

              <div className="row d-flex justify-content-evenly m-0">
                  <div className="col-lg-10 col-md-12 reveal">
                    <h5>About Me</h5>

                    <p className="lead">
                    I started learning about how to build simple web pages in elementary school, experimenting here and there as my hobby. 
                    After taking Information Technology in my college, I've also learned how to build applications using C#, Java, and SQL, and explored with some Android and Xamarin development. 
                    It was only in 2022 that I dived deeper into full-stack web development using <a href="https://www.theodinproject.com/" className=""><strong>The Odin Project</strong></a>. 
                    In taking the full stack javascript course on this online platform, I've learned advanced Javascript, ReactJS, MongoDB, Bootstrap, NodeJS, and more. From there, I've been able to build full websites as a full-stack dev.
                    </p>

                  </div>
                  
              </div>
             
              
             
              <div className="row d-flex flex-row-reverse justify-content-evenly m-0 reveal">
                
                  <div className="col-lg-5 col-md-12">
                    <h5></h5>

                    <p className="small text-muted text-uppercase mb-0"></p>
                    <p className="small text-muted mb-2">
                      
                    </p>

                    

                    <p className="lead">
                    One of the most important things I learned through my exploration is that having to learn every programming language is not that important and advantageous, instead, we should focus on one language that we like and will give us a lot of opportunities and focus diving deeper into it. With that knowledge, I've chosen to dive deep into javascript and become a web developer.
                    </p>

                  </div>
                  <div className="col-lg-5 col-md-12 d-flex justify-content-center">
                  <img src={Learn}
                    alt="" className="img-fluid m-auto"
                    style={{objectFit:"cover", height:160,zIndex: 1}}/>
                </div>

              </div>
             
              <div className="row d-flex justify-content-evenly m-0 reveal">
                  <div className="col-lg-5 col-md-12">
                    <h5></h5>

                    <p className="small text-muted text-uppercase mb-0"></p>
                    <p className="small text-muted mb-2">
                      
                    </p>

                   

                    <p className="lead">
                    As a full-stack web developer, I'm here to help you connect your business to the world. I make modern and responsive websites for small to medium businesses that will be versatile enough to work on different types of devices.
                    </p>

                  </div>
                  <div className="col-lg-5 col-md-12 d-flex justify-content-center">
                  <img src={Responsive}
                    alt="" className="img-fluid m-auto"
                    style={{objectFit:"cover", height:160,zIndex: 1}}/>

                  </div>
              </div>
              
            </div>
           
            <div className="container reveal mt-5 ">
              <div className="row text-center">
                <div className="col">
                  <h6 className="lead mb-3">My languages and frameworks</h6>
                </div>
             </div>
             <div class="row row-cols-* justify-content-center">
                <div class="col justify-content-center madeWithLinks">
                    <img src={HTMLLogo} className="frameworkImg"></img>
                    <br></br>
                    <small>HTML</small>
                </div>
                <div class="col justify-content-center madeWithLinks">
                    <img src={CSSLogo} className="frameworkImg"></img>
                    <br></br>
                    <small>CSS</small>
                </div>
                <div class="col justify-content-center madeWithLinks">
                    <img src={JSLogo} className="frameworkImg"></img>
                    <br></br>
                    <small>Javascript</small>
                </div>
                <div class="col justify-content-center madeWithLinks">
                    <img src={ReactLogo} className="frameworkImg"></img>
                    <br></br>
                    <small>ReactJS</small>
                </div>
                <div class="col justify-content-center madeWithLinks">
                    <img src={MongoLogo} className="frameworkImg"></img>
                    <br></br>
                    <small>MongoDB</small>
                </div>
                <div class="col justify-content-center madeWithLinks">
                    <img src={NodeLogo} className="frameworkImg"></img>
                    <br></br>
                    <small>NodeJS</small>
                </div>
                <div class="col justify-content-center madeWithLinks">
                    <img src={ExLogo} className="frameworkImg"></img>
                    <br></br>
                    <small>ExpressJS</small>
                </div>
                <div class="col justify-content-center madeWithLinks">
                    <img src={BSLogo} className="frameworkImg"></img>
                    <br></br>
                    <small>Bootstrap</small>
                </div>
                <div class="col justify-content-center madeWithLinks">
                    <img src={JavaLogo} className="frameworkImg"></img>
                    <br></br>
                    <small>Java</small>
                </div>
                <div class="col justify-content-center madeWithLinks">
                    <img src={CLogo} className="frameworkImg"></img>
                    <br></br>
                    <small>C#</small>
                </div>
              
            </div>

              
        </div>
    </div>
    )

}

export default About
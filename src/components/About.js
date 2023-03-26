import React from "react";
import Mail from './images/mail.svg'
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
            <div className="col-md-6 auto-hidden-left py-5">
                <h3 className="display-3">Hello</h3>
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
            <div className="d-flex flex-column" >
              

              <div className="row d-flex justify-content-evenly m-0">
                  <div className="col-lg-10 col-md-12">
                    <h5>About</h5>

                    <p className="small text-muted text-uppercase mb-0">About Us</p>
                    <p className="small text-muted mb-2">
                      
                    </p>

                   

                    <p className="lead">
                    I started learning about how to build simple web pages in elementary school, experimenting here and there as my hobby. 
                    After taking Information Technology in college, I've also learned how to build applications using C#, Java, and SQL. 
                    It was only in 2022 that I dived deeper into full-stack development using <a href="https://www.theodinproject.com/" className=""><strong>The Odin Project</strong></a>. 
                    In taking the full stack javascript course on this online platform, I've learned advanced Javascript, ReactJS, MongoDB, Bootstrap, NodeJS, and more. From there, I've been able to build full websites as a full-stack dev.
                    </p>

                  </div>
                  
              </div>
             
              <hr className="my-4"/>
             
              <div className="row d-flex flex-row-reverse justify-content-evenly m-0">
                
                  <div className="col-lg-5 col-md-12">
                    <h5>Vision</h5>

                    <p className="small text-muted text-uppercase mb-0">Our Vision</p>
                    <p className="small text-muted mb-2">
                      
                    </p>

                    

                    <p className="lead">
                    One of the most important things I learned through my exploration is that having to learn every programming language is not that important and advantageous, instead, we should focus on one language that we like and will give us a lot of opportunities and focus diving deeper into it. With that knowledge, I've chosen to dive deep into javascript and become a web developer.
                    </p>

                  </div>
                  <div className="col-lg-5 col-md-12 d-flex justify-content-center">
                  <img src={Mail}
                    alt="" className="img-fluid m-auto"
                    style={{objectFit:"cover", height:160,zIndex: 1}}/>
                </div>

              </div>
             <hr/>
              <div className="row d-flex justify-content-evenly m-0">
                  <div className="col-lg-5 col-md-12">
                    <h5>Mission</h5>

                    <p className="small text-muted text-uppercase mb-0">Our Mission</p>
                    <p className="small text-muted mb-2">
                      
                    </p>

                   

                    <p className="lead">
                    As a full-stack web developer, I'm here to help you connect your business to the world. I make modern and responsive websites for small to medium businesses that will be versatile enough to work on different types of devices.
                    </p>

                  </div>
                  <div className="col-lg-5 col-md-12 d-flex justify-content-center">
                  <img src={Mail}
                    alt="" className="img-fluid m-auto"
                    style={{objectFit:"cover", height:160,zIndex: 1}}/>

                  </div>
              </div>
              
            </div>
            <hr/>
            <div className="container madeWithLinks">
              <div className="row text-center">
                <div className="col">
                  <h6>My languages and frameworks</h6>
                </div>
             </div>
             <div class="row row-cols-* justify-content-center">
                <div class="col justify-content-center">
                    <img src={Mail} className="frameworkImg"></img>
                    <br></br>
                    <small>HTML</small>
                </div>
                <div class="col justify-content-center">
                    <img src={Mail} className="frameworkImg"></img>
                    <br></br>
                    <small>CSS</small>
                </div>
                <div class="col justify-content-center">
                    <img src={Mail} className="frameworkImg"></img>
                    <br></br>
                    <small>Javascript</small>
                </div>
                <div class="col justify-content-center">
                    <img src={Mail} className="frameworkImg"></img>
                    <br></br>
                    <small>ReactJS</small>
                </div>
                <div class="col justify-content-center">
                    <img src={Mail} className="frameworkImg"></img>
                    <br></br>
                    <small>NoSQL</small>
                </div>
                <div class="col justify-content-center">
                    <img src={Mail} className="frameworkImg"></img>
                    <br></br>
                    <small>NodeJS</small>
                </div>
                <div class="col justify-content-center">
                    <img src={Mail} className="frameworkImg"></img>
                    <br></br>
                    <small>ExpressJS</small>
                </div>
                <div class="col justify-content-center">
                    <img src={Mail} className="frameworkImg"></img>
                    <br></br>
                    <small>Bootstrap</small>
                </div>
                <div class="col justify-content-center">
                    <img src={Mail} className="frameworkImg"></img>
                    <br></br>
                    <small>Java</small>
                </div>
                <div class="col justify-content-center">
                    <img src={Mail} className="frameworkImg"></img>
                    <br></br>
                    <small>C#</small>
                </div>
              
            </div>

              
        </div>
    </div>
    )

}

export default About
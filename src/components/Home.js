import React from "react";
import {Link, NavLink} from 'react-router-dom'

const Home = () => {
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
        <div className="container p-0">
        {AutoShow()}
            <section className="container-fluid row justify-content-center py-5 mx-0 " style={{margin:90}}>
            <div className="col-md-6 auto-hidden-left py-5 d-flex flex-column justify-content-center my-5">
                <h4 className="display-5">
                    Welcome!
                </h4>
                <h1 className="display-4">
                   <strong>I'm Elijah Monjardin.</strong> 
                </h1>
                <h4 className="display-6">
                    I create modern responsive websites.
                    
                </h4>
                <div> <Link to="/contact" type="button"  class="btn btn-dark btn-rounded">Hire me</Link>
                </div>
               
            
            </div>
            <div className="col-md-6 d-flex justify-content-center auto-hidden-right py-5">
               
                <img className="img-fluid my-auto" id="homeProfilePic" src="https://i.ibb.co/S7yPgkC/DALL-E-2023-03-19-17-40-11-husky-with-necktie-digital-art.png" 
                style={{height:"auto",width:"20em"}} alt="me"/>

            </div>

            </section>
            <section className="auto-reveal" style={{display:"none"}}>
            {showProjects()}
                <div>
                    <h3 className="display-5">Featured Projects</h3>
                    <div className="d-flex justify-content-center">

                            <div className="col-md-4 m-2">
                                
                                <div class="bg-image hover-overlay mx-auto my-5 rounded" style={{maxWidth: "20rem", cursor:'pointer'}}>
                                <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/053.webp" className="w-100 rounded" />
                                <div class="mask text-light d-flex justify-content-center flex-column text-center" style={{backgroundColor: "rgba(0, 0, 0, 0.5)"}}>
                                    <h4>Think & Share</h4>
                                    <p class="m-0">paragraph</p>
                                </div>
                                </div>
                                
                            </div>

                            <div className="col-md-4 m-2">
                                <div class="bg-image hover-overlay mx-auto my-5 rounded" style={{maxWidth: "20rem",cursor:'pointer'}}>
                                    <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/053.webp" className="w-100 rounded" />
                                    <div class="mask text-light d-flex justify-content-center flex-column text-center" style={{backgroundColor: "rgba(0, 0, 0, 0.5)"}}>
                                        <h4>Think & Share</h4>
                                        <p class="m-0">paragraph</p>
                                    </div>
                                </div>
                            </div>
                    </div>
                       
                </div>
                
            </section>
            
        </div>
    )

}

export default Home
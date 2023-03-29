import React from "react";
import blogSite from './images/blog-site.png';
import dashBoard from './images/dashboard.png';
import library from './images/library.png';
import memoryCard from './images/memory-card.png';
import shoppingCart from './images/shopping-cart.png';
import tictac from './images/tictac.png';
import weather from './images/weather.png';
import ThinkAndShare from './images/thinkandshare.png'
import Etch from './images/etch.png'
import Todo from './images/todo.png'

import mongoLogo from './icons/1.svg';
import nodeLogo from './icons/2.svg';
import reactLogo from './icons/3.svg';
import expressLogo from './icons/4.svg';
import TSResponsive from './images/responsive.png'

const Portfolio = () => {
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
    function showTitleMongo(e){
        document.getElementById('responsiveLogoTitle').innerHTML="MongoDB"
        document.getElementById('responsiveLogoTitle').style.color="#00684A"
    }
    function showTitleExpress(e){
        document.getElementById('responsiveLogoTitle').innerHTML="ExpressJS"
        document.getElementById('responsiveLogoTitle').style.color="black"
    }
    function showTitleReact(e){
        document.getElementById('responsiveLogoTitle').innerHTML="React"
        document.getElementById('responsiveLogoTitle').style.color="#61DBFB"
    }
    function showTitleNode(e){
        document.getElementById('responsiveLogoTitle').innerHTML="NodeJS"
        document.getElementById('responsiveLogoTitle').style.color="#66cc33"
    }
    function showTitleRemove(e){
        document.getElementById('responsiveLogoTitle').innerHTML=""
    }
    
    return(
        <div className="container">
            <section>
            {AutoShow()}
            {showProjects()}
            <section className="container-fluid row justify-content-center py-5 mx-0 ">
            <div className="col-12 auto-hidden-left py-5">
                <h5 className="display-6">Hi, I'm</h5>
                <h1 className="display-1">
                    <strong>Elijah Monjardin</strong>
                </h1>
                <h4 className="display-5">
                    I'm a web developer.
                </h4>
                <p className="lead">And these are my projects</p>
            </div>


            <div className="col-12 d-flex justify-content-center auto-hidden-right py-5">
               
            <div id="carouselExampleControls" className="carousel slide carousel-fade carousel-dark" data-mdb-ride="carousel">
                <div className="carousel-inner rounded-5 shadow-4-strong">
                    <div className="carousel-item active">
                    <img src={ThinkAndShare} className="d-block w-100" alt="Think and Share"/>
                    </div>
                    <div className="carousel-item ative">
                    <img src={blogSite} className="d-block w-100" alt="GizmoThoughts"/>
                    </div>
                    <div className="carousel-item ">
                    <img src={tictac} className="d-block w-100" alt="Love is...Tic-Tac-Toe!?"/>
                    </div>
                    <div className="carousel-item ">
                    <img src={weather} className="d-block w-100" alt="Weather Today"/>
                    </div>
                    <div className="carousel-item ">
                    <img src={memoryCard} className="d-block w-100" alt="Memory Game"/>
                    </div>
                    <div className="carousel-item ">
                    <img src={Etch} className="d-block w-100" alt="Etch-A-Sketch"/>
                    </div>
                   
                </div>
                <button className="carousel-control-prev" type="button" data-mdb-target="#carouselExampleControls" data-mdb-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-mdb-target="#carouselExampleControls" data-mdb-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
            </div>
            
            </section>
            <section className="row auto-reveal">
            <div className="col-md-12">
                <h5 className="lead">A MERN stack web developer.</h5>
                
                <div className="d-flex justify-content-center gap-3">
                    <div className="col-1 showLogoTitle" >
                        <a href="https://www.mongodb.com/">
                        <img src={mongoLogo} alt="html" onMouseEnter={showTitleMongo} 
                        onMouseLeave={showTitleRemove} className="img-fluid h-75"></img></a>
                        
                    </div>
                    <div className="col-1 showLogoTitle">
                    <a href="https://expressjs.com/">
                        <img src={expressLogo} alt="html" onMouseEnter={showTitleExpress} 
                        onMouseLeave={showTitleRemove} className="img-fluid h-75"></img></a>
                        
                    </div>
                    <div className="col-1 showLogoTitle">
                    <a href="https://react.dev/">
                        <img src={reactLogo} alt="html" onMouseEnter={showTitleReact} 
                        onMouseLeave={showTitleRemove} className="img-fluid h-75"></img></a>
                         
                    </div>
                    <div className="col-1 showLogoTitle">
                    <a href="https://nodejs.org/en">
                        <img src={nodeLogo} alt="html" onMouseEnter={showTitleNode} 
                        onMouseLeave={showTitleRemove} className="img-fluid h-75"></img></a>
                        
                    </div>
                    
                </div>
                <h5 id="responsiveLogoTitle" style={{minHeight:24}}></h5>
            </div>
            </section>
            </section>

           
           
            <section className="">
                <div className="reveal">
                    <h6 className="display-6 mt-5">All Projects</h6>
                    
                </div>
                <div className="card bg-light my-5 reveal">
            <div className="card-header lead">Featured</div>
            <img src={TSResponsive} className="card-img-top p-3" alt="think and share" />
            <div className="card-body ">
                <h5 className="card-title ">Think & Share</h5>
                <p className="card-text">
                A fully functional social media website. Features a responsive user interface that fits different devices. Developed using MERN stack and <a href="https://getbootstrap.com/" className="">Bootstrap</a>.
                </p>
                <div className="card-footer">
                        <div className="d-grid gap-2 d-md-block">
                            <a className="btn btn-dark m-1" type="button" href="https://think-and-share-production.up.railway.app/">
                            <i className="fas fa-globe me-1"></i>
                            Live Preview</a>
                            <a className="btn btn-dark m-1" type="button" href="https://github.com/ElijahMonj/think-and-share">
                            <i className="fas fa-code me-1"></i>
                            Source Code</a>
                            </div>
                        </div>
            </div>
            </div>
                <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
                    
                    <div className="col pt-5 reveal">
                        <div className="card h-100">
                            
                        <img src={blogSite} className="card-img-top"
                            alt="Skyscrapers" />
                        <div className="card-body">
                            <h5 className="card-title">GizmoThoughts</h5>
                            <p className="card-text">
                            A simple blog website project. Build with NodeJS, Express, EJS, and MongoDB.
                            </p>
                        </div>
                        <div className="card-footer">
                        <div className="d-grid gap-2 d-md-block">
                            <a className="btn btn-dark m-1" type="button" href="https://blog-api-production-a5c0.up.railway.app/">
                            <i className="fas fa-globe me-1"></i>
                            Live Preview</a>
                            <a className="btn btn-dark m-1" type="button" href="https://github.com/ElijahMonj/Blog-Site">
                            <i className="fas fa-code me-1"></i>
                            Source Code</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col pt-5 reveal">
                        <div className="card h-100">
                           
                        <img src={tictac} className="card-img-top"
                            alt="Skyscrapers" />
                        <div className="card-body">
                            <h5 className="card-title">Love is...Tic-Tac-Toe!?</h5>
                            <p className="card-text">
                            A Tic-Tac-Toe web game with a theme of Kaguya-sama: Love Is War!
                            </p>
                        </div>
                        <div className="card-footer">
                        <div className="d-grid gap-2 d-md-block">
                            <a className="btn btn-dark m-1" type="button" href="https://elijahmonj.github.io/Tic-Tac-Toe/">
                            <i className="fas fa-globe me-1"></i>
                            Live Preview</a>
                            <a className="btn btn-dark m-1" type="button" href="https://github.com/ElijahMonj/Tic-Tac-Toe">
                            <i className="fas fa-code me-1"></i>
                            Source Code</a>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="col pt-5 reveal">
                        <div className="card h-100">
                            
                        <img src={weather} className="card-img-top"
                            alt="Skyscrapers" />
                        <div className="card-body">
                            <h5 className="card-title">Weather Today</h5>
                            <p className="card-text">
                            A weather webapp powered by <a href="https://openweathermap.org/">openweathermap.org</a>'s API.
                            </p>
                        </div>
                        <div className="card-footer">
                        <div className="d-grid gap-2 d-md-block">
                            <a className="btn btn-dark m-1" type="button" href="https://elijahmonj.github.io/Weather-App/">
                            <i className="fas fa-globe me-1"></i>
                            Live Preview</a>
                            <a className="btn btn-dark m-1" type="button" href="https://github.com/ElijahMonj/Weather-App">
                            <i className="fas fa-code me-1"></i>
                            Source Code</a>
                            </div>
                        </div>
                        </div>
                    </div>
                   
                    <div className="col pt-5 reveal">
                        <div className="card h-100">
                            
                        <img src={memoryCard} className="card-img-top"
                            alt="Skyscrapers" />
                        <div className="card-body">
                            <h5 className="card-title">Memory Game</h5>
                            <p className="card-text">
                            A memory game where you should not click a country's flag twice. Be careful, some countries has almost identical flags! Made with ReactJS.               
                            </p>
                        </div>
                        <div className="card-footer">
                        <div className="d-grid gap-2 d-md-block">
                            <a className="btn btn-dark m-1" type="button" href="https://elijahmonj.github.io/memory-card/">
                            <i className="fas fa-globe me-1"></i>
                            Live Preview</a>
                            <a className="btn btn-dark m-1" type="button" href="https://github.com/ElijahMonj/memory-card">
                            <i className="fas fa-code me-1"></i>
                            Source Code</a>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="col pt-5 reveal">
                        <div className="card h-100">
                            
                        <img src={Etch} className="card-img-top"
                            alt="Skyscrapers" />
                        <div className="card-body">
                            <h5 className="card-title">Etch-A-Sketch</h5>
                            <p className="card-text">
                            A webapp where you could do some silly simple pixel arts.
                            </p>
                        </div>
                        <div className="card-footer">
                        <div className="d-grid gap-2 d-md-block">
                            <a className="btn btn-dark m-1" type="button" href="https://elijahmonj.github.io/ETCH-A-SKETCH/">
                            <i className="fas fa-globe me-1"></i>
                            Live Preview</a>
                            <a className="btn btn-dark m-1" type="button" href="https://github.com/ElijahMonj/ETCH-A-SKETCH">
                            <i className="fas fa-code me-1"></i>
                            Source Code</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    
                   

  
  
                </div>
            </section>
            <section className="">
                <div className="reveal">
                    <h6 className="mt-5 lead">Older Projects</h6>
                </div>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    
                    <div className="col pt-5 reveal">
                        <div className="card h-100">
                            
                        <img src={library} className="card-img-top"
                            alt="Skyscrapers" />
                        <div className="card-body">
                            <h5 className="card-title">My Library</h5>
                            <p className="card-text">
                            A simple personal library webapp project.
                            </p>
                        </div>
                        <div className="card-footer">
                        <div className="d-grid gap-2 d-md-block">
                            <a className="btn btn-dark m-1" type="button" href="https://elijahmonj.github.io/Library/">
                            <i className="fas fa-globe me-1"></i>
                            Live Preview</a>
                            <a className="btn btn-dark m-1" type="button" href="https://github.com/ElijahMonj/Library">
                            <i className="fas fa-code me-1"></i>
                            Source Code</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    

                    
                    <div className="col pt-5 reveal">
                        <div className="card h-100">
                            
                        <img src={Todo} className="card-img-top"
                            alt="Skyscrapers" />
                        <div className="card-body">
                            <h5 className="card-title">TODOtodo</h5>
                            <p className="card-text">
                            A personal to-do list webapp.
                            </p>
                        </div>
                        <div className="card-footer">
                        <div className="d-grid gap-2 d-md-block">
                            <a className="btn btn-dark m-1" type="button" href="https://elijahmonj.github.io/Todo-List/">
                            <i className="fas fa-globe me-1"></i>
                            Live Preview</a>
                            <a className="btn btn-dark m-1" type="button" href="https://github.com/ElijahMonj/Todo-List">
                            <i className="fas fa-code me-1"></i>
                            Source Code</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col pt-5 reveal">
                        <div className="card h-100">
                            
                        <img src={shoppingCart} className="card-img-top"
                            alt="Skyscrapers" />
                        <div className="card-body">
                            <h5 className="card-title">Vestir</h5>
                            <p className="card-text">
                            A simple shopping website. Made with ReactJS.
                            </p>
                        </div>
                        <div className="card-footer">
                        <div className="d-grid gap-2 d-md-block">
                            <a className="btn btn-dark m-1" type="button" href="https://elijahmonj.github.io/shopping-cart/">
                            <i className="fas fa-globe me-1"></i>
                            Live Preview</a>
                            <a className="btn btn-dark m-1" type="button" href="https://github.com/ElijahMonj/shopping-cart">
                            <i className="fas fa-code me-1"></i>
                            Source Code</a>
                            </div>
                        </div>
                        </div>
                    </div>

  
  
                </div>
            </section>
        </div>
    )

}

export default Portfolio
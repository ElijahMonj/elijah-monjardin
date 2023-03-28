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
               
            <div id="carouselExampleControls" class="carousel slide carousel-fade carousel-dark" data-mdb-ride="carousel">
                <div class="carousel-inner rounded-5 shadow-4-strong">
                    <div class="carousel-item active">
                    <img src={ThinkAndShare} class="d-block w-100" alt="Think and Share"/>
                    </div>
                    <div class="carousel-item ative">
                    <img src={blogSite} class="d-block w-100" alt="GizmoThoughts"/>
                    </div>
                    <div class="carousel-item ">
                    <img src={tictac} class="d-block w-100" alt="Love is...Tic-Tac-Toe!?"/>
                    </div>
                    <div class="carousel-item ">
                    <img src={weather} class="d-block w-100" alt="Weather Today"/>
                    </div>
                    <div class="carousel-item ">
                    <img src={memoryCard} class="d-block w-100" alt="Memory Game"/>
                    </div>
                    <div class="carousel-item ">
                    <img src={Etch} class="d-block w-100" alt="Etch-A-Sketch"/>
                    </div>
                   
                </div>
                <button class="carousel-control-prev" type="button" data-mdb-target="#carouselExampleControls" data-mdb-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-mdb-target="#carouselExampleControls" data-mdb-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                </div>
            </div>
            
            </section>
            <section className="row auto-reveal">
            <div className="col-md-12">
                <h5 className="lead">A MERN stack web developer.</h5>
                
                <div class="d-flex justify-content-center gap-3">
                    <div class="col-1 showLogoTitle" >
                        <a href="https://www.mongodb.com/">
                        <img src={mongoLogo} alt="html" onMouseEnter={showTitleMongo} 
                        onMouseLeave={showTitleRemove} className="img-fluid h-75"></img></a>
                        
                    </div>
                    <div class="col-1 showLogoTitle">
                    <a href="https://expressjs.com/">
                        <img src={expressLogo} alt="html" onMouseEnter={showTitleExpress} 
                        onMouseLeave={showTitleRemove} className="img-fluid h-75"></img></a>
                        
                    </div>
                    <div class="col-1 showLogoTitle">
                    <a href="https://react.dev/">
                        <img src={reactLogo} alt="html" onMouseEnter={showTitleReact} 
                        onMouseLeave={showTitleRemove} className="img-fluid h-75"></img></a>
                         
                    </div>
                    <div class="col-1 showLogoTitle">
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
                <div class="card bg-light my-5 reveal">
            <div class="card-header lead">Featured</div>
            <img src={TSResponsive} class="card-img-top p-3" alt="think and share" />
            <div class="card-body ">
                <h5 class="card-title ">Think & Share</h5>
                <p class="card-text">
                A fully functional social media website. Features a responsive user interface that fits different devices. Developed using MERN stack.
                </p>
                <div class="card-footer">
                        <div class="d-grid gap-2 d-md-block">
                            <a class="btn btn-dark m-1" type="button" href="https://think-and-share-production.up.railway.app/">
                            <i class="fas fa-globe me-1"></i>
                            Live Preview</a>
                            <a class="btn btn-dark m-1" type="button" href="https://github.com/ElijahMonj/think-and-share">
                            <i class="fas fa-code me-1"></i>
                            Source Code</a>
                            </div>
                        </div>
            </div>
            </div>
                <div class="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
                    
                    <div class="col pt-5 reveal">
                        <div class="card h-100">
                            
                        <img src={blogSite} class="card-img-top"
                            alt="Skyscrapers" />
                        <div class="card-body">
                            <h5 class="card-title">GizmoThoughts</h5>
                            <p class="card-text">
                            A simple blog website project. Build with NodeJS, Express, EJS, and MongoDB.
                            </p>
                        </div>
                        <div class="card-footer">
                        <div class="d-grid gap-2 d-md-block">
                            <a class="btn btn-dark m-1" type="button" href="https://blog-api-production-a5c0.up.railway.app/">
                            <i class="fas fa-globe me-1"></i>
                            Live Preview</a>
                            <a class="btn btn-dark m-1" type="button" href="https://github.com/ElijahMonj/Blog-Site">
                            <i class="fas fa-code me-1"></i>
                            Source Code</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="col pt-5 reveal">
                        <div class="card h-100">
                           
                        <img src={tictac} class="card-img-top"
                            alt="Skyscrapers" />
                        <div class="card-body">
                            <h5 class="card-title">Love is...Tic-Tac-Toe!?</h5>
                            <p class="card-text">
                            A Tic-Tac-Toe web game with a theme of Kaguya-sama: Love Is War!
                            </p>
                        </div>
                        <div class="card-footer">
                        <div class="d-grid gap-2 d-md-block">
                            <a class="btn btn-dark m-1" type="button" href="https://elijahmonj.github.io/Tic-Tac-Toe/">
                            <i class="fas fa-globe me-1"></i>
                            Live Preview</a>
                            <a class="btn btn-dark m-1" type="button" href="https://github.com/ElijahMonj/Tic-Tac-Toe">
                            <i class="fas fa-code me-1"></i>
                            Source Code</a>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div class="col pt-5 reveal">
                        <div class="card h-100">
                            
                        <img src={weather} class="card-img-top"
                            alt="Skyscrapers" />
                        <div class="card-body">
                            <h5 class="card-title">Weather Today</h5>
                            <p class="card-text">
                            A weather webapp powered by <a href="https://openweathermap.org/">openweathermap.org</a>'s API.
                            </p>
                        </div>
                        <div class="card-footer">
                        <div class="d-grid gap-2 d-md-block">
                            <a class="btn btn-dark m-1" type="button" href="https://elijahmonj.github.io/Weather-App/">
                            <i class="fas fa-globe me-1"></i>
                            Live Preview</a>
                            <a class="btn btn-dark m-1" type="button" href="https://github.com/ElijahMonj/Weather-App">
                            <i class="fas fa-code me-1"></i>
                            Source Code</a>
                            </div>
                        </div>
                        </div>
                    </div>
                   
                    <div class="col pt-5 reveal">
                        <div class="card h-100">
                            
                        <img src={memoryCard} class="card-img-top"
                            alt="Skyscrapers" />
                        <div class="card-body">
                            <h5 class="card-title">Memory Game</h5>
                            <p class="card-text">
                            A memory game where you should not click a country's flag twice. Be careful, some countries has almost identical flags! Made with ReactJS.               
                            </p>
                        </div>
                        <div class="card-footer">
                        <div class="d-grid gap-2 d-md-block">
                            <a class="btn btn-dark m-1" type="button" href="https://elijahmonj.github.io/memory-card/">
                            <i class="fas fa-globe me-1"></i>
                            Live Preview</a>
                            <a class="btn btn-dark m-1" type="button" href="https://github.com/ElijahMonj/memory-card">
                            <i class="fas fa-code me-1"></i>
                            Source Code</a>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div class="col pt-5 reveal">
                        <div class="card h-100">
                            
                        <img src={Etch} class="card-img-top"
                            alt="Skyscrapers" />
                        <div class="card-body">
                            <h5 class="card-title">Etch-A-Sketch</h5>
                            <p class="card-text">
                            A webapp where you could do some silly simple pixel arts.
                            </p>
                        </div>
                        <div class="card-footer">
                        <div class="d-grid gap-2 d-md-block">
                            <a class="btn btn-dark m-1" type="button" href="https://elijahmonj.github.io/ETCH-A-SKETCH/">
                            <i class="fas fa-globe me-1"></i>
                            Live Preview</a>
                            <a class="btn btn-dark m-1" type="button" href="https://github.com/ElijahMonj/ETCH-A-SKETCH">
                            <i class="fas fa-code me-1"></i>
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
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    
                    <div class="col pt-5 reveal">
                        <div class="card h-100">
                            
                        <img src={library} class="card-img-top"
                            alt="Skyscrapers" />
                        <div class="card-body">
                            <h5 class="card-title">My Library</h5>
                            <p class="card-text">
                            A simple personal library webapp project.
                            </p>
                        </div>
                        <div class="card-footer">
                        <div class="d-grid gap-2 d-md-block">
                            <a class="btn btn-dark m-1" type="button" href="https://elijahmonj.github.io/Library/">
                            <i class="fas fa-globe me-1"></i>
                            Live Preview</a>
                            <a class="btn btn-dark m-1" type="button" href="https://github.com/ElijahMonj/Library">
                            <i class="fas fa-code me-1"></i>
                            Source Code</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    

                    
                    <div class="col pt-5 reveal">
                        <div class="card h-100">
                            
                        <img src={Todo} class="card-img-top"
                            alt="Skyscrapers" />
                        <div class="card-body">
                            <h5 class="card-title">TODOtodo</h5>
                            <p class="card-text">
                            A personal to-do list webapp.
                            </p>
                        </div>
                        <div class="card-footer">
                        <div class="d-grid gap-2 d-md-block">
                            <a class="btn btn-dark m-1" type="button" href="https://elijahmonj.github.io/Todo-List/">
                            <i class="fas fa-globe me-1"></i>
                            Live Preview</a>
                            <a class="btn btn-dark m-1" type="button" href="https://github.com/ElijahMonj/Todo-List">
                            <i class="fas fa-code me-1"></i>
                            Source Code</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="col pt-5 reveal">
                        <div class="card h-100">
                            
                        <img src={shoppingCart} class="card-img-top"
                            alt="Skyscrapers" />
                        <div class="card-body">
                            <h5 class="card-title">Vestir</h5>
                            <p class="card-text">
                            A simple shopping website. Made with ReactJS.
                            </p>
                        </div>
                        <div class="card-footer">
                        <div class="d-grid gap-2 d-md-block">
                            <a class="btn btn-dark m-1" type="button" href="https://elijahmonj.github.io/shopping-cart/">
                            <i class="fas fa-globe me-1"></i>
                            Live Preview</a>
                            <a class="btn btn-dark m-1" type="button" href="https://github.com/ElijahMonj/shopping-cart">
                            <i class="fas fa-code me-1"></i>
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
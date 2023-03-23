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
            <section className="container-fluid bg-light row justify-content-center py-5 mx-0 my-5 ">
            <div className="col-md-6 auto-hidden-left py-5">
                <h5 className="display-6">Hi, I'm</h5>
                <h1 className="display-1">
                    <strong>Elijah Monjardin</strong>
                </h1>
                <h4 className="display-5">
                    I'm a web developer.
                </h4>
                <p>Lorem ipsum longer</p>
            </div>
            <div className="col-md-6 d-flex justify-content-center auto-hidden-right py-5">
               
                <img className="img-fluid my-auto" id="homeProfilePic" src="https://i.ibb.co/S7yPgkC/DALL-E-2023-03-19-17-40-11-husky-with-necktie-digital-art.png" 
                style={{height:"auto",width:"20em"}} alt="me"/>

            </div>
            
            </section>
            <section className="row auto-reveal">
            <div className="col-md-12">
                <h5>magaling ako sa mern haha</h5>
                
                <div class="d-flex justify-content-center gap-3">
                    <div class="col-1 showLogoTitle" >
                        <img src={mongoLogo} alt="html" onMouseEnter={showTitleMongo} 
                        onMouseLeave={showTitleRemove} className="img-fluid h-75"></img>
                    </div>
                    <div class="col-1 showLogoTitle">
                        <img src={expressLogo} alt="html" onMouseEnter={showTitleExpress} 
                        onMouseLeave={showTitleRemove} className="img-fluid h-75"></img>
                        
                    </div>
                    <div class="col-1 showLogoTitle">
                        <img src={reactLogo} alt="html" onMouseEnter={showTitleReact} 
                        onMouseLeave={showTitleRemove} className="img-fluid h-75"></img>
                         
                    </div>
                    <div class="col-1 showLogoTitle">
                        <img src={nodeLogo} alt="html" onMouseEnter={showTitleNode} 
                        onMouseLeave={showTitleRemove} className="img-fluid h-75"></img>
                        
                    </div>
                    
                </div>
                <h5 id="responsiveLogoTitle" style={{minHeight:24}}></h5>
            </div>
            </section>
            </section>
            <section className="reveal">
            <div>
                <h6 className="display-6 my-5">Featured Projects</h6>
            </div>
            <div id="carouselMaterialStyle" className="carousel slide carousel-fade" data-mdb-ride="carousel">
                
                <div className="carousel-indicators">
                    <button type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide-to="0" className="active" aria-current="true"
                    aria-label="Slide 1"></button>
                    <button type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide-to="2" aria-label="Slide 3"></button>
                </div>

               
                <div className="carousel-inner rounded-5 shadow-4-strong">
                   
                    <div className="carousel-item active">
                    <img src={ThinkAndShare} className="d-block w-100"
                        alt="Sunset Over the City" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </div>
                    </div>

                    
                    <div className="carousel-item">
                    <img src={blogSite} className="d-block w-100"
                        alt="Canyon at Nigh" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    </div>

                   
                    <div className="carousel-item">
                    <img src={tictac} className="d-block w-100"
                        alt="Cliff Above a Stormy Sea" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </div>
                    </div>
                </div>
              
                <button className="carousel-control-prev" type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
            </section>
            <section className="">
                <div className="reveal">
                    <h6 className="display-6 mt-5">All Projects</h6>
                </div>
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col pt-5 reveal">
                        <div class="card h-100">
                            <div class="card-header">
                            <h5 class="m-0">Featured</h5>
                            </div>
                        <img src={ThinkAndShare} class="card-img-top"
                            alt="Skyscrapers" />
                        <div class="card-body">
                            <h5 class="card-title">Think & Share</h5>
                            <p class="card-text">
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                            </p>
                        </div>
                        <div class="card-footer">
                        <div class="d-grid gap-2 d-md-block">
                            <a class="btn btn-primary m-1" type="button" href="https://think-and-share-production.up.railway.app/">
                            <i class="fas fa-globe me-1"></i>
                            Live Preview</a>
                            <a class="btn btn-primary m-1" type="button" href="https://github.com/ElijahMonj/think-and-share">
                            <i class="fas fa-code me-1"></i>
                            Source Code</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="col pt-5 reveal">
                        <div class="card h-100">
                            <div class="card-header">
                            <h5 class="m-0">Featured</h5>
                            </div>
                        <img src={blogSite} class="card-img-top"
                            alt="Skyscrapers" />
                        <div class="card-body">
                            <h5 class="card-title">GizmoThoughts</h5>
                            <p class="card-text">
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                            </p>
                        </div>
                        <div class="card-footer">
                        <div class="d-grid gap-2 d-md-block">
                            <a class="btn btn-primary m-1" type="button" href="https://blog-api-production-a5c0.up.railway.app/">
                            <i class="fas fa-globe me-1"></i>
                            Live Preview</a>
                            <a class="btn btn-primary m-1" type="button" href="https://github.com/ElijahMonj/Blog-Site">
                            <i class="fas fa-code me-1"></i>
                            Source Code</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="col pt-5 reveal">
                        <div class="card h-100">
                            <div class="card-header">
                            <h5 class="m-0">Featured</h5>
                            </div>
                        <img src={tictac} class="card-img-top"
                            alt="Skyscrapers" />
                        <div class="card-body">
                            <h5 class="card-title">Love is... Tic-Tac-Toe!?</h5>
                            <p class="card-text">
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                            </p>
                        </div>
                        <div class="card-footer">
                        <div class="d-grid gap-2 d-md-block">
                            <a class="btn btn-primary m-1" type="button" href="https://elijahmonj.github.io/Tic-Tac-Toe/">
                            <i class="fas fa-globe me-1"></i>
                            Live Preview</a>
                            <a class="btn btn-primary m-1" type="button" href="https://github.com/ElijahMonj/Tic-Tac-Toe">
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
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                            </p>
                        </div>
                        <div class="card-footer">
                        <div class="d-grid gap-2 d-md-block">
                            <a class="btn btn-primary m-1" type="button" href="https://elijahmonj.github.io/Weather-App/">
                            <i class="fas fa-globe me-1"></i>
                            Live Preview</a>
                            <a class="btn btn-primary m-1" type="button" href="https://github.com/ElijahMonj/Weather-App">
                            <i class="fas fa-code me-1"></i>
                            Source Code</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="col pt-5 reveal">
                        <div class="card h-100">
                            
                        <img src={library} class="card-img-top"
                            alt="Skyscrapers" />
                        <div class="card-body">
                            <h5 class="card-title">My Library</h5>
                            <p class="card-text">
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                            </p>
                        </div>
                        <div class="card-footer">
                        <div class="d-grid gap-2 d-md-block">
                            <a class="btn btn-primary m-1" type="button" href="https://elijahmonj.github.io/Library/">
                            <i class="fas fa-globe me-1"></i>
                            Live Preview</a>
                            <a class="btn btn-primary m-1" type="button" href="https://github.com/ElijahMonj/Library">
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
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                            </p>
                        </div>
                        <div class="card-footer">
                        <div class="d-grid gap-2 d-md-block">
                            <a class="btn btn-primary m-1" type="button" href="https://elijahmonj.github.io/memory-card/">
                            <i class="fas fa-globe me-1"></i>
                            Live Preview</a>
                            <a class="btn btn-primary m-1" type="button" href="https://github.com/ElijahMonj/memory-card">
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
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                            </p>
                        </div>
                        <div class="card-footer">
                        <div class="d-grid gap-2 d-md-block">
                            <a class="btn btn-primary m-1" type="button" href="https://elijahmonj.github.io/ETCH-A-SKETCH/">
                            <i class="fas fa-globe me-1"></i>
                            Live Preview</a>
                            <a class="btn btn-primary m-1" type="button" href="https://github.com/ElijahMonj/ETCH-A-SKETCH">
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
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                            </p>
                        </div>
                        <div class="card-footer">
                        <div class="d-grid gap-2 d-md-block">
                            <a class="btn btn-primary m-1" type="button" href="https://elijahmonj.github.io/Todo-List/">
                            <i class="fas fa-globe me-1"></i>
                            Live Preview</a>
                            <a class="btn btn-primary m-1" type="button" href="https://github.com/ElijahMonj/Todo-List">
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
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                            </p>
                        </div>
                        <div class="card-footer">
                        <div class="d-grid gap-2 d-md-block">
                            <a class="btn btn-primary m-1" type="button" href="https://elijahmonj.github.io/shopping-cart/">
                            <i class="fas fa-globe me-1"></i>
                            Live Preview</a>
                            <a class="btn btn-primary m-1" type="button" href="https://github.com/ElijahMonj/shopping-cart">
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
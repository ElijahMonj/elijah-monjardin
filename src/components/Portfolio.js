import React from "react";
import blogSite from './images/blog-site.png';
import dashBoard from './images/dashboard.png';
import library from './images/library.png';
import memoryCard from './images/memory-card.png';
import shoppingCart from './images/shopping-cart.png';
import tictac from './images/tictac.png';
import weather from './images/weather.png';

import htmlIcon from './icons/html.png';

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
    
    return(
        <div className="container">
            <section>
            {AutoShow()}
            <section className="container-fluid bg-light row justify-content-center py-5 mx-0 my-5 ">
            <div className="col-md-6 auto-hidden-left py-5">
                <h1 className="display-1">
                    Hi, I'm Elijah Monjardin.
                </h1>
                <h4 className="display-4">
                    I create modern responsive websites.
                </h4>
            </div>
            <div className="col-md-6 d-flex justify-content-center auto-hidden-right py-5">
               
                <img className="img-fluid my-auto" id="homeProfilePic" src="https://i.ibb.co/S7yPgkC/DALL-E-2023-03-19-17-40-11-husky-with-necktie-digital-art.png" 
                style={{height:"auto",width:"20em"}} alt="me"/>

            </div>
            <div className="col-md-12">
            <div class="row justify-content-center">
                    <div class="col-md-1">
                        <img src={htmlIcon} alt="html" className="img-fluid"></img>
                        
                    </div>
                    
                </div>
            </div>
            </section>
            </section>
            <section className="">
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
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp" className="d-block w-100"
                        alt="Sunset Over the City" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </div>
                    </div>

                    
                    <div className="carousel-item">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp" className="d-block w-100"
                        alt="Canyon at Nigh" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    </div>

                   
                    <div className="carousel-item">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp" className="d-block w-100"
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
            <section>
                <div>
                    <h6 className="display-6 mt-5">All Projects</h6>
                </div>
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col pt-5 reveal">
                        <div class="card h-100">
                            <div class="card-header">
                            <h5 class="m-0">Featured</h5>
                            </div>
                        <img src={blogSite} class="card-img-top"
                            alt="Skyscrapers" />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                            </p>
                        </div>
                        <div class="card-footer">
                        <div class="d-grid gap-2 d-md-block">
                            <button class="btn btn-primary m-1" type="button">
                            <i class="fas fa-globe me-1"></i>
                            Live Preview</button>
                            <button class="btn btn-primary m-1" type="button">
                            <i class="fas fa-code me-1"></i>
                            Source Code</button>
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
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                            </p>
                        </div>
                        <div class="card-footer">
                        <div class="d-grid gap-2 d-md-block">
                            <button class="btn btn-primary m-1" type="button">
                            <i class="fas fa-globe me-1"></i>
                            Live Preview</button>
                            <button class="btn btn-primary m-1" type="button">
                            <i class="fas fa-code me-1"></i>
                            Source Code</button>
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
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                            </p>
                        </div>
                        <div class="card-footer">
                        <div class="d-grid gap-2 d-md-block">
                            <button class="btn btn-primary m-1" type="button">
                            <i class="fas fa-globe me-1"></i>
                            Live Preview</button>
                            <button class="btn btn-primary m-1" type="button">
                            <i class="fas fa-code me-1"></i>
                            Source Code</button>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div class="col pt-5 reveal">
                        <div class="card h-100">
                            
                        <img src={blogSite} class="card-img-top"
                            alt="Skyscrapers" />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                            </p>
                        </div>
                        <div class="card-footer">
                        <div class="d-grid gap-2 d-md-block">
                            <button class="btn btn-primary m-1" type="button">
                            <i class="fas fa-globe me-1"></i>
                            Live Preview</button>
                            <button class="btn btn-primary m-1" type="button">
                            <i class="fas fa-code me-1"></i>
                            Source Code</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="col pt-5 reveal">
                        <div class="card h-100">
                            
                        <img src={blogSite} class="card-img-top"
                            alt="Skyscrapers" />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                            </p>
                        </div>
                        <div class="card-footer">
                        <div class="d-grid gap-2 d-md-block">
                            <button class="btn btn-primary m-1" type="button">
                            <i class="fas fa-globe me-1"></i>
                            Live Preview</button>
                            <button class="btn btn-primary m-1" type="button">
                            <i class="fas fa-code me-1"></i>
                            Source Code</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="col pt-5 reveal">
                        <div class="card h-100">
                            
                        <img src={blogSite} class="card-img-top"
                            alt="Skyscrapers" />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                            </p>
                        </div>
                        <div class="card-footer">
                        <div class="d-grid gap-2 d-md-block">
                            <button class="btn btn-primary m-1" type="button">
                            <i class="fas fa-globe me-1"></i>
                            Live Preview</button>
                            <button class="btn btn-primary m-1" type="button">
                            <i class="fas fa-code me-1"></i>
                            Source Code</button>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div class="col pt-5 reveal">
                        <div class="card h-100">
                            
                        <img src={blogSite} class="card-img-top"
                            alt="Skyscrapers" />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                            </p>
                        </div>
                        <div class="card-footer">
                        <div class="d-grid gap-2 d-md-block">
                            <button class="btn btn-primary m-1" type="button">
                            <i class="fas fa-globe me-1"></i>
                            Live Preview</button>
                            <button class="btn btn-primary m-1" type="button">
                            <i class="fas fa-code me-1"></i>
                            Source Code</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="col pt-5 reveal">
                        <div class="card h-100">
                            
                        <img src={blogSite} class="card-img-top"
                            alt="Skyscrapers" />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                            </p>
                        </div>
                        <div class="card-footer">
                        <div class="d-grid gap-2 d-md-block">
                            <button class="btn btn-primary m-1" type="button">
                            <i class="fas fa-globe me-1"></i>
                            Live Preview</button>
                            <button class="btn btn-primary m-1" type="button">
                            <i class="fas fa-code me-1"></i>
                            Source Code</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="col pt-5 reveal">
                        <div class="card h-100">
                            
                        <img src={blogSite} class="card-img-top"
                            alt="Skyscrapers" />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                            </p>
                        </div>
                        <div class="card-footer">
                        <div class="d-grid gap-2 d-md-block">
                            <button class="btn btn-primary m-1" type="button">
                            <i class="fas fa-globe me-1"></i>
                            Live Preview</button>
                            <button class="btn btn-primary m-1" type="button">
                            <i class="fas fa-code me-1"></i>
                            Source Code</button>
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
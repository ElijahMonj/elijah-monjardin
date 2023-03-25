

import React, { useState, useEffect } from 'react';
const Footer = () => {
    
    

    return(
        <footer className="bg-dark text-center text-white">
            {/* Grid container */}
            <div className="container p-4 pb-0">
                {/* Section: Social media */}
                <section className="mb-4">
               
        

                {/* Twitter */}
                <a className="btn btn-outline-light btn-floating m-1 socBtnBg" href="https://twitter.com/ElijahMonj" role="button"
                    ><i className="fab fa-twitter fa-lg fa-fw"></i></a>

                {/* Google */}
                <a className="btn btn-outline-light btn-floating m-1 socBtnBg" href="#!" role="button"
                    ><i className="fab fa-google fa-lg fa-fw "></i></a>

                {/* Linkedin */}
                <a className="btn btn-outline-light btn-floating m-1 socBtnBg" href="#!" role="button"
                    ><i className="fab fa-linkedin-in fa-lg fa-fw "></i></a>

                {/* Github */}
                <a className="btn btn-outline-light btn-floating m-1 socBtnBg" href="https://github.com/ElijahMonj" role="button"
                    ><i className="fab fa-github fa-lg fa-fw "></i></a>
                    
                </section>
                {/* Section: Social media */}
            </div>
            {/* Grid container */}

            {/* Copyright */}
            <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                © 2020 Copyright:
                <a className="text-white" href="https://mdbootstrap.com/"> Elijah Monjardin</a>
            </div>
            {/* Copyright */}
          
        </footer>
    )

}

export default Footer
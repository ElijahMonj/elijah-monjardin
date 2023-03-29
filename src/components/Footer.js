

import React, { useState, useEffect } from 'react';
const Footer = () => {
    
    

    return(
      
    <footer className="bg-dark text-center text-white mt-5">
  
  <div className="container p-4 pb-0">
  <p className='text-light lead'>Connect with me</p>
    
    <section className="mb-4">
      
      <a className="btn btn-outline-light btn-floating m-1 socBtnBg" href="https://www.facebook.com/deleon111/" role="button"><i className="fab fa-facebook-f fa-lg"></i></a>

       
      <a className="btn btn-outline-light btn-floating m-1 socBtnBg" href="https://twitter.com/ElijahMonj" role="button"><i className="fab fa-twitter fa-lg"></i></a>

        {/* 
      <a className="btn btn-outline-light btn-floating m-1 socBtnBg" href="#!" role="button"><i className="fab fa-google fa-lg"></i></a>

        
      <a className="btn btn-outline-light btn-floating m-1 socBtnBg" href="#!" role="button"><i className="fab fa-instagram fa-lg"></i></a>
        
     
      <a className="btn btn-outline-light btn-floating m-1 socBtnBg" href="#!" role="button"><i className="fab fa-linkedin-in fa-lg"></i></a>
        */} 
     
      <a className="btn btn-outline-light btn-floating m-1 socBtnBg" href="https://github.com/ElijahMonj" role="button"><i className=" fab fa-github fa-lg" ></i></a>
    </section>
    
  </div>
 
  <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
    © 2020 Copyright:
    <a className="text-white" href="https://elijahmonjardin.me/elijah-monjardin/"> Elijah Monjardin</a>
  </div>
  
</footer>
    )

}

export default Footer
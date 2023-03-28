

import React, { useState, useEffect } from 'react';
const Footer = () => {
    
    

    return(
      
    <footer class="bg-dark text-center text-white mt-5">
  
  <div class="container p-4 pb-0">
  <p className='text-light lead'>Connect with me</p>
    
    <section class="mb-4">
      
      <a class="btn btn-outline-light btn-floating m-1 socBtnBg" href="https://www.facebook.com/deleon111/" role="button"><i class="fab fa-facebook-f fa-lg"></i></a>

       
      <a class="btn btn-outline-light btn-floating m-1 socBtnBg" href="https://twitter.com/ElijahMonj" role="button"><i class="fab fa-twitter fa-lg"></i></a>

        {/* 
      <a class="btn btn-outline-light btn-floating m-1 socBtnBg" href="#!" role="button"><i class="fab fa-google fa-lg"></i></a>

        
      <a class="btn btn-outline-light btn-floating m-1 socBtnBg" href="#!" role="button"><i class="fab fa-instagram fa-lg"></i></a>
        
     
      <a class="btn btn-outline-light btn-floating m-1 socBtnBg" href="#!" role="button"><i class="fab fa-linkedin-in fa-lg"></i></a>
        */} 
     
      <a class="btn btn-outline-light btn-floating m-1 socBtnBg" href="https://github.com/ElijahMonj" role="button"><i class=" fab fa-github fa-lg" ></i></a>
    </section>
    
  </div>
 
  <div class="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
    © 2020 Copyright:
    <a class="text-white" href="https://elijahmonjardin.me/elijah-monjardin/"> Elijah Monjardin</a>
  </div>
  
</footer>
    )

}

export default Footer
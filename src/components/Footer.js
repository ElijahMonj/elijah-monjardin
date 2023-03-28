

import React, { useState, useEffect } from 'react';
const Footer = () => {
    
    

    return(
        <footer class=" text-center text-white mt-5">
 
            <div class="container p-4 pb-0">
                <p className='text-dark lead'>Connect with me</p>
                <section class="mb-4">
                
                <a
                    class="btn text-white btn-floating m-1"
                    style={{backgroundColor: "#3b5998"}}
                    href="#!"
                    role="button"
                    ><i class="fab fa-facebook-f fa-lg"></i></a>

                
                <a
                    class="btn text-white btn-floating m-1"
                    style={{backgroundColor: "#55acee"}}
                    href="#!"
                    role="button"
                    ><i class="fab fa-twitter fa-lg"></i></a>

                
                <a
                    class="btn text-white btn-floating m-1"
                    style={{backgroundColor: "#dd4b39"}}
                    href="#!"
                    role="button"
                    ><i class="fab fa-google fa-lg"></i></a>

                
                <a
                    class="btn text-white btn-floating m-1"
                    style={{backgroundColor: "#ac2bac"}}
                    href="#!"
                    role="button"
                    ><i class="fab fa-instagram fa-lg"></i></a>

                
                <a
                    class="btn text-white btn-floating m-1"
                    style={{backgroundColor: "#0082ca"}}
                    href="#!"
                    role="button"
                    ><i class="fab fa-linkedin-in fa-lg"></i></a>
                
                <a
                    class="btn text-white btn-floating m-1"
                    style={{backgroundColor:"#333333"}}
                    href="#!"
                    role="button"
                    ><i class="fab fa-github fa-lg"></i></a>
                </section>
            
            </div>
            
            
            <div class="text-center p-3 bg-dark">
                © 2020 Copyright:
                <a class="text-white" href="https://mdbootstrap.com/"> Elijah Monjardin</a>
            </div>
            
            </footer>
    )

}

export default Footer
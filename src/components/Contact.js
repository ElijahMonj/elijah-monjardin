import React from "react";
import Mail from './images/mail.svg'
const Contact = () => {
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
        {AutoShow()}
           <section className="container-fluid row justify-content-center pt-5 mx-0 mt-5  ">
            
            <div className="col-lg-6 d-flex flex-column justify-content-center auto-hidden-right py-5">
                <div>
                  <h1>Contact Me</h1>
                </div>
                <div className="">
                  <h5>Ask questions. Get in touch. Message me. </h5>
                </div>
                <div>
                <img className="img-fluid my-auto" id="" 
                src={Mail}
                style={{height:"auto",width:"20rem"}} alt="me"/>
                </div>
                

            </div>
            <div className="col-lg-6 auto-hidden-left py-5">
            <div class="container">
  <div class="row">
    <div class="col-md-8 offset-md-2">
      <form className="">
        <div class="form-group d-flex flex-column justify-content-start mb-3">
          <label for="firstName" className="d-flex justify-content-start">First Name</label>
          <input maxLength={50} type="text" class="form-control" id="firstName" placeholder="Enter your first name"/>
        </div>
        <div class="form-group d-flex flex-column justify-content-start mb-3">
          <label for="lastName" className="d-flex justify-content-start ">Last Name</label>
          <input maxLength={50} type="text" class="form-control" id="lastName" placeholder="Enter your last name"/>
        </div>
        <div class="form-group d-flex flex-column justify-content-start mb-3">
          <label for="subject" className="d-flex justify-content-start ">Subject</label>
          <input maxLength={50} type="text" class="form-control" id="subject" placeholder="Subject of message"/>
        </div>
        <div class="form-group d-flex flex-column justify-content-start mb-3">
          <label for="email" className="d-flex justify-content-start">Email</label>
          <input maxLength={50} type="email" class="form-control" id="email" placeholder="Enter your email address"/>
        </div>
        <div class="form-group d-flex flex-column justify-content-start mb-3">
          <label for="message" className="d-flex justify-content-start ">Message</label>
          <textarea class="form-control" id="message" rows="5" placeholder="Enter your message" maxLength={200}></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</div>
            </div>
            <div className="col-12">Connect with me with my socials.</div>
            </section>
        </div>
    )

}

export default Contact
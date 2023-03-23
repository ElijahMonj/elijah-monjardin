import React from "react";

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
           <section className="container-fluid bg-light row justify-content-center py-5 mx-0 my-5 ">
            
            <div className="col-lg-6 d-flex justify-content-center auto-hidden-right py-5">
            
                <img className="img-fluid my-auto" id="" 
                src="https://cdn.dribbble.com/users/1551941/screenshots/6346538/thankyoudribble.gif" 
                style={{height:"auto",width:"30em"}} alt="me"/>

            </div>
            <div className="col-lg-6 auto-hidden-left py-5">
            <div class="container">
  <div class="row">
    <div class="col-md-8 offset-md-2">
      <form className="">
        <div class="form-group d-flex flex-column justify-content-start mb-3">
          <label for="firstName" className="d-flex justify-content-start">First Name</label>
          <input type="text" class="form-control" id="firstName" placeholder="Enter your first name"/>
        </div>
        <div class="form-group d-flex flex-column justify-content-start mb-3">
          <label for="lastName" className="d-flex justify-content-start ">Last Name</label>
          <input type="text" class="form-control" id="lastName" placeholder="Enter your last name"/>
        </div>
        <div class="form-group d-flex flex-column justify-content-start mb-3">
          <label for="subject" className="d-flex justify-content-start ">Subject</label>
          <input type="text" class="form-control" id="subject" placeholder="Subject of message"/>
        </div>
        <div class="form-group d-flex flex-column justify-content-start mb-3">
          <label for="email" className="d-flex justify-content-start">Email</label>
          <input type="email" class="form-control" id="email" placeholder="Enter your email address"/>
        </div>
        <div class="form-group d-flex flex-column justify-content-start mb-3">
          <label for="message" className="d-flex justify-content-start ">Message</label>
          <textarea class="form-control" id="message" rows="5" placeholder="Enter your message"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</div>
            </div>
            </section>
        </div>
    )

}

export default Contact
import React from 'react';
import "./Contact.css";

function Contact() {
    return (
        <div className="container" id="contact">
          <div className="row">
            <div className="col-sm-6" id="message-img">
                <img className="question-img" src="/images/2368872.jpg" alt="bubble with question mark" />
            </div>
            <div className="col-sm-6" id="message">
                <p className="question">Have a question?</p>
                <p className="question">Please send a message</p>
                  
              <form className="mt-4 mt-md-0">
                    <div className="form-group">
                        <label form="formGroupExampleInput" className="sr-only">Name</label>
                        <input type="text" className="form-control bg-faded-4" id="name" placeholder="Name"/>
                    </div>
                    <div className="form-group">
                        <label form="formGroupExampleInput" className="sr-only">Email</label>
                        <input className="form-control bg-faded-4" type="email" value="" id="email" placeholder="Email"/>
                    </div>
                    <div className="form-group">
                        <label form="formGroupExampleInput" className="sr-only">Phone Number</label>
                        <input className="form-control bg-faded-4" type="email" value="" id="email"
                            placeholder="Phone Number"/>
                    </div>
                    <div className="form-group">
                        <label form="formGroupExampleInput" className="sr-only">Message</label>
                        <textarea className="form-control bg-faded-4" id="message" rows="3"
                            placeholder="Message"></textarea>
                    </div>
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="spam"/>
                        <label className="custom-control-label" form="spam">Are you a human?</label>
                    </div>
                    <button type="submit" className="btn btn-secondary btn-sm mt-2">Submit</button>
                </form> 
                </div>
            
        </div>
       </div>
   
       
    )
}

export default Contact;
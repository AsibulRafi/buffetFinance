import React from "react";

const Message = () => {
  return (
    <>
      <div className="contact__content-form">
        <form action="https://formsubmit.co/support@noname1.com" method="POST">
          <div className="contact__content-form-input">
            <h4>First Name</h4>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              required
            />
          </div>
          <div className="contact__content-form-input">
            <h4>Last Name</h4>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              required
            />
          </div>
          <div className="contact__content-form-input">
            <h4>Email Address</h4>
            <input type="email" placeholder="Email Address" required />
          </div>
          <div className="contact__content-form-input">
            <h4>Phone Number</h4>
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              required
            />
          </div>
          <input type="hidden" name="_captcha" value="false" />
          <div className="contact__content-form-input">
            <h4>Message</h4>
            <textarea type="text" placeholder="Message"></textarea>
          </div>
          <div className="form-check">
            <input type="checkbox" name="checkbox" />
            <p>
              I have read and accept the Client Agreement and Risk Disclosure of
              the Company
            </p>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Message;

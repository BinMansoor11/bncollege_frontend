import React from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import "./contactus.css";

const ContactUs = (props) => {
  return (
    <div>
      <Header />

      <div className="container contact-form">
        <form method="post">
          <h3>Drop Us a Message</h3>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  name="txtName"
                  className="form-control"
                  placeholder="Your Name *"
                  value=""
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="txtEmail"
                  className="form-control"
                  placeholder="Your Email *"
                  value=""
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="txtPhone"
                  className="form-control"
                  placeholder="Your Phone Number *"
                  value=""
                />
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  name="btnSubmit"
                  className="btnContact"
                  value="Send Message"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <textarea
                  name="txtMsg"
                  className="form-control"
                  placeholder="Your Message *"
                  style={{ width: "100%", height: "150px" }}
                ></textarea>
              </div>
            </div>
          </div>
        </form>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7879128.691657671!2d43.69507449025061!3d15.363981411257146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1603dbac7c34bc5f%3A0x92f129377eae77ae!2sYemen!5e0!3m2!1sen!2s!4v1601902722965!5m2!1sen!2s"
          width="100%"
          height="250"
          frameborder="0"
          style={{ border: "0" }}
          allowfullscreen=""
          ariaHidden="false"
          tabindex="0"
        ></iframe>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;

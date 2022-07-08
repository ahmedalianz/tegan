import { useState } from "react";

export default function Contact() {
  const [success, setSuccess] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  return (
    <section id="contact" className="contact-area pt-125 pb-130 gray-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title text-center pb-20">
              <h5 className="sub-title mb-15">Contact us</h5>
              <h2 className="title">Get In touch</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="contact-form">
              <form id="contact-form" data-toggle="validator">
                <div className="row">
                  <div className="col-md-6">
                    <div className="single-form form-group">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        data-error="Name is required."
                        required="required"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="single-form form-group">
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        data-error="Valid email is required."
                        required="required"
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="single-form form-group">
                      <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        data-error="Subject is required."
                        required="required"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="single-form form-group">
                      <input
                        type="text"
                        name="phone"
                        placeholder="Phone"
                        data-error="Phone is required."
                        required="required"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="single-form form-group">
                      <textarea
                        placeholder="Your Mesaage"
                        name="message"
                        data-error="Please,leave us a message."
                        required="required"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                      ></textarea>
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>
                  <p className="form-message"></p>
                  <div className="col-md-12">
                    <div className="single-form form-group text-center">
                      <button type="submit" className="main-btn">
                        <a
                          href={`mailto:ahmedalian400@gmail.com?subject=${subject}&body=This is ${name} and my phone is ${phone} :${body}`}
                        >
                          send message
                        </a>
                      </button>
                    </div>
                  </div>
                  <div className="success">{success}</div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

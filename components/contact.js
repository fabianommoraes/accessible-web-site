function Contact() {
  return (
    <div className="container lg-hide">
      <h2 className="text-center my-3 contact-title">
        <span role="img" aria-label="Party Popper">
          🎉
        </span>{" "}
        Our customers love us and they love sharing it! 🎉
      </h2>
      <div className="container contacts_holder">
        <section>
          <h2 className="mb-3 h2">Send us an email!</h2>
          <p>All fields marked with an asterisk (*) are required.</p>
          <form className="contact_form">
            <div className="form-group">
              <label>
                Your Name
                <span aria-hidden="true" style={{ color: "red" }}>
                  *
                </span>
                <input type="text" className="form-control" required />
              </label>
            </div>
            <div className="form-group">
              <label>
                Email
                <span aria-hidden="true" style={{ color: "red" }}>
                  *
                </span>
                <input type="email" className="form-control" required />
              </label>
            </div>
            <label>
              Your Message
              <span aria-hidden="true" style={{ color: "red" }}>
                *
              </span>
              <textarea className="form-control" id="msg" required></textarea>
            </label>
            <div className="input-group">
              <button type="submit" className="btn btn-primary mt-3">
                Send Message
              </button>
            </div>
          </form>
        </section>
        <div className="other-contact">
          <h2 className="mb-3">Other Contact Information</h2>
          <div className="contacts">
            <div className="contact mb-3">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-info"
                  aria-hidden="true"
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#000"
                    d="M18 8c0-3.31-2.69-6-6-6S6 4.69 6 8c0 4.5 6 11 6 11s6-6.5 6-11zm-8 0c0-1.1.9-2 2-2s2 .9 2 2-.89 2-2 2c-1.1 0-2-.9-2-2zM5 20v2h14v-2H5z"
                  />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
              </div>
              <div className="contact-body">
                <h3 className="h5">Hospital Address:</h3>
                <span>12 Chicago Road</span>
                <span>Suite 14</span>
                <span>Chicago, Illionis 60007 </span>
              </div>
            </div>
            <div className="contact mb-3">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-info"
                  aria-hidden="true"
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#000"
                    d="M11.99 2C6.47 2 2 6.48 2 12s4.47 
                                       10 9.99 10C17.52 22 22 17.52 22
                                       12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
                  />
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path
                    fill="#000"
                    d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"
                  />
                </svg>
              </div>
              <div className="contact-body">
                <h3 className="h5">Work Hours</h3>
                <span>Monday - Friday: 7am-6pm</span>
                <span>Saturday & Sunday: Closed</span>
              </div>
            </div>
            <div className="contact mb-3">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="text-info"
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#000"
                    d="M15.5 1h-8C6.12 1 5 2.12 5 3.5v17C5 21.88 6.12 23 7.5 23h8c1.38 0 2.5-1.12 2.5-2.5v-17C18 2.12 16.88 1 15.5 1zm-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5-4H7V4h9v14z"
                  />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
              </div>
              <div className="contact-body">
                <h3 id="phone-number" className="h5">
                  Phone Number
                </h3>
                <a href="tel:123-457-8990" aria-labelledby="phone-number">
                  123-457-8990
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

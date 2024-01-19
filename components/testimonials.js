function Testimonials() {
  return (
    <div class="container">
      <div class="row">
        <div class="col-sm  mb-3">
          <h2 class="mb-3">Why choose us?</h2>
          <ul class="list-group">
            <li class="list-group-item">
              <strong>We</strong> offer emergency surgeries / visits
            </li>
            <li class="list-group-item">
              <strong>We</strong> have an amazing pet hotel
            </li>
            <li class="list-group-item">
              <strong>We</strong> are leaders in pet grooming
            </li>
            <li class="list-group-item">
              <strong>We</strong> have the latest technology
            </li>
            <li class="list-group-item">
              <strong>We</strong>
              simply love pets and want to see them healthy!
              <a href="https://example"> Make an appointment </a>
              today!
            </li>
          </ul>
        </div>
        <div class="col-sm">
          <h2 class="mb-3">Come visit us!</h2>
          <p>
            We are in Turtle Creek Mall, next to Target, right after the
            roundabout.
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5940.83775855611!2d-87.62189730559922!3d41.88384782670508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2ca68a4f9c03%3A0x44182cdcb5a91004!2sMillennium+Park!5e0!3m2!1sen!2sus!4v1565383319401!5m2!1sen!2sus"
            style={{ width: "100%", height: "246px", border: 0 }}
            allowfullscreen
            title="Map of Furbaby Hospital."
          ></iframe>
          <div>
            <div>23 Chicago Road</div>
            <div>Chicago, Illionis 43432</div>
          </div>
          <a href="furbaby.com/driving-directions">Driving Directions</a>
        </div>
      </div>
      <div class="container lg-hide">
        <h2 class="text-center my-3">
          <span role="img" aria-label="Party Popper">
            🎉
          </span>{" "}
          Our customers love us and they love sharing it! 🎉
        </h2>
        <div class="container contacts_holder">
          <section>
            <h2 class="mb-3 h2">Send us an email!</h2>
            <p>All fields marked with an asterisk (*) are required.</p>
            <form class="contact_form">
              <div class="form-group">
                <label>
                  Your Name <span aria-hidden="true">*</span>
                  <input type="text" class="form-control" required />
                </label>
              </div>
              <div class="form-group">
                <label>
                  Email <span aria-hidden="true">*</span>
                  <input type="email" class="form-control" required />
                </label>
              </div>
              <label>
                Your Message
                <span aria-hidden="true">*</span>
                <textarea class="form-control" id="msg" required></textarea>
              </label>
              <div class="input-group">
                <button type="submit" class="btn btn-primary mt-3">
                  Send Message
                </button>
              </div>
            </form>
          </section>
          <div class="other-contact">
            <h2 class="mb-3">Other Contact Information</h2>
            <div class="contacts">
              <div class="contact mb-3">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="text-info"
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
                <div class="contact-body">
                  <h3 class="h5">Hospital Address:</h3>
                  <span>12 Chicago Road</span>
                  <span>Suite 14</span>
                  <span>Chicago, Illionis 60007 </span>
                </div>
              </div>
              <div class="contact mb-3">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="text-info"
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
                <div class="contact-body">
                  <h3 class="h5">Work Hours</h3>
                  <span>Monday - Friday: 7am-6pm</span>
                  <span>Saturday & Sunday: Closed</span>
                </div>
              </div>
              <div class="contact mb-3">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    class="text-info"
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
                <div class="contact-body">
                  <h3 class="h5"> Phone Number </h3>
                  <a href="tel:123-457-8990">123-457-8990</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;

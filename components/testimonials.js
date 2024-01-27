function Testimonials() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm  mb-3">
          <h2 className="mb-3">Why choose us?</h2>
          <ul className="list-group">
            <li className="list-group-item">
              <strong>We</strong> offer emergency surgeries / visits
            </li>
            <li className="list-group-item">
              <strong>We</strong> have an amazing pet hotel
            </li>
            <li className="list-group-item">
              <strong>We</strong> are leaders in pet grooming
            </li>
            <li className="list-group-item">
              <strong>We</strong> have the latest technology
            </li>
            <li className="list-group-item">
              <strong>We</strong> simply love pets and want to see them healthy!{" "}
              <a href="https://example">Make an appointment</a> today!
            </li>
          </ul>
        </div>
        <div className="col-sm">
          <h2 className="mb-3">Come visit us!</h2>
          <p>
            We are in Turtle Creek Mall, next to Target, right after the
            roundabout.
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5940.83775855611!2d-87.62189730559922!3d41.88384782670508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2ca68a4f9c03%3A0x44182cdcb5a91004!2sMillennium+Park!5e0!3m2!1sen!2sus!4v1565383319401!5m2!1sen!2sus"
            style={{ width: "100%", height: "246px", border: 0 }}
            allowFullScreen
            title="Map of Furbaby Hospital."
          ></iframe>
          <div>
            <div>23 Chicago Road</div>
            <div>Chicago, Illionis 43432</div>
          </div>
          <a href="furbaby.com/driving-directions">Driving Directions</a>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;

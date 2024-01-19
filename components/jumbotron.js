function Jumbotron() {
  return (
    <div className="jumbotron">
      <div className="container">
        <h1 className="display-3">Full service veterinary hospital </h1>
        <h2 className="display-5">
          Located in Chicago, Illinois we specialize in the treatment of dogs,
          cats and dragons
        </h2>
        <hr className="my-4" />
        <div className="container">
          <div className="row">
            <p className="lead ">
              <a
                className="btn btn-primary btn-lg mr-3 "
                href="#"
                role="button"
              >
                Schedule An Appointment
              </a>
            </p>
            <p className="lead ">
              <a className="btn btn-secondary btn-lg" href="#" role="button">
                View Services
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;

function Jumbotron() {
  return (
    <div class="jumbotron">
      <div class="container">
        <h1 class="display-3">Full service veterinary hospital </h1>
        <h2 class="display-5">
          Located in Chicago, Illinois we specialize in the treatment of dogs,
          cats and dragons
        </h2>
        <hr class="my-4" />
        <div class="container">
          <div class="row">
            <p class="lead ">
              <a class="btn btn-primary btn-lg mr-3 " href="#" role="button">
                Schedule An Appointment
              </a>
            </p>
            <p class="lead ">
              <a class="btn btn-secondary btn-lg" href="#" role="button">
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

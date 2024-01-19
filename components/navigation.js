import Hamburger from "./hamburger";

function Navigation() {
  return (
    <nav id="primary-nav">
      <Hamburger />
      <div className="main-nav bg-primary">
        <ul className="container list-group bg-primary">
          <li>
            <a
              aria-current="page"
              href="#"
              className="list-group-item list-group-item-action bg-primary border-0 active"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="list-group-item list-group-item-action bg-primary border-0 "
            >
              New Patients
            </a>
          </li>
          <li>
            <a
              href="#"
              className="list-group-item list-group-item-action bg-primary border-0"
            >
              Testimonials
            </a>
          </li>
          <li>
            <a
              href="#"
              className="list-group-item list-group-item-action bg-primary border-0"
            >
              Hospital Gallery
            </a>
          </li>
          <li>
            <a
              href="#"
              className="list-group-item list-group-item-action bg-primary border-0"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#"
              className="list-group-item list-group-item-action bg-primary border-0"
            >
              Appointments
            </a>
          </li>
          <li>
            <a
              href="#"
              className="list-group-item list-group-item-action bg-primary border-0"
            >
              Contact us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;

import logo from "../public/logo.svg";

function Logo() {
  return (
    <div className="container">
      <a href="/" className="logo-holder" alt="Homepage">
        <img className="logo" alt="Homepage" src={logo.src} />
      </a>
    </div>
  );
}

export default Logo;

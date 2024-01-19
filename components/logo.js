import logo from "../public/logo.svg";

function Logo() {
  return (
    <div class="container">
      <a href="/" class="logo-holder">
        <img class="logo" alt="Homepage" src={logo.src} />
      </a>
    </div>
  );
}

export default Logo;

function Footer() {
  return (
    <footer className="main mt-5">
      <div className="container bottom-footer">
        <p>
          Copyright © <span id="copyright_year">2019 - 2022</span> Stefany Web
          Design <span>All Rights Reserved.</span>
        </p>
        <div className="social-icons">
          <a
            href="https://example.com"
            className="icon-link image-link icon"
            aria-label="Follow company on Example"
          >
            <svg
              aria-hidden="true"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 16 16"
            >
              <path
                fill="#4dc47d"
                d="M12.953 2.909v-2.909h-2.909l-0.291 0.294-1.375 2.616-0.431 0.291h-4.9v3.994h2.694l0.241 0.291-2.934 5.606v2.909h2.909l0.291-0.294 1.375-2.616 0.431-0.291h4.9v-3.994h-2.694l-0.241-0.294z"
              ></path>
            </svg>
          </a>
          <a
            href="https://instagram.com"
            className="icon-link image-link icon"
            aria-label="Follow company on Instagram"
          >
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 16 16"
            >
              <path
                fill="#ffdc80"
                d="M14.5 0h-13c-0.825 0-1.5 0.675-1.5 1.5v13c0 0.825 0.675 1.5 1.5 1.5h13c0.825 0 1.5-0.675 1.5-1.5v-13c0-0.825-0.675-1.5-1.5-1.5zM11 2.5c0-0.275 0.225-0.5 0.5-0.5h2c0.275 0 0.5 0.225 0.5 0.5v2c0 0.275-0.225 0.5-0.5 0.5h-2c-0.275 0-0.5-0.225-0.5-0.5v-2zM8 5c1.656 0 3 1.344 3 3s-1.344 3-3 3c-1.656 0-3-1.344-3-3s1.344-3 3-3zM14 13.5v0c0 0.275-0.225 0.5-0.5 0.5h-11c-0.275 0-0.5-0.225-0.5-0.5v0-6.5h1.1c-0.066 0.322-0.1 0.656-0.1 1 0 2.762 2.237 5 5 5s5-2.238 5-5c0-0.344-0.034-0.678-0.1-1h1.1v6.5z"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

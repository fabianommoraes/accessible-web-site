import { useState } from "react";

function Hamburger() {
  const [expanded, setExapanded] = useState(false);

  function handleClick() {
    setExapanded(!expanded);
  }

  return (
    <button
      id="hamburger"
      aria-expanded={expanded}
      aria-label="menu"
      onClick={handleClick}
    >
      <div id="expanded">expanded</div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
      </svg>
    </button>
  );
}

export default Hamburger;

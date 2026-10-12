
import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <p>Made with ❤️ to remember every special day.</p>
      <small>
        BirthdayBook © {new Date().getFullYear()}
      </small>
    </footer>
  );
}

export default Footer;
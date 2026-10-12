import React from "react";

function Navbar({ activeTab, onTabChange }) {
  const tabs = ["Today", "Upcoming", "All Birthdays"];

  return (
    <nav className="navbar">
      <a className="logo" href="#home">
        <span className="logo-icon">🎂</span>
        BirthdayBook
      </a>

      <div className="nav-links">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={
              activeTab === tab
                ? "nav-link active"
                : "nav-link"
            }
            onClick={() => onTabChange(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
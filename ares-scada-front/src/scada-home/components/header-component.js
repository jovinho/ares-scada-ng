import React from "react";

export default () => (
  <nav
    className="navbar is-black"
    role="navigation"
    aria-label="main navigation"
  >
    <div className="navbar-brand">
      <span className="navbar-item scada-title">
        <p>SCADA</p>
      </span>

      <div id="navBar" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item">Home</a>
        </div>
      </div>
    </div>
  </nav>
);

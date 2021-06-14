import React from "react";
import Mobile from "../images/illustration-phones.svg";
function Company() {
  return (
    <section className="company">
      <div className="company-center">
        <img src={Mobile} alt="mobile" />
        <div className="company-content">
          <h2>State of the Art Infrastructure</h2>
          <p>
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Company;

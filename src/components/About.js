import React from "react";
import AboutImageDesktop from "../images/illustration-laptop-desktop.svg";
import AboutImageMobile from "../images/illustration-laptop-mobile.svg";

function About() {
  return (
    <section className="about">
      <div className="product-center">
        <div className="product-img-container">
          <picture>
            <source media="(min-width: 768px)" srcSet={AboutImageDesktop} />
            <img src={AboutImageMobile} alt="product" />
          </picture>
        </div>
        <div className="product-contents">
          <div className="product-content">
            <h2>Freem open, simple</h2>
            <p>
              Blogr is a free and open source application backed by a large
              community of helpful developers. It supports features such as code
              syntax highlighting, RSS feeds, social media integration,
              third-party commenting tools, and works seamlessly with Google
              Analytics. The architecture is clean and is relatively easy to
              learn.
            </p>
          </div>
          <div className="product-content">
            <h2>Powerful tooling</h2>
            <p>
              Batteries included. We built a simple and straightforward CLI tool
              that makes customization and deployment a breeze, but capable of
              producing even the most complicated sites.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

import React from "react";
import ProductImageDesktop from "../images/illustration-editor-desktop.svg";
import ProductImageMobile from "../images/illustration-editor-mobile.svg";

function Product() {
  return (
    <section className="products">
      <h2>Designed for the future</h2>
      <div className="product-center">
        <div className="product-img-container">
          <picture>
            <source media="(min-width: 768px)" srcSet={ProductImageDesktop} />
            <img src={ProductImageMobile} alt="product" />
          </picture>
        </div>
        <div className="product-contents">
          <div className="product-content">
            <h2>Introducing an extensible editor</h2>
            <p>
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content. The editor supports
              management of multiple blogs and allows easy manipulation of
              embeds such as images, videos, and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
            </p>
          </div>
          <div className="product-content">
            <h2>Robust content management</h2>
            <p>
              Flexible content management enables users to easily move through
              posts. Increase the usability of your blog by adding customized
              categories, sections, format, or flow. With this functionality,
              you’re in full control.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Product;

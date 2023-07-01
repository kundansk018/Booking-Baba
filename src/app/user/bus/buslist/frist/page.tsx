"use client";
import React from "react";

const IndexPage: React.FC = () => {
  return (
    <div className="px-60">
      <div className="row gap-4">
        <div className="col-md-4">
          <p>Payment</p>
          <ul className="payments-types">
            <li>
              <a href="#" target="_blank">
                {" "}
                <img
                  data-bs-toggle="tooltip"
                  src="images/payment/visa.png"
                  alt="visa"
                  title=""
                  data-bs-original-title="Visa"
                  aria-label="Visa"
                />
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                {" "}
                <img
                  data-bs-toggle="tooltip"
                  src="images/payment/discover.png"
                  alt="discover"
                  title=""
                  data-bs-original-title="Discover"
                  aria-label="Discover"
                />
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                {" "}
                <img
                  data-bs-toggle="tooltip"
                  src="images/payment/paypal.png"
                  alt="paypal"
                  title=""
                  data-bs-original-title="PayPal"
                  aria-label="PayPal"
                />
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                {" "}
                <img
                  data-bs-toggle="tooltip"
                  src="images/payment/american.png"
                  alt="american express"
                  title=""
                  data-bs-original-title="American Express"
                  aria-label="American Express"
                />
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                {" "}
                <img
                  data-bs-toggle="tooltip"
                  src="images/payment/mastercard.png"
                  alt="discover"
                  title=""
                  data-bs-original-title="Discover"
                  aria-label="Discover"
                />
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-4">
          <p>Subscribe</p>
          <div className="input-group newsletter">
            <input
              className="form-control"
              placeholder="Your Email Address"
              name="newsletterEmail"
              id="newsletterEmail"
              type="text"
            />
            <button
              className="btn btn-secondary shadow-none px-3"
              type="submit"
            >
              Subscribe
            </button>
          </div>
        </div>
        <div className="col-md-4 flex items-end flex-col">
          <p>Keep in touch</p>
          <ul className="social-icons">
            <li className="social-icons-facebook">
              <a
                data-bs-toggle="tooltip"
                href="http://www.facebook.com/"
                target="_blank"
                title=""
                data-bs-original-title="Facebook"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li className="social-icons-twitter">
              <a
                data-bs-toggle="tooltip"
                href="http://www.twitter.com/"
                target="_blank"
                title=""
                data-bs-original-title="Twitter"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li className="social-icons-google">
              <a
                data-bs-toggle="tooltip"
                href="http://www.google.com/"
                target="_blank"
                title=""
                data-bs-original-title="Google"
                aria-label="Google"
              >
                <i className="fab fa-google"></i>
              </a>
            </li>
            <li className="social-icons-linkedin">
              <a
                data-bs-toggle="tooltip"
                href="http://www.linkedin.com/"
                target="_blank"
                title=""
                data-bs-original-title="Linkedin"
                aria-label="Linkedin"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li className="social-icons-youtube">
              <a
                data-bs-toggle="tooltip"
                href="http://www.youtube.com/"
                target="_blank"
                title=""
                data-bs-original-title="Youtube"
                aria-label="Youtube"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </li>
            <li className="social-icons-instagram">
              <a
                data-bs-toggle="tooltip"
                href="http://www.instagram.com/"
                target="_blank"
                title=""
                data-bs-original-title="Instagram"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;

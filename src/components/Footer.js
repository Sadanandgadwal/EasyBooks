import React from "react";
import "./Footer.css";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      {/* <section className="footer-subscription">
        <p className="footer-subscription-heading">
          When to use iterative development? You should use iterative
          development only on projects that you want to succeed.
        </p>
        <div className="input-areas">
          <form>
            <Button buttonStyle="btn--outline">Error Page</Button>
          </form>
        </div>
      </section> */}
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>About Us</h2>
            <a href="https://technicalrealitys.blogspot.com/" target="blank">
              Blog
            </a>
            <a href="https://github.com/Sadanandgadwal/" target="blank">
              GitHub
            </a>
            <a
              href="https://drive.google.com/file/d/1aAYadHfJCIlEoq0iLTNzF29XnXgXLfxn/view?usp=sharing/"
              target="blank"
            >
              Careers
            </a>
            <a
              href="https://drive.google.com/file/d/1JBxCBMmr7WRK-K-c8D8vWcVFsG4Mb5qw/view?usp=sharing/"
              target="blank"
            >
              Terms of Service
            </a>
          </div>
          <div class="footer-link-items">
            <h2>Contact Us</h2>
            <a href="https://www.instagram.com/sadanand_gadwal/" target="blank">
              Intagram official
            </a>
            <a href="https://www.instagram.com/module_security/" target="blank">
              Intagram
            </a>
            <a
              href="https://www.youtube.com/channel/UCZ0x6gN-uYBvJd2H8Wzdy4g/"
              target="blank"
            >
              Youtube
            </a>
            <Link to="/Email">Email</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Videos</h2>
            <a href="https://youtu.be/WGJJIrtnfpk" target="blank">
              Python
            </a>
            <a href="https://youtu.be/WGJJIrtnfpk/" target="blank">
              Java
            </a>
            <a href="https://youtu.be/o1IaduQICO0" target="blank">
              JavaScript
            </a>
            <a href="https://youtu.be/8PopR3x-VMY" target="blank">
              C programming
            </a>

            <a href="https://youtu.be/BClS40yzssA" target="blank">
              C++
            </a>
          </div>
          <div class="footer-link-items">
            <h2>Youtube Channels (we recommended)</h2>
            <a href="https://www.youtube.com/user/edurekaIN" target="blank">
              Edureka
            </a>
            <a
              href="https://www.youtube.com/user/programmingwithmosh"
              target="blank"
            >
              Programming with Mosh
            </a>
            <a
              href="https://www.youtube.com/channel/UCqrILQNl5Ed9Dz6CGMyvMTQ"
              target="blank"
            >
              Clever Programmer
            </a>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/#" className="social-logo">
              EasyBook
            </Link>
          </div>
          <small class="website-rights">EasyBook @ 2022 (Sadnand_Gadwal)</small>
          <div class="social-icons">
            <Link
              class="social-icon-link facebook"
              to="https://www.facebook.com/sadanandgadwal7"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>
            <Link
              class="social-icon-link instagram"
              to="https://www.instagram.com/sadanand_gadwal/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link
              class="social-icon-link youtube"
              to="https://www.youtube.com/channel/UCZ0x6gN-uYBvJd2H8Wzdy4g/"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="https://twitter.com/sadanand_u_g"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="https://www.linkedin.com/in/sadanand-gadwal/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;

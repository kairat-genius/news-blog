import React from "react";
import "./Footer.css";
import RssFeedRoundedIcon from "@mui/icons-material/RssFeedRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import RedditIcon from "@mui/icons-material/Reddit";

const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <div className="footer">
          <div className="footer-logo">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6Lq4743LMYu-vGYo9nIon1jnJtMHsPU_Fpw&s"
              alt=""
            />
            <p>copyright C 2020 | NBC NEWS</p>
          </div>
          <div className="footer-nav">
            <p>Privacy Policy</p>
            <p>Do not sell my personal info</p>
            <p>Term of service</p>
            <p>nbcnews.com Site Map</p>
          </div>
          <div className="social-media">
            <div className="info">
              <p>About</p>
              <p>Contact</p>
              <p>Careers</p>
              <p>Coupons</p>
            </div>
            <div className="social-icons">
              <RssFeedRoundedIcon
                style={{ fontSize: "44px", color: "#fff", cursor: "pointer" }}
              />
              <TwitterIcon
                style={{ fontSize: "48px", color: "#fff", cursor: "pointer" }}
              />
              <RedditIcon
                style={{ fontSize: "48px", color: "#fff", cursor: "pointer" }}
              />
              <FacebookIcon
                style={{ fontSize: "48px", color: "#fff", cursor: "pointer" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import "./Banner.css";
import { Button } from "./Button";

const Banner = () => {
  return (
    <div className="hero-container banner">
      <video id="background-video" autoplay loop muted>
        <source src="/client/public/videos/video-1.mp4" type="video/mp4" />
      </video>
      <h1>Welcome To Easy Books</h1>
      <p>We Have Around 100+ Books</p>
      <h6>One Click Download</h6>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log("hey")}
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
};

export default Banner;

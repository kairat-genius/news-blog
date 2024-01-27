import React from "react";
import "./Hero.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import IosShareIcon from "@mui/icons-material/IosShare";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

const Hero = () => {
  return (
    <div id="hero">
      <div className="container">
        <div className="hero">
          <div className="hero-img">
            {/* <div className="img"></div> */}
            <img src="data:image/jpeg;base64,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" alt="" />
          </div>
          <div className="hero-title">
            <div className="title-trending">
              <p>Trending</p>
              <div className="trending-icons">
                <FavoriteBorderIcon sx={{fontSize:"19px", cursor:"pointer"}}/>
                <IosShareIcon sx={{fontSize:"19px", cursor:"pointer"}}/>
                <BookmarkBorderIcon sx={{fontSize:"19px", cursor:"pointer"}}/>
              </div>
            </div>
            <div className="main-title">
              <h1>
                Cake meme reflects coronavirus absurdity in a world where
                nothing is what it seems
              </h1>
              <p>
                Earlier this month, a viral video depicting hyper-realistic
                cakes as everyday items had folks on social media
                double-guessing every other post, and sometimes even their own
                realities, effectively launching the next meme : “Is this real
                or is this cake?”
              </p>
            </div>
            <div className="title-time">
              <p>2 hours ago</p>
              <p>By Lucy Hiddleston | 4min read</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

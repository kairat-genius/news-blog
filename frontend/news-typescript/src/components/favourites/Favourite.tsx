import React from "react";
import "./Favourites.css";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";

const Favourite = () => {
  return (
    <div id="favourites">
      <div className="container">
        <h3>
          Editor's Picks <StarRateRoundedIcon />
        </h3>
        <div className="favourites">
          <div className="first-block">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6Lq4743LMYu-vGYo9nIon1jnJtMHsPU_Fpw&s"
              alt=""
            />
            <div className="first-title">
              <h4>
                Serological surveys are being conducted to test for coronavirus
                antibodies. How useful are they?
              </h4>
              <p>
                The authorities are hoping to find that a substantial proportion
                of the population has already been infected with the virus – and
                so is immune.
              </p>
            </div>
          </div>
          <div className="second-block">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6Lq4743LMYu-vGYo9nIon1jnJtMHsPU_Fpw&s"
              alt=""
            />
            <div className="second-title">
              <h4>
                Making a mark in Asia: East Bengal’s 2003 Asean Cup win – a
                defining moment for Indian club football
              </h4>
              <p>
                Beating some of the finest teams from South Asia, East Bengal
                became the first Indian club to win an officially recognised
                Asian football tournament.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favourite;

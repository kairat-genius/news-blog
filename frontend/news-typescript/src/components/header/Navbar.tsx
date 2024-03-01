import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ }) => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <p></p>
      <p>Poliyics</p>
      <p>Business</p>
      <p onClick={() => navigate("/sports")}>Sports</p>
      <p>Travel</p>
      <p>Podcasts</p>
    </div>
  );
};

export default Navbar;

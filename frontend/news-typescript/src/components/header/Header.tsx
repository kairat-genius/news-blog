import React, { useEffect } from "react";
import "./Header.css";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { useNavigate } from "react-router-dom";
import { useNews } from "../../context/NewsContext";
import Navbar from "./Navbar";

const Header = () => {
  const { news, getNews } = useNews();
  console.log(news.categories);
  const navigate = useNavigate();
  useEffect(() => {
    getNews();
  }, []);
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <div className="logo">
            <img
              onClick={() => navigate("/")}
              src="data:image/jpeg;base64,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"
              alt=""
            />
          </div>
          {news.categories.map((el:any) => <Navbar el={el}/>)}
          <div className="login-panel">
            <SearchIcon sx={{ fontSize: "31px", cursor: "pointer" }} />
            <AdminPanelSettingsIcon
              onClick={() => navigate("/admin")}
              sx={{ fontSize: "31px", cursor: "pointer" }}
            />
            <PersonIcon sx={{ fontSize: "31px", cursor: "pointer" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

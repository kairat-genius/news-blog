import React from "react";
import Logo from "../image/logo40.webp";
import SearchIcon from "@mui/icons-material/Search";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import AddIcon from "@mui/icons-material/Add";
import { Link, useNavigate } from "react-router-dom";
import { AccountCircle } from "@mui/icons-material";
import { Avatar } from "antd";
import { useAuthContext } from "../../context/AuthContext";
import { Badge } from "@mui/material";
import { useCartContext } from "../../context/CartContext";
import { ADMIN_USER } from "../../helpers/const";

const Header = () => {
  const { cart } = useCartContext();
  const { user } = useAuthContext();
  const navigate = useNavigate();
  console.log(user);
  return (
    <>
      <header id="header">
        <div className="container">
          <div className="header">
            <div className="logo">
              <img
                style={{ cursor: "pointer" }}
                src={Logo}
                onClick={() => navigate("/")}
              />
            </div>
            <div className="cart">
              {ADMIN_USER.map((el, index) =>
                user && el.email === user.email ? (
                  <AddIcon
                    key={index}
                    sx={{
                      fontSize: "32px",
                      fontWeight: "100",
                      color: "black",
                      cursor: "pointer",
                    }}
                    onClick={() => navigate("/admin")}
                  />
                ) : (
                  ""
                )
              )}

              <SearchIcon
                sx={{ fontSize: "32px", fontWeight: "100", cursor: "pointer" }}
              />
              <Badge color="secondary" badgeContent={cart?.products.length}>
                <LocalMallIcon
                  onClick={() => navigate("/cart")}
                  sx={{
                    fontSize: "32px",
                    fontWeight: "100",
                    cursor: "pointer",
                  }}
                />
              </Badge>

              {user ? (
                <Avatar src={user.photoURL} alt={user.displayName} />
              ) : (
                <AccountCircle
                  onClick={() => navigate("/registration")}
                  sx={{
                    fontSize: "32px",
                    fontWeight: "100",
                    cursor: "pointer",
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

import React from "react";
import Home from "../components/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sports from "../components/news-categories/sports/Sports";
import AdminPanel from "../admin/AdminPanel/AdminPanel";

const MainRoutes = () => {
  const ADMIN_ROUTES = [
    {link:"admin",element:<AdminPanel/>,id:1}
  ]
  const PUBLIC_ROUTES = [
    { link: "/", element: <Home />, id: 1 },
    { link: "/sports", element: <Sports />, id: 2 },
  ];
  return (
    <>
      <Routes>
        {PUBLIC_ROUTES.map((el) => (
          <Route path={el.link} element={el.element} key={el.id} />
        ))}
        {ADMIN_ROUTES.map((el) => (
          <Route path={el.link} element={el.element} key={el.id} />
        ))}
      </Routes>
    </>
  );
};

export default MainRoutes;

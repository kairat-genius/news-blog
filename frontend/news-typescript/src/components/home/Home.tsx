import React from "react";
import Header from "../header/Header";
import Hero from "../hero/Hero";
import NewsList from "../news-list/NewsList";
import Favourite from "../favourites/Favourite";
import Footer from "../footer/Footer";
import Form from "../../form/Form";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <NewsList />
      <Favourite />
      <Footer />
    </>
  );
};

export default Home;

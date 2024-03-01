import axios from "axios";
import React, { useContext, useState } from "react";
import { API } from "../helpers/const";
import { createContext } from "react";

const newsContext = createContext();
export const useNews = () => useContext(newsContext);

const NewsContext = ({ children }) => {
  const [news, setNews] = useState([]);

  async function getNews() {
    let res = await axios(API);
    setNews(res.data);
  }
  const values = {
    getNews,
    news,
  };
  return <newsContext.Provider value={values}>{children}</newsContext.Provider>;
};

export default NewsContext;

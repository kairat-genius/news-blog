import React, { useEffect, useState } from "react";
import "./Form.css";
import axios from "axios";
import { API } from "../helpers/const";

const Form = () => {
  const [news, setNews] = useState([]);
  async function getProduct() {
    let res = await axios(API);
    setNews(res.data);
  }
  console.log(news);
  useEffect(() => {
    getProduct()
  },[])

  return (
    <div id="form">
      <div className="form">
        <input className="name" type="text" placeholder="Введите названия" />
        <input className="image" type="text" placeholder="URL картинки" />
        <input className="title" type="text" placeholder="Заголовок" />
        <input className="category" type="text" placeholder="Категория" />
        <input className="description" type="text" placeholder="Под новость" />
        <div className="btns">
          <button className="create">Добавить</button>
          <button className="delete">Удалить</button>
          <button className="edit">Изменить</button>
        </div>
      </div>
    </div>
  );
};

export default Form;

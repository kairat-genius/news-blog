import axios from 'axios';
import React, { useState } from 'react';
import { API } from '../helpers/const';

const NewsContext = () => {
    const [news,setNews] = useState([])

    async function getNews(){
        let res = await (await axios.get(API)).data
    }
    return (
        <div>
            
        </div>
    );
};

export default NewsContext;
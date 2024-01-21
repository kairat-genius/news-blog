// DetailsPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const DetailsPage = () => {
  const { url } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8000/details/${url}/`)
      .then(res => {
        setDetails(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [url]);

  if (!details) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{details.title}</h2>
      <p>{details.text}</p>
      <p>{details.create_at}</p>
      <p>{details.urls}</p>
    </div>
  );
};

export default DetailsPage;

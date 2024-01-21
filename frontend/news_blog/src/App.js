import './App.css';
import axios from 'axios';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import DetailsPage from './components/DetailsPage';

class App extends React.Component {
  state = { details: [] };

  componentDidMount() {
    axios.get('http://localhost:8000')
      .then(res => {
        this.setState({
          details: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <Router>
        <div>
          <header>Данные бэкенда</header>
          <hr></hr>
          <Routes>
            <Route path="/" element={<Home details={this.state.details} />} />
            <Route path="/details/:url" element={<DetailsPage />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

function Home(props) {
  return (
    <>
      {props.details.map((output, id) => (
        <div key={id}>
          <div>
            <Link to={`/details/${output.urls}/`}><h2>{output.title}</h2></Link>
            <p>{output.text}</p>
            <p>{output.create_at}</p>
            <p>{output.urls}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default App;


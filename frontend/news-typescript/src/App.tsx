import React from 'react';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import NewsList from './components/news-list/NewsList';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <NewsList/>
    </div>
  );
}

export default App;

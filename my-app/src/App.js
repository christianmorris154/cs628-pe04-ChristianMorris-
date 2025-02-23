import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import AddCity from './AddCity';
import CitiesList from './CitiesList';
import CityDetails from './CityDetails';
import './index.css';

function App() {
  const [cities, setCities] = useState([]);

  const addCity = city => {
    setCities([...cities, city]);
  };

  return (
    <Router>
      <div className='container'>
        <div className='banner'>
          <h1>Cities Application</h1>
          <nav className='banner-links'>
            <Link to='/'>Add City</Link>
            <Link to='/cities'>City List</Link>
          </nav>
        </div>
        <div className='navigation'>
        </div>
        <Routes>
          <Route path='/' element={<AddCity addCity={addCity} />} />
          <Route path='/cities/*' element={<CitiesList cities={cities} />}/>
          <Route path='/cities/:cityId' element={<CityDetails cities={cities} />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

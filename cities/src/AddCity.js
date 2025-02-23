import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

function AddCity({ addCity }) {
  const navigate = useNavigate();
  const [cityName, setCityName] = useState('');
  const [cityCountry, setCityCountry] = useState('');
  const [cityPopulation, setCityPopulation] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    const newCity = {
      id: Date.now(), 
      name: cityName,
      country: cityCountry,
      population: cityPopulation,
    };
    addCity(newCity);

 
    navigate('/cities');
  };

  return (
    <div>
      <form className='add-city-form' onSubmit={handleSubmit}>
      <h2>Add City</h2>
        <div className='input-name'>
          <label>City Name: </label>
          <input 
            type='text-label'
            id='cityName'
            value={cityName}
            onChange={e => setCityName(e.target.value)}
          />
        </div>
        <div className='input-country'>
          <label>Country:    </label>
          <input 
            type='text'
            id='cityCountry'
            value={cityCountry}
            onChange={e => setCityCountry(e.target.value)}
          />
        </div>
        <div className='input-population'>
          <label>Population: </label>
          <input 
            type='number'
            id='cityPopulation'
            value={cityPopulation}
            onChange={e => setCityPopulation(e.target.value)}
          />
        </div>
        <button type='submit'>Add City</button>
      </form>
    </div>
  ); 
}

export default AddCity;
import React from 'react';
import { useParams } from 'react-router-dom';
import './index.css';

function CityDetails({ cities }) {
  const { cityId } = useParams();
  const city = cities.find(city => city.id === parseInt(cityId));

  return (
    <div>
        <form className='city-detail-form'>
      <h2>Cities Application</h2>
      <p>Name: {city.name}</p>
      <p>Country: {city.country}</p>
      <p>Population: {city.population}</p>
      </form>
    </div>
  );
}

export default CityDetails;
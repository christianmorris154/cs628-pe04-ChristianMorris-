import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

function CitiesList({ cities }) {
  return (
    <div>
        <form className='city-list-form'>
      <ul>
        {cities.map(city => (
          <li key={city.id}>
            <Link to={`/cities/${city.id}`}>{city.name}</Link>
          </li>
        ))}
      </ul>
        </form>
    </div>
  );
}

export default CitiesList;
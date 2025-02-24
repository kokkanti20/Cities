import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import CityList from './components/CityList';
import AddCity from './components/AddCity';
import CityDetails from './components/CityDetails';
import './styles.css';

const App = () => {
  const [cities, setCities] = useState([
    { id: 1, name: 'Seattle', country: 'USA', population: '764,753' },
    { id: 2, name: 'Hyderabad', country: 'India', population: '1,463,865,525' },
  ]);

  const addCity = (newCity) => {
    setCities([...cities, newCity]);
  };

  return (
    <div>
      <nav>
        <Link to="/cities">Cities List</Link> |{' '}
        <Link to="/add-city">Add City</Link>
      </nav>
      <Routes>
        <Route path="/cities" element={<CityList cities={cities} />} />
        <Route path="/cities/:id" element={<CityDetails cities={cities} />} />
        <Route path="/add-city" element={<AddCity addCity={addCity} />} />
        <Route path="/" element={<CityList cities={cities} />} />
      </Routes>
    </div>
  );
};

export default App;
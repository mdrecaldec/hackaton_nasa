// App.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ApodCard from './components/ApodCard';
import DatePicker from './components/DatePicker';
import Loader from './components/Loader';
import './App.css';

const App = () => {
  const [apodData, setApodData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');

  const API_KEY = 'TU_API_KEY';
  const baseUrl = 'https://api.nasa.gov/planetary/apod'; //llamo a la api que escogi de la nasa//

  const fetchApod = async (date) => {
    setLoading(true);
    try {
      const response = await axios.get(baseUrl, {
        params: { api_key: API_KEY, date },
      });
      setApodData(response.data);
    } catch (error) {
      console.error('Error fetching APOD:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApod(); // Fetch the default image of the day on load
  }, []);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    fetchApod(date);
  };

  return (
    <div className="container my-5">
      <nav className="navbar">
        <div className="logo">W</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#content">Content</a></li>
          <li><a href="#login">Login</a></li>
        </ul>
      </nav>
      <div className="hero-content text-center">
        <h1 className="text-light">EXPLORA</h1>
        <p className="text-light">Descubre una imagen increíble sobre los cosmos cada día.</p>
        <h2 className="text-primary">OUTER SPACE</h2>
      </div>
      <DatePicker onDateChange={handleDateChange} />
      {loading ? <Loader /> : apodData && (
        <ApodCard
          title={apodData.title}
          imageUrl={apodData.url}
          description={apodData.explanation}
          date={apodData.date}
        />
      )}
    </div>
  );
};

export default App;


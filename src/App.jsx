import axios from 'axios';
import './App.css';
import { useState } from 'react';
import Weather from './components/Weather';

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const API_KEY = "6a7e3ab7349738ddd33a061acea5b4dc";

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`;

      axios.get(url)
        .then((response) => {
          console.log(response.data);
          setData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching the weather data", error);
        });

      setLocation("");
    }
  };

  return (
    <div className='w-full h-full relative'>
      <div className='text-center p-4'>
        <input 
          type="text"
          className='py-3 px-6 w-[700px] text-lg rounded-3xl border border-gray-200 text-gray-600 placeholder:text-gray-400 focus:outline-none bg-white-600/100 shadow-md'
          placeholder='Enter Location'
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyDown={searchLocation}
        />
      </div>
      {/* {data.main && (
        <div className='text-center p-4'>
          <h2>{data.name}</h2>
          <p>{Math.round(data.main.temp - 273.15)}°C</p>
          <p>{data.weather[0].description}</p>
        </div>
      )} */}
      <Weather weatherData = {data}/>
    </div>
  );
}

export default App;

import React from 'react';

const Weather = ({ weatherData }) => {
  return (
    <div>
      {weatherData.weather ? (
           <div className='card w-[500px] h-[250px] m-auto relative px-6 top-[10%]'>
          <div className="flex justify-between w-full">
            <div className='w-1/2 my-4 mx-auto flex justify-between items-center'>
              <div className="flex flex-col items-start justify-between h-full">
                <div>
                  <p className='text-xl'>
                    {weatherData.name}, {weatherData.sys.country}
                  </p>
                  <p className='text-xl'>
                    {weatherData.weather[0].main}
                  </p>
                  <p className='text-sm'>
                    {weatherData.weather[0].description}
                  </p>
                </div>
                <div className='text-6xl font-mono'>
                  {weatherData.main.temp.toFixed()}°C
                </div>
              </div>
            </div>
            <div className="w-1/2 flex flex-col justify-between items-end">
              <div className='relative'>
                <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                     className='w-[120px]'/>
              </div>
            </div>
          </div>
          <div className='flex flex-col justify-between gap-x-8'>
            <p>Feels Like: {weatherData.main.feels_like.toFixed()}°C</p>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-[250px]">
          No weather data available
        </div>
      )}
    </div>
  );
};

export default Weather;

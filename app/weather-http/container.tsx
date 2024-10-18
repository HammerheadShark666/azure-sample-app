"use client"

import Forecasts from "../weather-http/table" 
import useSWR, { useSWRConfig } from "swr"; 
import { getWeatherForecasts, getWeatherForecastUrl } from "../api/WeatherForecastApi"; 

export default function Container() {
  
    const { mutate } = useSWRConfig();    
    const { data, error, isLoading } = useSWR(getWeatherForecastUrl, getWeatherForecasts);

    const handleClick = () => {
      mutate(getWeatherForecastUrl); 
    }; 
  
    if (error) return <p>Failed to load. {error.message}</p> 
    if (isLoading) return <p>Loading...</p>
    
  
  return (
    <div>          
      <button onClick={handleClick}>Send Data to Parent</button>
      <Forecasts forecasts={data} />    
    </div>
  );
}
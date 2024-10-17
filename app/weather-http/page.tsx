"use client"

import { useState } from "react";
import GetForecastDataButton from "./getForecastDataButton";
import Forecasts from "../weather-http/table"
import { IForecast }  from "../weather-http/types"

export default function Page() { 
 
  const [forecasts, setForecasts] =  useState<IForecast[]>([]);

  function handleForecastsFromButton(data : IForecast[]) {
    setForecasts(data);
  }

  return (
    <div>    
      <GetForecastDataButton forecasts={handleForecastsFromButton}></GetForecastDataButton>      
      <Forecasts forecasts={forecasts} />    
    </div>
  );
}
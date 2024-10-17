 "use client"

import { useState } from "react";
import GetForecastDataButton from "./getForecastDataButton";
import Forecasts from "../weather-http/table"
import { IForecast }  from "../weather-http/types"

export default function Page() { 
 
  const [dataFromChild, setDataFromChild] =  useState<IForecast[]>([]);

  function handleDataFromChild(data : IForecast[]) {
    setDataFromChild(data);
  }

  return (
    <div>    
      <GetForecastDataButton sendDataToParent={handleDataFromChild}></GetForecastDataButton>      
      <Forecasts forecasts={dataFromChild} />    
    </div>
);} 
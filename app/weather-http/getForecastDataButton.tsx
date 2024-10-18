
import { IForecast }  from "../weather-http/types"
 
interface ForecastsProps {
  forecasts: (data: IForecast[]) => void; 
}
 
export default function GetForecastDataButton({forecasts} : ForecastsProps ) {
 
  const handleClick = () => {

    const fetchData = async () => {
      const res = await fetch('http://localhost:5064/weatherforecast'); // https://asp-azure-sample-app-nextjs.azurewebsites.net/weatherforecast
      forecasts(await res.json());
    };
    
    fetchData(); 
  }; 
  
  return (
    <div> 
      <button onClick={handleClick}>Send Data to Parent</button>
    </div>
  );
}
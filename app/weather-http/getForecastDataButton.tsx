
import { IForecast }  from "../weather-http/types"
 
interface ChildProps {
    sendDataToParent: (data: IForecast[]) => void; 
  }
 
export default function GetForecastDataButton({sendDataToParent } : ChildProps ) {
 
  const handleClick = () => {

    const fetchData = async () => {
      const res = await fetch('https://asp-azure-sample-app-nextjs.azurewebsites.net/weatherforecast'); //http://localhost:5064/weatherforecast
      sendDataToParent(await res.json());
    };
    
    fetchData(); 
  }; 
  
  return (
    <div> 
      <button onClick={handleClick}>Send Data to Parent</button>
    </div>
  );
}
import { IForecast }  from "../weather-http/types"

  type ForecastsProps = {
    forecasts: IForecast[];
  };

export default function Forecasts( props: ForecastsProps ) {

    return (
        <div> 
          {props && (
            <div> 
            <table className="weather-forecast-table">
            <thead>
              <tr>
                <th className="forecast-id">Id</th>
                <th className="forecast-date">Date</th>
                <th className="forecast-tempratureC">TemperatureC</th>
                <th className="forecast-summary">Summary</th>
                <th className="forecast-temperatureF">TemperatureF</th>
              </tr>
            </thead>
            <tbody>
              {props.forecasts.map((forecast: IForecast) => (
        
                  <tr key={forecast.id}>
                      <td className="forecast-id">{forecast.id}</td>
                      <td className="forecast-date">{forecast.date}</td>
                      <td className="forecast-tempratureC">{forecast.temperatureC}</td>
                      <td className="forecast-summary">{forecast.summary}</td>
                      <td className="forecast-temperatureF">{forecast.temperatureF}</td>
                  </tr> 
              ))} 
            </tbody>
            </table>  
          </div>
          )}
        </div>
      );
}
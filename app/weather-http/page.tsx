
// export default async function Page() {

//   return (<h1>FETCH</h1>)
// }


import "../globals.css"

interface Props { 
          id: number,
          date: string;
          temperatureC: number;
          summary: string;
          temperatureF: number;
        }

// async function loadData() {
//   const res = await fetch('http://localhost:5064/weatherforecast');
//   const forecasts = await res.json();

//   return forecasts;
// }

async function fetchdetails() {

    const response = await fetch(
      "https://asp-azure-sample-app-nextjs.azurewebsites.net/weatherforecast", {
        method: "GET"
      }
    );

    if (response.ok) {
      const responseBody = await response.json();
      // console.log(`data ${data}`);
      // setData(responseBody);
      console.log(`data ${responseBody}`);
      return responseBody;
    }
  }

export default async function Page() {

  const data = await fetchdetails();

  return (
    <div>
      <h1>Weather Http</h1>

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

        {data.map((forecast: Props) => (
 
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


//       {/* <ul>
//         {data.map((forecast: Props) => (
//           <li key={forecast.summary}>{forecast.date}</li>
//         ))}
//       </ul> */}


//       {/* <ul>
//         {forecasts.map((forecast) => (
//           <li key={post.id}>{post.title}</li>
//         ))}
//       </ul> */}
      
     </div>
   );
 }



// async function fetchdetails() {

//     const response = await fetch(
//       "http://localhost:5064/weatherforecast", {
//         method: "GET"
//       }
//     );

//     if (response.ok) {
//       const responseBody = await response.json();
//       // console.log(`data ${data}`);
//       // setData(responseBody);
//       console.log(`data ${responseBody}`);
//       return responseBody;
//     }
//   }


// export default async function Page() {

//     interface Props { 
//         strDate: string;
//         decTemperatureC: number;
//         strSummary: string;
//         decTemperatureF: number;
//       }


      

//     const data = await fetchdetails();

//     //const data = await fetch('http://localhost:5064/weatherforecast')
//     //const forecasts = await data.json()
//     return (

//         <table>

//             <thead>
//         <tr>
//           <th>Date</th>
//           <th>TemperatureC</th>
//           <th>Summary</th>
//           <th>TemperatureF</th>
//         </tr>
//         </thead>
//         <tbody>

//         {data.map(function (item: Props) {
 
//             <tr key={item.strDate}>
//                 <td>{item.strDate}</td>
//                 <td>{item.decTemperatureC}</td>
//                 <td>{item.strSummary}</td>
//                 <td>{item.decTemperatureF}</td>
//             </tr> 
//         })}

//          {/* {forecasts.map((forecast) => ( */}

//         {/* ))}  */}
//         </tbody>
//       </table>  
 

//     //   <ul>
//     //     {forecasts.map((forecast) => (
//     //       <li key={forecast.temperatureC}>{forecast.date}</li>
//     //     ))}
//     //   </ul>
//     )
//   }

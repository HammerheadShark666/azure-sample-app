
export const getWeatherForecastUrl = 'https://asp-azure-sample-app-nextjs.azurewebsites.net/weatherforecast';

export const fetcher = async (url: string) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('An error occurred while fetching the data.' + response.status);
  }

  return response.json();
};

// Define a function to get weather forecast data
export const getWeatherForecasts = async () => {
  return fetcher(getWeatherForecastUrl);
};
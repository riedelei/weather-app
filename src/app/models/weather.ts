
export interface Weather {
  id: bigint,
  main: string, // "Rain"
  description: string, // moderate Rain
  temp: number,
  feels_like: number,
  temp_min: number,
  temp_max: number,
  pressure: number,
  humidity: number,
  sea_level: number,
  grnd_level: number,
  windSpeed: number,
  sunrise: number,
  sunset: number,
  clouds: number,
  rain: number,
  lon: number,
  lat: number
}

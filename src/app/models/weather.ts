import {WeatherCondition} from "./weatherCondition";

export interface Weather {
  id?: number,
  city?: string,

  temp?: number,
  feels_like?: number,
  temp_min?: number,
  temp_max?: number,
  pressure?: number,
  humidity?: number,
  sea_level?: number,
  grnd_level?: number,
  windSpeed?: number,
  sunrise?: bigint,
  sunset?: bigint,
  clouds?: number,
  rain?: number,
  lon?: number,
  visibility?: bigint
  lat?: number,
  weatherCondition?: WeatherCondition[]
}

export class WeatherClass implements Weather{
  constructor (id: number,
               city: string,
               temp: number,
               feels_like: number,
               temp_min: number,
               temp_max: number,
               pressure: number,
               humidity: number,
               sea_level: number,
               grnd_level: number,
               windSpeed: number,
               sunrise: bigint,
               sunset: bigint,
               clouds: number,
               rain: number,
               lon: number,
               visibility: bigint,
               lat: number) {}
}

import { Lato } from 'next/font/google'

import { Temperature, TemperatureProps } from '@/components/Temperature'
import { AirQuality, AirQualityProps } from '@/components/AirQuality'
import { WeekWeather } from '@/components/WeekWeather'
import axios from 'axios'
import {useEffect, useState } from 'react'
import { SunTIme,SuntimeProps } from '@/components/SunTIme'


const lato = Lato({ subsets: ['latin'] , weight:['400','700']})



export default function Home() {
  const [airQuality, setAirQuality] = useState<AirQualityProps>({
    pm2_5: 0, 
    pm10 : 0, 
    no2: 0, 
    so2: 0, 
    o3: 0, 
    co: 0
  }
  )
  const [temparature, setTemparature] = useState<TemperatureProps>({
    local:"",
    actualDegrees:0,
    maxDegrees:0,
    minDegrees:0,
    windAmount:0,
    humityAmount:0,
    rainAmount:0
  }
  )
  const [sunTime, setSunTime] = useState<SuntimeProps>({
    sunrise:"",
    sunset:""
  }
    )
  let apiKey = process.env.NEXT_PUBLIC_API_KEY
   


  useEffect(()=>{
    getData()
  },[])

  async function getData() {
    try {
      const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=177.126.97.133&days=5&aqi=yes&alerts=no`);
      console.log(apiKey)
      const data = response.data
      const actualDegrees = data.current.temp_c
      const maxDegrees = data.forecast.forecastday[0].day.maxtemp_c
      const minDegrees = data.forecast.forecastday[0].day.mintemp_c
      const windAmount = data.forecast.forecastday[0].day.avgvis_km
      const humityAmount = data.forecast.forecastday[0].day.avghumidity
      const rainAmount = data.forecast.forecastday[0].day.daily_chance_of_rain
      const sunrise = data. forecast.forecastday[0].astro.sunrise
      const sunset = data. forecast.forecastday[0].astro.sunset
      const local = data.location.name
      const code = data.current.condition.code

      setAirQuality(data.current.air_quality)
      setTemparature({
        code,
        local,
        actualDegrees,
        maxDegrees,
        minDegrees,
        windAmount,
        humityAmount,
        rainAmount
      })
      setSunTime({sunrise, sunset})
      localStorage.setItem("data",JSON.stringify(data))
    } catch (error) {
      console.error(error);
    }
  }
  


  return (
    <main className={`${lato.className} `}>
      <Temperature
        local={temparature.local}
        code={temparature.code}
        actualDegrees={temparature.actualDegrees}
        minDegrees={temparature.minDegrees}
        maxDegrees={temparature.maxDegrees}
        windAmount={temparature.windAmount}
        humityAmount={temparature.humityAmount}
        rainAmount={temparature.rainAmount}
      />

      <AirQuality 
        pm2_5={airQuality.pm2_5}
        pm10={airQuality.pm10}
        so2={airQuality.so2}
        no2={airQuality.no2}
        o3={airQuality.o3}
        co={airQuality.co}
        />

      <SunTIme  
        sunrise={sunTime.sunrise}
        sunset={sunTime.sunset}
      />

      <WeekWeather />
     
    </main>
  )
}

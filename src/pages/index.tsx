import { Lato } from 'next/font/google'

import Image from 'next/image'
import SunTime from '@/assets/sun-time.svg'
import SunChart from '@/assets/sun-chart.svg'
import { Temperature, TemperatureProps } from '@/components/Temperature'
import { AirQuality, AirQualityProps } from '@/components/AirQuality'
import { WeekWeather } from '@/components/WeekWeather'
import axios from 'axios'
import {useEffect, useState } from 'react'

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

  useEffect(()=>{
    getData()
  },[])

  async function getData() {
    try {
      const response = await axios.get('/api');
      const data = response.data.result
      const actualDegrees = data.current.temp_c
      const maxDegrees = data.forecast.forecastday[0].day.maxtemp_c
      const minDegrees = data.forecast.forecastday[0].day.mintemp_c
      const windAmount = data.forecast.forecastday[0].day.avgvis_km
      const humityAmount = data.forecast.forecastday[0].day.avghumidity
      const rainAmount = data.forecast.forecastday[0].day.daily_chance_of_rain
      
      setAirQuality(data.current.air_quality)
      setTemparature({
        local:"São Paulo",
        actualDegrees,
        maxDegrees,
        minDegrees,
        windAmount,
        humityAmount,
        rainAmount
      })
      localStorage.setItem("data",JSON.stringify(data))
      console.log(temparature)
    } catch (error) {
      console.error(error);
    }
  }
  


  return (
    <main className={`${lato.className} `}>
      <Temperature
        local={temparature.local}
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


      <section className="sun-time">
        <h2 className="text-[1.6rem] text-[#dad8f7] font-bold flex items-center justify-center gap-[0.8rem] mt-[3rem]">
          <Image
            src={SunTime}
            alt="icone de um sol com um relógio dentro"
          />
          Horário do sol
        </h2>
        <div className="sun-chart-wrapper">
          <div className="sun-chart">
            <div className="chart">
              <Image
                src={SunChart}
                alt="imagem de um gráfico semi circulo com traços"
              />
            </div>
            <time className="now">17:48</time>
          </div>
        </div>
        <div className="time">
          <time className="sunrise">06:00</time>
          <time className="sunset">18:52</time>
        </div>
      </section>

      <WeekWeather />
     
    </main>
  )
}

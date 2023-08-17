import { Lato } from 'next/font/google'

import Image from 'next/image'
import SunTime from '@/assets/sun-time.svg'
import SunChart from '@/assets/sun-chart.svg'
import { Temperature } from '@/components/Temperature'
import { AirQuality } from '@/components/AirQuality'
import { WeekWeather } from '@/components/WeekWeather'
import axios from 'axios'
import { useEffect } from 'react'

const lato = Lato({ subsets: ['latin'] , weight:['400','700']})

async function getData() {
  try {
    const response = await axios.get('/api');
    const data = response.data.result
    localStorage.setItem("data",JSON.stringify(data))
  } catch (error) {
    console.error(error);
  }
}


export default function Home() {
  useEffect(()=>{
    getData()
  },[])
  return (
    <main className={`${lato.className} `}>
      <Temperature
        local='São Paulo,SP'
        actualDegrees={18}
        minDegrees={16}
        maxDegrees={22}
        windAmount={17}
        humityAmount={31}
        rainAmount={10}
      />

      <AirQuality 
        pm25={12.9}
        pm10={12.9}
        so2={2.1}
        no2={1.4}
        o3={21.2}
        co={2.1}
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

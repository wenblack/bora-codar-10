import Image from "next/image"
import SunTime from '@/assets/sun-time.svg'
import SunChart from '@/assets/sun-chart.svg'
import { useEffect, useState } from "react"

export interface SuntimeProps {
    sunrise: string,
    sunset: string
}

export function SunTIme ({sunrise, sunset}:SuntimeProps){
    const [time, setTime] = useState('')

    function getTime (){
        const currentDate = new Date();
        const currentHour = currentDate.getHours(); 
        const currentMinute = currentDate.getMinutes();
        setTime(`${currentHour}:${currentMinute}`)
    }
    useEffect(()=>{
        getTime()
    },[])


    return(      
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
          <time className="now">{time}</time>
        </div>
      </div>
      <div className="time">
        <time className="sunrise">{sunrise}</time>
        <time className="sunset">{sunset}</time>
      </div>
    </section>
    )
}
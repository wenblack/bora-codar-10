import LeafIcon from '@/assets/leaf.svg'
import Image from 'next/image'
import { useEffect, useState } from 'react'


interface AirQualityProps {
    pm25 : number
    pm10 : number
    no2: number
    so2: number
    o3: number
    co: number
}

export function AirQuality ({co, no2, o3, pm10, pm25, so2}:AirQualityProps){
    const[quality, setQuality] = useState("")
    const [result, setResult] = useState(0)
    
    function setAQI (){
        if (o3 <=50){
            setQuality('Boa')
            setResult(Math.floor(o3))
        } else if ( o3 <= 100){
            setQuality('Moderada')
            setResult(Math.floor(o3))
        } else if( o3 <= 150){
            setQuality('Inadequada')
            setResult(Math.floor(o3))
        } else if (o3 <=200){
            setQuality('Ruim')
            setResult(Math.floor(o3))
        }else {
            setQuality('Péssima')
            setResult(Math.floor(o3))
        }
    }
    
    useEffect(()=>{
        setAQI()
    })

    return(
        <section className="air-quality">
        <h2 className="title">
          <Image src={LeafIcon} alt="icone de folha de árvore" />
          Qualidade do ar
        </h2>

        <p className="good">{quality}</p>
        <p className="number">{result}</p>

        <div className="info">
          <div className="number">
            <p>{pm25}</p>
            <small>PM2.5</small>
          </div>
          <div className="number">
            <p>{pm10}</p>
            <small>PM10</small>
          </div>
          <div className="number">
            <p>{so2}</p>
            <small>SO₂</small>
          </div>
          <div className="number">
            <p>{no2}</p>
            <small>NO₂</small>
          </div>
          <div className="number">
            <p>{o3}</p>
            <small>O₃</small>
          </div>
          <div className="number">
            <p>{co}</p>
            <small>CO</small>
          </div>
        </div>
      </section>
    )
}
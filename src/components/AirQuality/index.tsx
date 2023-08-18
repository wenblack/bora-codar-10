import LeafIcon from '@/assets/leaf.svg'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { data } from '@/pages/api'
export interface AirQualityProps {
    pm2_5: number 
    pm10 : number 
    no2: number 
    so2: number 
    o3: number 
    co: number
}

export function AirQuality ({co, no2, o3, pm10, pm2_5, so2}:AirQualityProps){
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
        <section className=" text-center text-[#dad8f7]  font-bold">
        <h2 className="text-[1.6rem] flex items-center justify-center gap-[0.8rem] mt-[3rem]">
          <Image src={LeafIcon} alt="icone de folha de árvore" />
          Qualidade do ar
        </h2>

        <p className="mt-[2rem] text-[1.8rem] text-[#87ebcd]">{quality}</p>
        <p className="mt-[0.4rem] text-[4rem] text-[#e7e6fb]">{result}</p>

        <div className="flex items-center mt-[3.2rem] px-[1.6rem] pb-[1.6rem] justify-around">
          <div className="">
            <p className='text-[#87ebcd] text-[1.4rem]'>{pm2_5}</p>
            <small className='text-[1.2rem] text-[#3e7e6fb]'>PM2.5</small>
          </div>
          <div className="number">
            <p className='text-[#87ebcd] text-[1.4rem]'>{pm10}</p>
            <small className='text-[1.2rem] text-[#3e7e6fb]'>PM10</small>
          </div>
          <div className="number">
            <p className='text-[#87ebcd] text-[1.4rem]'>{so2}</p>
            <small className='text-[1.2rem] text-[#3e7e6fb]'>SO₂</small>
          </div>
          <div className="number">
            <p className='text-[#87ebcd] text-[1.4rem]'>{no2}</p>
            <small className='text-[1.2rem] text-[#3e7e6fb]'>NO₂</small>
          </div>
          <div className="number">
            <p className='text-[#87ebcd] text-[1.4rem]'>{o3}</p>
            <small className='text-[1.2rem] text-[#3e7e6fb]'>O₃</small>
          </div>
          <div className="number">
            <p className='text-[#87ebcd] text-[1.4rem]'>{co}</p>
            <small className='text-[1.2rem] text-[#3e7e6fb]'>CO</small>
          </div>
        </div>
      </section>
    )
}
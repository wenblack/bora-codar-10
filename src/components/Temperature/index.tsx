import Image from 'next/image'
import LocationIcon from '@/assets/pin.svg'
import { StatusBox } from '../StatsBox'



export function Temperature (){
    return(
        <section className={"grid grid-cols-1 sm:min-h-[40px] before:content-[''] before:w-[17.6rem]  before:absolute before:top-[-5.6rem] before:left-[-5.6rem] before:h-[17.6rem] before:bg-[url(../assets/clouds.svg)]  h-max bg-[url(../assets/bg-temp-now.jpeg)] auto-cols-max"}>
        <div className={"flex  w-full pt-[3.2rem] px-[3.2rem] justify-end items-center gap-[0.4rem]"}>
          <Image 
            src={LocationIcon} 
            alt="icone de localizacao" 
          />
          <strong className='text-[1.4rem] text-[#c2bff4]'>Rio do Sul, SC</strong>
        </div>
        <div className="m-[6rem] pb-[4rem] font-bold flex justify-center gap-[0.4rem]">
          <div className=" flex text-center text-[8.8rem] text-white  flex-col gap-[0.4rem]">
            18
            <div className="text-[2rem]">22° <span className='text-[#c2bff4]'>16° </span></div>
          </div>
          <div className="text-[2.4rem] text-[#dad8f7] mt-[1.5rem]">°C</div>
        </div>
        <div className="p-[1.2rem] flex gap-[0.8rem]">
          <StatusBox type='wind' value={17}/>
          <StatusBox type='humity' value={31}/>
          <StatusBox type='rain' value={10}/>
        </div>
      </section>
    )
}
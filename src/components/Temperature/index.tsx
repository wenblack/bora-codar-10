import Image from 'next/image'
import LocationIcon from '@/assets/pin.svg'
import { StatusBox } from '../StatsBox'

export interface TemperatureProps {
  code?: string
  local: string
  actualDegrees: number
  maxDegrees: number
  minDegrees: number
  windAmount: number
  humityAmount: number
  rainAmount: number
}


export function Temperature({ code, local, actualDegrees, maxDegrees, minDegrees, windAmount, rainAmount, humityAmount }: TemperatureProps) {
  let path = '/files/conditions/day'
  return (
    <section id='temperature-now' className={`grid grid-cols-1 sm:min-h-[40px]  h-max bg-[url(../assets/bg-temp-now.jpeg)] auto-cols-max`}>
      <div className={"flex  w-full pt-[3.2rem] px-[3.2rem] justify-end items-center gap-[0.4rem]"}>
        <span className='self-start w-full m-[-20px]'>
          <Image
            src={`${path}/${code}.png`}
            width={80}
            height={80}
            alt="icone de localizacao"
          />
        </span>
        <Image
          src={LocationIcon}
          alt="icone de localizacao"
        />

        <strong className='text-[1.4rem] text-[#c2bff4]'>{local}</strong>
      </div>
      <div className="m-[6rem] pb-[4rem] font-bold flex justify-center gap-[0.4rem]">
        <div className=" flex text-center text-[8.8rem] text-white  flex-col gap-[0.4rem]">
          {actualDegrees}
          <div className="text-[2rem]">{maxDegrees}° <span className='text-[#c2bff4]'>{minDegrees}° </span></div>
        </div>
        <div className="text-[2.4rem] text-[#dad8f7] mt-[1.5rem]">°C</div>
      </div>
      <div className="p-[1.2rem] flex gap-[0.8rem]">
        <StatusBox type='wind' value={windAmount} />
        <StatusBox type='humity' value={humityAmount} />
        <StatusBox type='rain' value={rainAmount} />
      </div>
    </section>
  )
}
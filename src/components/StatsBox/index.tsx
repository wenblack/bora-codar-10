import Image from 'next/image'
import WindIcon from '@/assets/temp-wind.svg'
import HumidityIcon from '@/assets/temp-humidity.svg'
import Rain from '@/assets/temp-rain.svg'


interface BoxProps {
  value: number
  type: "wind" | "humity" | "rain"
}

export function StatusBox({ value, type }: BoxProps) {
  if (type === 'wind') {
    return (
      <div className=" flex flex-1 py-[1rem] px-[1.6rem] bg-bgImage rounded-[0.6rem] items-center gap-[1.2rem]">
        <Image src={WindIcon} alt="icone de vento" />
        <div className="text-[#e7e6fb]">
          <p className='text-[1.2rem]'>Vento</p>
          <h5 className='text-[1.8rem] flex items-baseline gap-[0.4rem]'>
            {value}<span className='text-[1.2rem]'>km/h</span>
          </h5>
        </div>
      </div>
    )
  }
  if (type === 'humity') {
    return (
      <div className=" flex flex-1 py-[1rem] px-[1.6rem] bg-bgImage  rounded-[0.6rem] items-center gap-[1.2rem]">
        <Image src={HumidityIcon} alt="icone de umidade" />
        <div className="text-[#e7e6fb]">
          <p className='text-[1.2rem]'>Umidade</p>
          <h5 className='text-[1.8rem] flex items-baseline gap-[0.4rem]'>
            {value}<span className='text-[1.2rem]'>%</span>
          </h5>
        </div>
      </div>
    )
  } return (
    <div className=" flex flex-1 py-[1rem] px-[1.6rem] bg-bgImage  rounded-[0.6rem] items-center gap-[1.2rem]">
      <Image src={Rain} alt="icone de chuva" />
      <div className="text-[#e7e6fb]">
        <p className='text-[1.2rem]'>Chuva</p>
        <h5 className='text-[1.8rem] flex items-baseline gap-[0.4rem]'>
          {value} <span className='text-[1.2rem]'>%</span></h5>
      </div>
    </div>
  )
}
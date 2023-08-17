import CloudsIcon from '@/assets/weather-clouds.svg'
import SunIcon from '@/assets/weather-sun.svg'
import ThunderIcon from '@/assets/weather-thunder.svg'
import CloudyIcon from '@/assets/weather-cloudy.svg'
import RainIcon from  '@/assets/weather-rain.svg'
import Image from 'next/image'

export function WeekWeather (){
    return(
        <section id='week-weather' className="flex  p-[4rem] font-bold justify-around gap-[1.2rem]">
        <div className=" flex flex-col items-center justify-center gap-[1.6rem]">
          <h4 className="text-[1.4rem] text-[#dad8f7]">Amanhã</h4>
          <Image src={CloudsIcon} alt="" />
          <p className="font-bold text-white text-[1.6rem]">21° <span>16°</span></p>
        </div>

        <div className=" flex flex-col items-center justify-center gap-[1.6rem]">
          <h4 className="text-[1.4rem] text-[#dad8f7]">Sexta</h4>
          <Image src={SunIcon} alt="" />
          <p className="font-bold text-white text-[1.6rem]">28° <span>16°</span></p>
        </div>

        <div className=" flex flex-col items-center justify-center gap-[1.6rem]">
          <h4 className="text-[1.4rem] text-[#dad8f7]">Sábado</h4>
          <Image src={RainIcon} alt="" />
          <p className="font-bold text-white text-[1.6rem]">20° <span>16°</span></p>
        </div>

        <div className=" flex flex-col items-center justify-center gap-[1.6rem]">
          <h4 className="text-[1.4rem] text-[#dad8f7]">Domingo</h4>
          <Image src={ThunderIcon} alt="" />
          <p className="font-bold text-white text-[1.6rem]">28° <span>26°</span></p>
        </div>

        <div className=" flex flex-col items-center justify-center gap-[1.6rem]">
          <h4 className="text-[1.4rem] text-[#dad8f7]">Segunda</h4>
          <Image src={CloudyIcon} alt="" />
          <p className="font-bold text-white text-[1.6rem]">26° <span>20°</span></p>
        </div>
      </section>
    )
}
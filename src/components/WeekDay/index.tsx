import Image from 'next/image'



interface WeekDayProps {
  code:number
  day:string
  max: number
  min: number
}


export function WeekDay ({code, day, max, min}:WeekDayProps){
  let path = '/files/conditions/day'
    return(
        <div className=" flex flex-col items-center justify-center gap-[1.6rem]">
          <h4 className="text-[1.4rem] text-[#dad8f7]">{day}</h4>
          <Image width={64} height={64} src={`${path}/${code}.png`} alt="" />
          <p className="font-bold text-white text-[1.6rem]">{max}° <span className='text-[#c2bff4]'>{min}°</span></p>
        </div>

    )
}
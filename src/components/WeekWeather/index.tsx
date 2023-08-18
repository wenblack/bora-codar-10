import { WeekDay } from '../WeekDay'
import { useEffect, useState } from 'react'


type Test = {
    date?:number
    max:number,
    min:number,
    code: number
}


export function WeekWeather() {
    const [weekDays, setWeekDays] = useState<Test[]>([])
    const[date, setDate] = useState(0)
    const [month, setMonth] = useState('')
    const [dataSaved, setDataSaved] = useState(false)

    async function getDates() {
        const d = new Date();
        let day = d.getDate()
        let mont = d.getMonth()
        setMonth("/" + String(mont + 1).padStart(2, "0"))
        setDate(Number(String(day).padStart(2, "0")))
        let data = JSON.parse(localStorage.getItem('data'))
        await setWeekDays([
            {
                date: date+1,
                code:data.current.condition.code,
                max:Math.floor(data.forecast.forecastday[0].day.maxtemp_c),
                min:Math.floor(data.forecast.forecastday[0].day.mintemp_c)
            },
            {
                date: date+2,
                code:data.forecast.forecastday[1].day.condition.code,
                max:Math.floor(data.forecast.forecastday[1].day.maxtemp_c),
                min:Math.floor(data.forecast.forecastday[1].day.mintemp_c)
            },
            {
                date: date+3,
                code:data.forecast.forecastday[1].day.condition.code,
                max:Math.floor(data.forecast.forecastday[2].day.maxtemp_c),
                min:Math.floor(data.forecast.forecastday[2].day.mintemp_c)
            },
            {
                date: date+4,
                code:data.forecast.forecastday[1].day.condition.code,
                max:Math.floor(data.forecast.forecastday[3].day.maxtemp_c),
                min:Math.floor(data.forecast.forecastday[3].day.mintemp_c)
            },
            {
                date: date+5,
                code:data.forecast.forecastday[1].day.condition.code,
                max:Math.floor(data.forecast.forecastday[4].day.maxtemp_c),
                min:Math.floor(data.forecast.forecastday[4].day.mintemp_c)
            },
         
        ])
        setDataSaved(true)
    }

    useEffect(() => {
        getDates()
    }, [dataSaved])

    return (
        <section id='week-weather' className="flex  p-[4rem] font-bold justify-around gap-[1.2rem]">
            {
                weekDays.map((daysWeek) =>
                    <WeekDay
                        code={daysWeek.code}
                        day={`${daysWeek.date}${month}`}
                        max={daysWeek.max}
                        min={daysWeek.min}
                    />
                )
            }
        </section>
    )
}
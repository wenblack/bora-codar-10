import { Lato } from 'next/font/google'

import Image from 'next/image'
import RainIcon from  '@/assets/weather-rain.svg'
import LeafIcon from '@/assets/leaf.svg'
import SunTime from '@/assets/sun-time.svg'
import SunChart from '@/assets/sun-chart.svg'
import CloudsIcon from '@/assets/weather-clouds.svg'
import SunIcon from '@/assets/weather-sun.svg'
import ThunderIcon from '@/assets/weather-thunder.svg'
import CloudyIcon from '@/assets/weather-cloudy.svg'
import { Temperature } from '@/components/Temperature'

const lato = Lato({ subsets: ['latin'] , weight:['400','700']})

export default function Home() {
  return (
    <main className={`${lato.className}`}>
      <Temperature
        local='São Paulo,SP'
        actualDegrees={18}
        minDegrees={16}
        maxDegrees={22}
        windAmount={17}
        humityAmount={31}
        rainAmount={10}
      />

      <section className="air-quality">
        <h2 className="title">
          <Image src={LeafIcon} alt="icone de folha de árvore" />
          Qualidade do ar
        </h2>

        <p className="good">Boa</p>
        <p className="number">21</p>

        <div className="info">
          <div className="number">
            <p>12.9</p>
            <small>PM2.5</small>
          </div>
          <div className="number">
            <p>12.9</p>
            <small>PM10</small>
          </div>
          <div className="number">
            <p>2.1</p>
            <small>SO₂</small>
          </div>
          <div className="number">
            <p>1.4</p>
            <small>NO₂</small>
          </div>
          <div className="number">
            <p>21.2</p>
            <small>O₃</small>
          </div>
          <div className="number">
            <p>0.7</p>
            <small>CO</small>
          </div>
        </div>
      </section>

      <section className="sun-time">
        <h2 className="title">
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

      <section className="week-weather">
        <div className="day">
          <h4 className="title">Amanhã</h4>
          <Image src={CloudsIcon} alt="" />
          <p className="maxmin">21° <span>16°</span></p>
        </div>

        <div className="day">
          <h4 className="title">Sexta</h4>
          <Image src={SunIcon} alt="" />
          <p className="maxmin">28° <span>16°</span></p>
        </div>

        <div className="day">
          <h4 className="title">Sábado</h4>
          <Image src={RainIcon} alt="" />
          <p className="maxmin">20° <span>16°</span></p>
        </div>

        <div className="day">
          <h4 className="title">Domingo</h4>
          <Image src={ThunderIcon} alt="" />
          <p className="maxmin">28° <span>26°</span></p>
        </div>

        <div className="day">
          <h4 className="title">Segunda</h4>
          <Image src={CloudyIcon} alt="" />
          <p className="maxmin">26° <span>20°</span></p>
        </div>
      </section>
    </main>
  )
}

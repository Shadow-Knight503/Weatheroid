import { useState } from 'react'
import sunIco from './assets/Icons/sun.png'
import srhIco from './assets/Icons/search.png'
import './assets/styles/Weather.css'

const WeatherApp = () => {
    const [WthrData, SetWthr] = useState({
        Temp: "", Loc: "", Type: "",
        Hum: "", Wind: ""
    })

    let APiKey = "7887a5738c174856aca170019230409"
    let Loc = "India"

    const Search = async () => {
        console.log("Work")
        let Srh = document.getElementById('SrhInp') as HTMLInputElement || 0
        if(Srh.value === "") {
            return 0
        }
        Loc = Srh.value
        let url = `http://api.weatherapi.com/v1/current.json?key=${APiKey}&q=${Loc}`
        let resp = await fetch(url)
        let data = await resp.json()
        SetWthr({
            Temp: data.current.temp_c, Loc: data.location.name, 
            Type: data.current.condition.text,
            Hum: data.current.humidity, Wind: data.current.wind_kph
        })

    }

    return (
        <>
        <div className='container'>
            <div className='TopBar'>
                <input id='SrhInp' type='text' className='CityInp' 
                placeholder='Search' />
                <button className="srhIco">
                    <img onClick={Search} src={srhIco} alt='Search' />
                </button>
            </div>
            <div className='Content'>
                <img className='CoverImg' src={sunIco} alt='Cover Image' />
                <p className='Temp'>{WthrData.Temp} C</p>
                <p className='Loc'>{WthrData.Loc}</p>
            </div>
            <div className='BtmBar'>
                <div className='Hum'>
                    <img src={sunIco} alt='Humidty' />
                    <span>{WthrData.Hum}%<br/>Humidty</span>
                </div>
                <div className='Wind'>
                    <img src={sunIco} alt='Wind Speed' />
                    <span>{WthrData.Wind} km/hr<br/>Wind Speed</span>
                </div>
            </div>
        </div>
        </>
    )
}


export default WeatherApp
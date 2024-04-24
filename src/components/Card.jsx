import React from 'react'
import { getDate, getDay } from '../helpers'

function Card({ data }) {
    return (
        <div className='daily'>
            <div className="daily-box">
                <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="icon" className="daily-box_image" />
                <p className="daily-box_temp">{Math.round(data.temp.max)}°C</p>
                <p className="daily-box_info">{getDay(data.dt)},{getDate(data.dt)}</p>
            </div>
        </div>
    )
}

export default Card
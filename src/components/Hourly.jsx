import React from 'react'
import { getTime1 } from '../helpers'
import { LuWind } from "react-icons/lu";

function Hourly({data}) {
    return (
        <div>
            <div className="card__right-bottom_box">
                <h5>{getTime1(data.dt)}</h5>
                <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="" className='card__right-bottom_box-imginfo' />
                <p>{Math.round(data.temp)}°C</p>
                <LuWind className='card__right-bottom_box-imgblue'/>
                <h6>{Math.round(data.wind_speed)}km/h</h6>
            </div>
         </div>
    )
}

export default Hourly
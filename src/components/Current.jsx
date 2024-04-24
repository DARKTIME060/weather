import React, { useContext } from 'react'
import { FiSunrise, FiSunset } from "react-icons/fi";
import { IoSunny } from "react-icons/io5";
import { WiHumidity } from "react-icons/wi";
import { LuWind } from "react-icons/lu";
import { IoSpeedometerOutline } from "react-icons/io5";
import { TbUvIndex } from "react-icons/tb";
import { Context } from '../context/Context';
import { getDate, getDay, getRice, getSet, getTime} from '../helpers';


function Current({data}) {
    const {search} = useContext(Context)
    console.log(data);
    return (
        <div className='current container'>
            <div className="current__left">
                <h3 className="current__left-title">{search}</h3>
                <div className="current__left-info">
                    <p className="current__left-info_time">{getTime(data.dt)}</p>
                    <p className="current__left-info_text">{getDay(data.dt)},{getDate(data.dt)}</p>
                </div>

            </div>


            <div className="current__right">
                <div className="current__right-left">
                    <div className="current__right-left_info">
                        <h3>{Math.round(data.temp)}°C</h3>
                        <p>Feels like: <span>{Math.round(data.temp)}°C</span></p>
                    </div>
                    <div className="current__right-left_sun">
                        <div className="current__right-left_sun-top">
                            <FiSunrise className='current__right-left_sun-top-icon'/>
                            <div>
                                <h6>Sunrise</h6>
                                <p>{getRice(data.sunrise)}AM</p>
                            </div>
                        </div>
                        <div className="current__right-left_sun-bottom">
                            <FiSunset className='current__right-left_sun-top-icon'/>
                            <div>
                                <h6>Sunset</h6>
                                <p>{getSet(data.sunset)} AM</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="current__right-center">
                    <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt='description' className='current__right-center_icon'/>
                    <p>{data.weather[0].main}</p>
                </div>

                <div className="current__right-right">
                    <div className="current__right-right_box">
                        <WiHumidity className='current__right-right_box-icon'/>
                        <h6>{Math.round(data.humidity)}%</h6>
                        <p>Humidity</p>
                    </div>

                    <div className="current__right-right_box">
                        <LuWind className='current__right-right_box-icon'/>
                        <h6>{Math.round(data.wind_speed)}km/h</h6>
                        <p>Wind Speed</p>
                    </div>
                    <div className="current__right-right_box">
                        <IoSpeedometerOutline className='current__right-right_box-icon'/>
                        <h6>{Math.round(data.pressure)}</h6>
                        <p>Pressure</p>
                    </div>
                    <div className="current__right-right_box">
                        <TbUvIndex className='current__right-right_box-icon'/>
                        <h6>{Math.round(data.uvi)}</h6>
                        <p>UV</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Current
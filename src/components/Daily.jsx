import React from 'react'
import Card from './Card'
import Hourly from './Hourly'

function Daily({ data }) {
    const hourly = [data.hourly[23], data.hourly[25], data.hourly[35], data.hourly[41], data.hourly[47]]
    return (
        <div className='card '>
            <div className="container">
                <div className="card__left">

                    <h3 className="card__left-title">5 Days Forecast:</h3>
                    {
                        data.daily.slice(1, 6).map((day) => (
                            <Card key={day.dt} data={day} />
                        ))
                    }
                </div>
                <div className="card__right">
                    <h3 className="card__right-title">Hourly Forecast:</h3>
                    <div className="card__right-bottom">
                        {
                            hourly.map((day) => (
                                <Hourly key={day.dt} data={day} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Daily
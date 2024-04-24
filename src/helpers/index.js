
const weekday = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
]
const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]



export function getTime(dt) {
    const time = new Date(dt * 1000)
    let h = time.getHours()
    let m = time.getMinutes()
    if(h < 10 ) h = `0${h}`
    if(m < 10 ) m = `0${m}`
    return    `${h}:${m}`
}

export function getRice(sunrise) {
    const sunr = new Date(sunrise * 1000)
    let h = sunr.getHours()
    let m = sunr.getMinutes()
    if(h < 10 ) h = `0${h}`
    if(m < 10 ) m = `0${m}`
    return    `${h}:${m}`
}

export function getSet(sunset) {
    const suns = new Date(sunset * 1000)
    let h = suns.getHours()
    let m = suns.getMinutes()
    if(h < 10 ) h = `0${h}`
    if(m < 10 ) m = `0${m}`
    return    `${h}:${m}`  
}


// DAILY

export function getDay(dt) {
    return weekday[new Date(dt * 1000).getDay()] 
}
export function getDate(dt) {
    return `${new Date(dt * 1000).getDate()} ${months[new Date(dt * 1000).getMonth()]}`
}

// HOURLY

export function getTime1(dt) {
    const hor  = new Date(dt * 1000)
    let h = hor.getHours()
    let m = hor.getMinutes()
    if(h < 10 ) h = `0${h}`
    if(m < 10 ) m = `0${m}`
    return    `${h}:${m}`
}
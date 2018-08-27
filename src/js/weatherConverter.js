
const converters = {};

converters.convertTemp = (data) => {
    let temp = Math.trunc(((data - 273.15) * 9 / 5) + 32)
    return temp
}

converters.convertWind = (data) => {
    let windDir = ""; 
    if(data >= 337.6 || data <= 22.5){
        windDir = "N"
    } else if(data >= 22.6 && data <= 67.5){
        windDir = "NE"
    } else if(data >= 67.6 && data <= 112.5){
        windDir = "E"
    } else if(data >= 112.6 && data <= 157.5){
        windDir = "SE"
    } else if(data >= 157.6 && data <= 202.5){
        windDir = "S"
    } else if(data >= 202.6 && data <= 247.5){
        windDir = "SW"
    } else if(data >= 247.6 && data <= 292.5){
        windDir = "W"
    } else if(data >= 292.6 && data <= 337.5){
        windDir = "NW"
    }
    return windDir
}

converters.convertSun = (data) => {
    let time = "";
    let currentTime = new Date(data*1000)
    let hours = currentTime.getHours()
    let minutes = currentTime.getMinutes()
    let seconds = currentTime.getSeconds()
    let dayOrNight = "";
    if (minutes < 10) {
        minutes = "0" + minutes
    }
    if (seconds < 10) {
        seconds = "0" + seconds
    }
    if(hours > 11){
        dayOrNight = "PM"
    } else {
        dayOrNight = "AM"
    }
    if(hours >= 13){
        hours = hours - 12
    }
    time = hours + ":" + minutes + ":" + seconds + " " + dayOrNight;
    return time;
}



module.exports = converters;
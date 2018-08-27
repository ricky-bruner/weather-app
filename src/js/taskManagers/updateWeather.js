const dataManager = require("../data/dataManager");
const getDate = require("../getDate");
const renderWeather = require("./renderWeather");

function updateWeather(user){
    dataManager.getWeather(user.zipCode)
        .then(weather => {
            let patchData = {
                date: getDate(),
                weather: weather
            }
            dataManager.editUserWeather(user.id, patchData)
            .then(()=>{
                console.log("weather updated!");
                dataManager.getUser(user.username, user.email)
                .then(user => {
                    updatedUser = user[0]
                    sessionStorage.setItem("user", JSON.stringify(updatedUser));
                    renderWeather();
                })
            })
        })
}

module.exports = updateWeather;
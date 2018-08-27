const dataManager = require("../data/dataManager");
const renderWeather = require("./renderWeather");
const getDate = require("../getDate");

function handleZipSubmit(){
    let user = JSON.parse(sessionStorage.getItem("user"));
    let zipCode = document.querySelector("#zip-input").value;
    let username = user.username;
    let email = user.email;
    dataManager.editUserZip(user.id, zipCode)
    .then(user => {
        dataManager.getWeather(zipCode)
        .then(weather => {
            let patchData = {
                date: getDate(),
                weather: weather
            }
            dataManager.editUserWeather(user.id, patchData)
            .then(()=>{
                console.log("weather updated!");
                dataManager.getUser(username, email)
                .then(user => {
                    sessionStorage.setItem("user", JSON.stringify(user[0]));
                    document.querySelector("#weather-form-container").innerHTML = "";
                    renderWeather();
                })
            })
        })
    })
}

module.exports = handleZipSubmit;
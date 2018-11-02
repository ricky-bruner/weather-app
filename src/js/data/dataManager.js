/* 
        API Key
36083ac2c52d10bfd89cbe6151d515a2

*/

const remoteURL = "http://localhost:8088";

const dataManager = Object.create(null, {
    getWeather: {
        value: (zipCode) => {
            return fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&APPID=36083ac2c52d10bfd89cbe6151d515a2`)
                .then(res => res.json())
        }
    },
    getUser: {
        value: (username, email) => {
            return fetch(`${remoteURL}/users?email=${email}&username=${username}`)
            .then(res => res.json())
        }
    },
    saveUser: {
        value: (user) => {
            return fetch(`${remoteURL}/users`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            }).then(res => res.json())
        }
    },
    editUserZip: {
        value: (userId, zipCode) => {
            return fetch(`${remoteURL}/users/${userId}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({zipCode: zipCode})
            }).then(res => res.json())
        } 
    },
    editUserWeather: {
        value: (userId, object) => {
            return fetch(`${remoteURL}/users/${userId}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({currentWeather: object})
            }).then(res => res.json())
        } 
    }
})

module.exports = dataManager;
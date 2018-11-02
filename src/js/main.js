/* DOM Builders */
const buildDOM = require("./DOMManager/buildDOM");
const expandDOM = require("./DOMManager/expandDOM");

/* Login Functions */
const renderLogin = require("./login/loginForm");
const loginAnimation = require("./login/loginAnimation");

/* Data Manager Functions */
const dataManager = require("./data/dataManager");

/* Task Manager Functions */
const signupHandler = require("./taskManagers/signupHandler");
const handleZipSubmit = require("./taskManagers/handleZipSubmit");
const checkData = require("./taskManagers/dataChecker");


buildDOM();

if(sessionStorage.getItem("user") === null){
    document.querySelector("#login-container").innerHTML = renderLogin();
    loginAnimation();
} else {
    let user = JSON.parse(sessionStorage.getItem("user"));
    expandDOM(user);
    checkData(user);
}

document.querySelector("#wrapper").addEventListener("click", (e) => {
    if(e.target.className === "signup-btn"){
        signupHandler();
    }

    if(e.target.className === "login-btn"){
        let username = document.querySelector("#login-username").value
        let email = document.querySelector("#login-email").value
        if(username === "" && email === ""){
            document.querySelector("#register-username").value = "";
            document.querySelector("#register-email").value = "";
        } else if(username === "" || email === ""){
            alert("Please fill everything out");
        } else {
            dataManager.getUser(username, email)
            .then((user) => {
                if(user.length){
                    sessionStorage.setItem("user", JSON.stringify(user[0]));
                    document.querySelector("#login-container").innerHTML = "";
                    expandDOM(user);
                    let currentUser = JSON.parse(sessionStorage.getItem("user"))
                    checkData(currentUser);
                } else {
                    alert("No Account found. Please double check your information");
                }
            })
        }
    }

    if(e.target.id === "logout-btn"){
        sessionStorage.clear();
        document.querySelector("#user-page").innerHTML = "";
        document.querySelector("#login-container").innerHTML = renderLogin();
        loginAnimation();
    }

    if(e.target.id === "submit-zip"){
        handleZipSubmit();
    }
});


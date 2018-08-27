

function buildDOM(){
    const body = document.querySelector("body");
    const script = document.querySelector("script");
    let wrapper = document.createElement("div");
    wrapper.setAttribute("id", "wrapper");
    wrapper.innerHTML = `<div id="login-container"></div>
                        <div id="user-page"></div>`;
    body.insertBefore(wrapper, script);
}

module.exports = buildDOM;
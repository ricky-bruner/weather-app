

function expandDOM(){
    document.querySelector("#user-page").innerHTML = 
        `<header>
            <nav>
                <button id="logout-btn">Logout</button>
            </nav>
        </header>
        <main>
            <div class="left-container">
                <div id="profile-section"></div>
            </div>
            <div class="mid-container">
                <div id="weather-section">
                    <div id="weather-form-container"></div>
                    <div id="weather-result-container"></div>
                </div>
            </div>
            <div class="right-container"></div>
        </main>
        <footer>
            <div class="footer-left">
                <small>&copy; Ricky Bruner</small>
                <a href="nashvillesoftwareschool.com">Nashville Software School</a>
            </div>
            <div class="footer-right">
                <div class="icons">
                    <a href="#"><i class="fab fa-github"></i></a>
                    <a href="https://www.facebook.com/ricky.bruner.56"><i class="fab fa-facebook-f"></i></a>
                    <a href="https://twitter.com/AlteredEcho"><i class="fab fa-twitter"></i></a>
                </div>
            </div>
        </footer>`
}

module.exports = expandDOM;

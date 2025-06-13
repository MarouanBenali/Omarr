document.addEventListener("DOMContentLoaded", function () {
  var header = document.getElementsByClassName("top")[0];
  header.innerHTML = `
        <ul class="list">
            <li class="Charta"><a href="home.html">HOME</a></li>
            <li class="Charta"><a href="news.html">NEWS</a></li>
            <li class="Charta"><a href="stor.html">STORE</a></li>
            <li class="Charta"><a href="login.html">LOGIN</a></li>
            <li class="Charta"><a href="ticket.html">TICKET</a></li>
            <li class="Charta"><a href="classment.html">CLASSMENT</a></li>
            <input type="search"  placeholder="Search..." class="search">
        </ul>
 `;
 var footer = document.querySelector("footer");
 footer.innerHTML = `
        <div class="sponsor">
            <img src="img/nike.png" width="150">
            <img src="img/spo.png" width="80">
            <img src="img/appel.webp" width="60">
        </div>

        <div class="footer-content">
            <div class="history">
                <h1>History</h1>
                <p>FC Barcelona was founded in 1899 by a group of Swiss, Catalan, German, and Spanish footballers
                    led by Joan Gamper. The club has since become one of the most successful and popular football
                    clubs in the world.</p>
            </div>
            <div class="social">
                <a href=""><img src="img/facebook.png" alt="img"></a>
                <a href=""><img src="img/insta.png" alt="img"></a>
                <a href=""><img src="img/youtube.png" alt="img"></a>
                <a href=""><img src="img/Xsocile.png" alt="img"></a>
                <a href=""><img src="img/tiktok.png" alt="img"></a>
                <a href=""><img src="img/spotia.png" alt="img"></a>
                <a href=""><img src="img/discored.png" alt="img"></a>
            </div>
        </div>
 `
});
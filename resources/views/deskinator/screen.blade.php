<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Deskinator</title>
    <link rel="stylesheet" href="{{ asset('css/reset.css') }}">
    <script src="https://kit.fontawesome.com/28a8f913f6.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="{{ asset('css/master.css') }}">
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <link rel="stylesheet" href="{{ asset('css/media.css') }}">
    <link rel="stylesheet" href="{{ asset('css/deskinator.css') }}">

    <script src="https://cdn.socket.io/4.4.1/socket.io.min.js"
            integrity="sha384-fKnu0iswBIqkjxrhQCTZ7qlLHOFEgNkRmK2vaO/LbTZSXdJfAu6ewRBdwHPhBo/H" crossorigin="anonymous">
    </script>
    <script src="{{ asset('js/screen.js') }}"></script>
</head>

<body>
<nav>
    <div class="brand">
        <a class="" href=""><img src="{{ asset('image/logo.png') }}" alt=""> DESKINATOR</a>
    </div>
    <div class="site-name">
        <h3>ALBERT</h3>
    </div>
</nav>
<main>
    <div class="module full niss">
        <div class="text-left">
            <h2 class="title">TITLE</h2>
            <p class="content">
                Please, fill the form on the table and go to <span>DESK 1</span>
            </p>
        </div>
        <div class="text-right">
            <h2 class="title">TITLE</h2>
            <p class="content">
                Please, fill the form on the table and go to <span>DESK 1</span>
            </p>
        </div>
    </div>
    <div class="row middle-module">
        <div class="module half desk" id="desk">
            <p>DESK</p>
            <p>DESK</p>
            <p>DESK</p>
            <p>DESK</p>
            <p class="active">DESK</p>
        </div>
        <div class="col half">
            <div class="module full day-time col">
                <div class="day">
                    <h3 id="date">MARDI 12 JUILLET 2022</h3>
                </div>
                <div class="time">
                    <h3 id="time">12:32:12</h3>
                </div>
            </div>
            <div class="module full"></div>
            <!-- <div class="module full public-transport col">
                <h3 class="title">Transport en commun</h3>
                <h3 class="stop-name">Albert</h3>

                <div class="line">
                    <div class="line-info row">
                        <h3 class="line-id line--3">3</h3>
                        <h3 class="line-direction" id="lineDirection">Esplanade</h3>
                    </div>
                    <div class="passing-time col">
                        <p>TIME</p>
                    </div>
                </div>

            </div> -->
            <div class="module full weather col">
                <h3 class="title">WEATHER</h3>
                <div class="row">
                    <div class="now-weather row">
                        <p>23°C</p>
                        <img src="" alt="" id="weatherImg">
                    </div>
                    <div class="weather-detail col">
                        <ul id="weatherDetail">
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    <div class="module full slide">
        <p id="messageModule"></p>
    </div>
</main>

<audio id="sound" src="sound/notif.mp3"></audio>
</body>

</html>

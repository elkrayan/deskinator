<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>@yield('title')</title>
    <link rel="stylesheet" href="{{ asset('css/reset.css') }}">
    <script src="https://kit.fontawesome.com/28a8f913f6.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="{{ asset('css/master.css') }}">
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <link rel="stylesheet" href="{{ asset('css/media.css') }}">

    <script src="{{ asset('js/app.js') }}"></script>
</head>
<body id="@yield('body')">
<nav>
    <div class="brand">
        <a class="" href=""><img src="{{ asset('image/logo.png') }}" alt=""> DESKINATOR</a>
    </div>
    @auth()
        <div class="site col">
            <h3>{{ Auth::user()->name ?? '' }} <i class="fas fa-sort-down"></i></h3>
            <div class="dropdown">
                <ul class="vertical col">
                    <li>
                        <a href="{{ route('logout') }}" onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
                            <i class="fas fa-sign-out-alt"></i> Logout
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    @endauth

</nav>
<main>
    @yield('content')
</main>

<form id="logout-form" action="{{ route('logout') }}" method="POST">
    @csrf
</form>
</body>
</html>

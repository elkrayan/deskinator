@extends('layout.layout')
@section('title', 'Deskinator | Sign in')

@section('body', 'login')
@section('content')

    @if ($errors->any())
        <div class="alert alert-danger">
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif

    <div class="container row">
        <div class="left col">
            <header>
                <h2 class="title">Sign in</h2>
            </header>
            <form action="{{ route('login') }}" method="post">
                @csrf
                <div class="input-group pos-rel">
                    <label for="username">username</label>
                    <input type="text" name="username" placeholder="username" value="{{ old('username') }}">
                </div>

                <div class="input-group pos-rel">
                    <label for="password">password</label>
                    <input type="password" name="password">
                </div>

                <div class="input-group col">
                    <label for="">
                        <input type="checkbox" name="remember">
                        Remember me
                    </label>
                </div>

                <button class="btn btn-lg brand-bkg">Sign in</button>
            </form>
        </div>
        <div class="right">
            <div class="brand col">
                <div class="row">
                    <img src="{{ asset('image/logo.png') }}" alt="">
                    <h1>Deskinator</h1>
                </div>
                <h2>Croix-Rouge de Belgique</h2>
            </div>
        </div>
    </div>

@endsection

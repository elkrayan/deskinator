@extends('layout.layout')
@section('content')
    <header>
        <h2 class="module-title">{{ $module_title ?? '' }}</h2>
    </header>
    <div class="container">
        @yield('module_content')
    </div>
@endsection

@extends('layout.module')
@section('title', 'Deskinator | Sign in')

@section('body', 'home')

@section('module_title', 'Menu')
@section('module_content')

    <div class="container col">
        @foreach($sub_account as $sub)
            <div class="sub-account col">
                <h3>{{ $sub->name }}</h3>
                <div class="row">
                    <a href="/desk" class="btn btn-rounded">Desk</a>
                    <a href="/public?port=3000"  class="btn btn-rounded">Public</a>
                </div>
            </div>
        @endforeach
    </div>

@endsection

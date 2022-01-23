@extends('layout.module')
@section('title', 'Deskinator | New user')

@section('body', 'register')
@section('module_content')

    @if ($errors->any())
        <div class="alert alert-danger">
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif

    <form action="{{ route('register') }}" method="POST">
        @csrf
        <div class="input-group pos-rel">
            <label for="username">username</label>
            <input type="text" name="username" placeholder="username">
        </div>

        <div class="input-group pos-rel">
            <label for="username">password</label>
            <input type="password" name="password" placeholder="password">
        </div>
        <div class="input-group pos-rel">
            <label for="username">Repeat password</label>
            <input type="password" name="password_confirmation" placeholder="repeat password">
        </div>

        <div class="input-group pos-rel">
            <label for="username">Main account</label>
            <select name="" id="">
                <option value="" selected>Testing</option>
            </select>
        </div>
        <div class="input-group pos-rel">
            <label for="username">Sub account</label>
            <select name="sub_account" id="">
                <option value="admin">Administrator</option>
                @foreach($sub_accounts as $sub)
                    <option value="{{ $sub->name }}">{{ $sub->name }}</option>
                @endforeach
            </select>
        </div>

        <div class="input-group col">
            <label for="manager">
                <input type="checkbox" name="manager" value="0">
                manager
            </label>
        </div>

        <button class="btn btn-lg brand-bkg">Create user</button>

    </form>
@endsection

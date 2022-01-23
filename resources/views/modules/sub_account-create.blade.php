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

    <form action="{{ route('sub-account.store') }}" method="POST">
        @csrf
        <div class="input-group pos-rel">
            <label for="name">Name</label>
            <input type="text" name="name" placeholder="name">
        </div>

        <div class="input-group pos-rel">
            <label for="port_number">Port Number</label>
            <input type="number" name="port_number" placeholder="3024">
        </div>


        <button class="btn btn-lg brand-bkg">Create sub-account</button>

    </form>
@endsection

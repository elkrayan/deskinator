@extends('layout.module')
@section('title', 'Deskinator | DESK')

@section('body', 'desk')

@section('module_content')
    <header>
        <h3>Centre Albert</h3>
        <div class="input-group pos-rel">
            <label for="">Desk</label>
            <input type="number" id="deskValue">
            @csrf
        </div>
    </header>

    <div class="container center col">
        <div class="btn btn-lg btn-rounded btn-rectangle" id="nextBtn">Suivant</div>
        <div class="btn btn-rounded btn-rectangle btn-md disabled" id="arrivedBtn">Arrivé</div>
    </div>

    <script>
        fetch('sub-account/midi/stat', {
            method: 'POST',
            body: JSON.stringify({
                "_token": document.getElementById('csfr').value,
                "desk": document.getElementById('deskValue').value
            })
        })
    </script>

@endsection

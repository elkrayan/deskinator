<?php

use App\Http\Controllers\SubAccountController;
use App\Models\sub_account;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('auth.login');
});
Route::get('/screen', function (){
    return view('screen.screen');
});


Route::middleware('auth')->group(function () {
    Route::get('/home', function () {

        if (Auth::user()->name == 'admin')
            $sub_account = sub_account::all();
        else
            $sub_account = sub_account::all()->where('name', '=', Auth::user()->name);


        return view('modules.home', [
            'module_title' => 'Menu',
            'sub_account' => $sub_account
        ]);
    })->name('home');
    Route::get('/sub-account/create', [SubAccountController::class, 'create'])->name('sub-account.create');
    Route::post('/sub-account/create', [SubAccountController::class, 'store'])->name('sub-account.store');
    Route::get('/desk', [SubAccountController::class, 'desk'])->name('desk');
    Route::get('/public', [SubAccountController::class, 'public'])->name('public');
});

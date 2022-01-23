<?php

namespace App\Http\Controllers;

use App\Models\sub_account;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;


class SubAccountController extends Controller
{
    public function create(){

        return view ('modules.sub_account-create');
    }

    public function store(Request $request){

        $validated = $request->validate([
            'name' => 'required|unique:sub_accounts,name|max:255',
            'port_number' => 'required|unique:sub_accounts,port_number|min:4|max:4'
        ]);

        sub_account::create([
            'name' => $validated['name'],
            'port_number' => $validated['port_number']
        ]);

        return redirect(route('home'));

    }

    public function desk(){

        return view('modules.desk');
    }
}

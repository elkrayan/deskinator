<?php

namespace App\Actions\Fortify;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Laravel\Fortify\Contracts\CreatesNewUsers;

class CreateNewUser implements CreatesNewUsers
{
    use PasswordValidationRules;

    /**
     * Validate and create a newly registered user.
     *
     * @param  array  $input
     * @return \App\Models\User
     */
    public function create(array $input)
    {
        Validator::make($input, [
            'name',
            'username' => [
                'required',
                'max:255',
                Rule::unique(User::class),
            ],
            'password' => $this->passwordRules(),
            isset($input['manager']) ? 'manager' : ''
        ])->validate();

        return User::create([
            'name' => $input['sub_account'],
            'username' => $input['username'],
            'password' => Hash::make($input['password']),
            'manager' => isset($input['manager']) ? '1' : '0'
        ]);
    }
}

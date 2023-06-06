<?php

namespace App\Http\Requests\Auth;

class RegisterCompanyRequest extends RegisterUserRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return parent::rules() + [
            'company_name' => ['required', 'string', 'max:127'],
            'company_type' => ['required', 'string', 'max:127'],
        ];
    }
}

<?php

namespace App\Http\Requests\Auth\User;

use App\Services\Enums\User\UserSearchStatusEnum;
use Illuminate\Foundation\Http\FormRequest;

class MyProfileUpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'first_name' => ['required', 'string', 'max:127'],
            'last_name' => ['required', 'string', 'max:127'],
            'email' => ['required', 'string', 'email', 'unique:users,email'],
            'phone' => ['required', 'string'],
            'search_status' => ['required', 'string', 'in:' . implode(',', UserSearchStatusEnum::getTypes())]
        ];
    }
}

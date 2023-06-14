<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\RegisterCompanyRequest;
use App\Http\Requests\Auth\RegisterUserRequest;
use App\Models\Company;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use App\Services\Enums\Company\CompanyTypeEnum;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Inertia\Response;

class RegisterController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/RegisterUser');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(RegisterUserRequest $request): RedirectResponse
    {
        try {
            DB::beginTransaction();

            $user = User::create([
                'first_name' => $request->first_name,
                'last_name' => $request->last_name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ]);

            $company = Company::create([
                'user_id' => $user->id,
                'type' => CompanyTypeEnum::TYPE_PRIVATE_PERSON,
            ]);

            $user->company_id = $company->id;
            $user->save();

            event(new Registered($user));

            Auth::login($user);

            DB::commit();

            //@todo:: redirect to ?
            return redirect(RouteServiceProvider::HOME);
        } catch (\Throwable $e) {
            DB::rollBack();

            return redirect()->back()->with('error', 'Something went wrong. Please try again later.');
        }
    }

    public function createCompany(): Response
    {
        return Inertia::render('Auth/RegisterCompany', [
            'types' => collect(CompanyTypeEnum::getSelectableList())
                ->filter(function ($value, $key) {
                    return $key !== CompanyTypeEnum::TYPE_PRIVATE_PERSON;
                })
        ]);
    }

    public function storeCompany(RegisterCompanyRequest $request): RedirectResponse
    {
        try {
            DB::beginTransaction();

            $user = User::create([
                'first_name' => $request->first_name,
                'last_name' => $request->last_name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ]);

            $company = Company::create([
                'user_id' => $user->id,
                'name' => $request->company_name,
                'type' => $request->company_type,
            ]);

            $user->company_id = $company->id;
            $user->save();

            event(new Registered($user));

            Auth::login($user);

            DB::commit();

            //@todo:: redirect to ?
            return redirect(RouteServiceProvider::HOME);
        } catch (\Throwable $e) {
            DB::rollBack();

            return redirect()->back()->with('error', 'Something went wrong. Please try again later.');
        }
    }
}

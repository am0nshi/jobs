<?php

namespace App\Http\Controllers\Person;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\User\MyProfileUpdateRequest;
use App\Http\Resources\UserResource;
use App\Providers\RouteServiceProvider;
use App\Services\Enums\User\UserSearchStatusEnum;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class MyProfileController extends Controller
{
    /**
     * Display the login view.
     */
    public function getEditForm(): Response
    {
        return Inertia::render('Profile/MyProfile', [
            'user' => new UserResource(Auth::user()),
            'search_status' => [
                UserSearchStatusEnum::STATUS_ACTIVE => 'Active',
                UserSearchStatusEnum::STATUS_OPEN_TO_PROPOSITIONS => 'Open to propositions',
                UserSearchStatusEnum::STATUS_NOT_ACTIVE => 'Not searching',
            ]
        ]);
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(MyProfileUpdateRequest $request): RedirectResponse
    {
        $request->authenticate();

        $request->session()->regenerate();

        return redirect()->intended(RouteServiceProvider::HOME);
    }
}

<?php

//use App\Http\Controllers\_Auth\AuthenticatedSessionController;
//use App\Http\Controllers\_Auth\ConfirmablePasswordController;
//use App\Http\Controllers\_Auth\EmailVerificationNotificationController;
//use App\Http\Controllers\_Auth\EmailVerificationPromptController;
//use App\Http\Controllers\_Auth\NewPasswordController;
//use App\Http\Controllers\_Auth\PasswordController;
//use App\Http\Controllers\_Auth\PasswordResetLinkController;
//use App\Http\Controllers\_Auth\RegisteredUserController;
//use App\Http\Controllers\_Auth\VerifyEmailController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use Illuminate\Support\Facades\Route;

Route::middleware('guest')->group(function () {
    Route::get('register/user', [RegisterController::class, 'create'])
                ->name('register');
    Route::post('register/user', [RegisterController::class, 'store']);

    Route::get('register/company', [RegisterController::class, 'createCompany'])
                ->name('register.company');
    Route::post('register/company', [RegisterController::class, 'storeCompany']);

    Route::get('login', [LoginController::class, 'create'])
                ->name('login');
    Route::post('login', [LoginController::class, 'store']);

//    Route::get('forgot-password', [PasswordResetLinkController::class, 'create'])
//                ->name('password.request');
//
//    Route::post('forgot-password', [PasswordResetLinkController::class, 'store'])
//                ->name('password.email');
//
//    Route::get('reset-password/{token}', [NewPasswordController::class, 'create'])
//                ->name('password.reset');
//
//    Route::post('reset-password', [NewPasswordController::class, 'store'])
//                ->name('password.store');
});

Route::middleware('auth')->group(function () {
//    Route::get('verify-email', EmailVerificationPromptController::class)
//                ->name('verification.notice');
//
//    Route::get('verify-email/{id}/{hash}', VerifyEmailController::class)
//                ->middleware(['signed', 'throttle:6,1'])
//                ->name('verification.verify');
//
//    Route::post('email/verification-notification', [EmailVerificationNotificationController::class, 'store'])
//                ->middleware('throttle:6,1')
//                ->name('verification.send');
//
//    Route::get('confirm-password', [ConfirmablePasswordController::class, 'show'])
//                ->name('password.confirm');
//
//    Route::post('confirm-password', [ConfirmablePasswordController::class, 'store']);
//
//    Route::put('password', [PasswordController::class, 'update'])->name('password.update');
//
    Route::get('logout', [\App\Http\Controllers\_Auth\AuthenticatedSessionController::class, 'destroy'])
                ->name('logout');
});

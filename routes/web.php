<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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
    return Inertia::render('MainPage');
});

Route::get('/error', function () {
    return Inertia::render('Error');
});

Route::get('/faq', function () {
    return Inertia::render('Faq');
});


Route::get('/contact', function () {
    return Inertia::render('Contact');
});

require __DIR__.'/auth.php';

Route::middleware('auth')->group(function () {
    require __DIR__ . '/web/profile.php';
    require __DIR__ . '/web/company-profile.php';
});

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

require __DIR__.'/auth.php';

Route::middleware('auth')->group(function () {
    require __DIR__ . '/web/profile.php';
    require __DIR__ . '/web/company-profile.php';
});

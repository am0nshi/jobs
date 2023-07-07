<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/company/dashboard', function () {
    return Inertia::render('CompanyProfile/Dashboard');
})->name('company.profile.dashboard');

//@todo: TBD - company profile routes
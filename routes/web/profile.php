<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProfileController;
use Inertia\Inertia;

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');


    Route::get('/my-profile', function () {
        return Inertia::render('Profile/MyProfile');
    });

    Route::get('/applied-jobs', function () {
        return Inertia::render('Profile/AppliedJobs');
    });

    Route::get('/settings', function () {
        return Inertia::render('Profile/Settings');
    });

    Route::get('/view-resume', function () {
        return Inertia::render('Profile/ViewResume');
    });
    Route::get('/bookmark', function () {
        return Inertia::render('Profile/Bookmark');
    });

    Route::get('/dashboard', function () {
        return Inertia::render('Profile/Dashboard');
    });

    /* EditResume routes */

    Route::get('/edit-resume', function () {
        return Inertia::render('Profile/EditResume/BasicInformation');
    });

    Route::get('/edit-resume/profile', function () {
        return Inertia::render('Profile/EditResume/Profile');
    });

    Route::get('/edit-resume/education', function () {
        return Inertia::render('Profile/EditResume/Education');
    });

    Route::get('/edit-resume/professional-info', function () {
        return Inertia::render('Profile/EditResume/ProfessionalInfo');
    });

    /* EditResume routes END */
});
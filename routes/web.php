<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
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

/* Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
}); */

Route::get('/', function () {
    return Inertia::render('MainPage');
});



/* Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard'); */

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

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';

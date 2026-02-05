<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RendezVousController;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
*/

// Home page
Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

// About page
Route::get('/a-propos', function () {
    return Inertia::render('About');
})->name('about');

// Appointment booking routes
Route::get('/rendez-vous', [RendezVousController::class, 'create'])->name('rendez-vous.create');
Route::post('/rendez-vous', [RendezVousController::class, 'store'])->name('rendez-vous.store');

// Route::get('/', function () {
//     return view('welcome');
// });

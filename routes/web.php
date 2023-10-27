<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\InquiryController;
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

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => false, //Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', [DashboardController::class,'index'])->name('dashboard');

    Route::resource('cities', \App\Http\Controllers\CityController::class);
    Route::resource('{city}/areas', \App\Http\Controllers\AreaController::class);

    Route::resource('form', \App\Http\Controllers\FormController::class);
        Route::resource('questions', \App\Http\Controllers\QuestionController::class);
        Route::resource('steps', \App\Http\Controllers\StepController::class);

    Route::resource('users', \App\Http\Controllers\UserController::class);
    Route::resource('inquiries', InquiryController::class);
//    Export to excel
    Route::get('export', [InquiryController::class, 'export'])->name('export');
});

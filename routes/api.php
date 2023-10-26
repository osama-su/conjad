<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('test', function (){
    return response()->json([
        'message' => 'Hello World!'
    ]);
});

Route::get('inquiries', [\App\Http\Controllers\Api\FormController::class, 'index']);
Route::post('inquiries', [\App\Http\Controllers\Api\FormController::class, 'store']);
Route::get('cities', [\App\Http\Controllers\Api\CityController::class, 'index']);
Route::get('cities/{city}', [\App\Http\Controllers\Api\CityController::class, 'show']);

Route::resource('questions', \App\Http\Controllers\QuestionController::class);

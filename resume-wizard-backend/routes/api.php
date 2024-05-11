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

Route::middleware('api')->group(function () {
    Route::post('/login', 'App\Http\Controllers\AuthController@login')->name('login');
    Route::post('/register', 'App\Http\Controllers\AuthController@register')->name('register');
});

Route::middleware('auth.jwt')->group(function () {
    Route::post('/refresh', 'App\Http\Controllers\AuthController@refresh');
    Route::post('/me', 'App\Http\Controllers\AuthController@me');
    Route::post('/logout', 'App\Http\Controllers\AuthController@logout')->name('logout');
});
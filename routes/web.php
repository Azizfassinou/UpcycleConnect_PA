<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('home.home');
})->name('app_home');

Route::get('/about', function () {
    return view('home.about');
})->name('app_about');

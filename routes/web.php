<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;

Route::get('/', [HomeController::class, 'home'])->name('app_home');

Route::get('/about', [HomeController::class, 'about'])->name('app_about');

Route::match(['get', 'post'], '/dashboard', [HomeController::class, 'dashboard'])->name('app_dashboard');

/*Route::match(['get', 'post'], '/login', [AuthController::class, 'login'])->name('app_login');

Route::match(['get', 'post'], '/register', [AuthController::class, 'register'])->name('app_register');*/

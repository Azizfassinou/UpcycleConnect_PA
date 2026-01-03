<?php

namespace App\Http\Controllers;

class HomeController extends Controller
{
    // Fonction qui retourne la vue home.blade.php
    public function home()
    {
        return view('home.home');
    }

    // Fonction qui retourne la vue about.blade.php
    public function about()
    {
        return view('home.about');
    }

    // Fonction qui retourne la vue dashboard.blade.php
    public function dashboard()
    {
        return view('home.dashboard');
    }
}

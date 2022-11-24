<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class InfoController extends Controller
{
    //
    public function info()
    {
        return inertia("Info/Info");
    }
    public function createinfo()
    {
        return inertia("Info/Create-info");
    }
}


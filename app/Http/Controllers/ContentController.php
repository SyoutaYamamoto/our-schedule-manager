<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ContentController extends Controller
{
    //
    public function content()
    {
        return inertia("Content/Contents");
    }
    public function movies()
    {
        return inertia("Content/Movies");
    }
    public function notes()
    {
        return inertia("Content/Notes");
    }
    public function createmovie()
    {
        return inertia("Content/Create-movie");
    }
    public function createnote()
    {
        return inertia("Content/Create-note");
    }
}

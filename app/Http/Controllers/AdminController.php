<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;

class AdminController extends Controller
{
    //
    public function admin()
    {
        return inertia("Admin/User-management",['users' => User::all()]);
    }
}

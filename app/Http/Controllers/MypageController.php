<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class MypageController extends Controller
{
    //
    public function mypage()
    {
        return inertia("Mypage/Mypage");
    }
}

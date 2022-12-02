<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Event;
use App\Models\User;

class HomeController extends Controller
{
    //
    public function home()
    {
        return inertia("Home/Home",["users"=>User::all(),"events" =>  Event::where("user_id",auth()->id())->get()]);
    }
    public function reload(Request $request)
    {

        $id = $request->input("id");
        //dd($id);
        return inertia("Home/Home",["users"=>User::all(),"events" =>  Event::where("user_id",$id)->get()]);
    }
}

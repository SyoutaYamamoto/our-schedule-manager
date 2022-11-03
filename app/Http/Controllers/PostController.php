<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia; //追加
use App\Models\Post; //追加

class PostController extends Controller
{
    //
    /*public function index()
    {
        return Inertia::render("Post/Index");
    }*/
    public function index(Post $post)
    {
        // 編集
        return Inertia::render("Post/Index",["posts" => $post->get()]);
        
    }
}

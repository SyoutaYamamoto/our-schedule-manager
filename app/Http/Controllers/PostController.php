<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia; //追加
use App\Models\Post; //追加
use App\Http\Requests\PostRequest;
use App\Models\Category;

class PostController extends Controller
{
    //
    /*public function index()
    {
        return Inertia::render("Post/Index");
    }*/
    public function index()
    {
        return Inertia::render("Post/Index",["posts" => Post::with("category")->get()]);
    }
    public function show(Post $post)
    {
    // Eagerローディングを使って、Controller内でリレーション先のデータを紐付ける
        return inertia("Post/Show", ["post" => $post->load('category')]);
    }
    public function create(Category $category)
    {
        return Inertia::render("Post/Create",["categories" => $category->get()]);
    }
    public function store(PostRequest $request, Post $post)
    {
        $input = $request->all();
        $post->fill($input)->save();
        return redirect("/posts");
    }
    public function edit(Post $post)
    {
        return Inertia::render("Post/Edit", ["posts" => $post]);
        
    }
    public function update(PostRequest $request, Post $post)
    {
        $input = $request->all();
        $post->fill($input)->save();
        return redirect("/posts/" . $post->id);
        
    }
    public function delete(Post $post)
    {
        $post->delete();
        return redirect("/posts");
        
    }

}
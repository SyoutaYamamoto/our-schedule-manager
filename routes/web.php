<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\PostController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::group(["middleware" => ["auth"]], function() {
    // 削除 接続可       
    /*Route::get("/posts", function() {
       return Inertia::render("Post/Index");
     }) ;*/
    //　カリキュラム追加② 不可　Target class [PostController] does not exist.
    Route::get("/posts", [PostController::class, "index"]);
    //Route::get("/posts",'App\Http\Controllers\PostController@index');
    //カリキュラム追加③ 不可　Target class [PostController] does not exist.
   Route::get("/posts/create", [PostController::class, "create"]); 
   Route::get("/posts/{post}", [PostController::class, "show"]);//階層同じなら変数{}持たせるよりも上に書く
   Route::post("/posts", [PostController::class, "store"]);
   Route::get('/posts/{post}/edit', [PostController::class, "edit"]);
   Route::put('/posts/{post}', [PostController::class, "update"]);
   Route::delete("/posts/{post}", [PostController::class, "delete"]);
    //Route::get("/posts/{post}", 'App\Http\Controllers\PostController@show');
    //カリキュラム追加④ 不可　404Not Found 
    
    //Route::get("/posts/create",'App\Http\Controllers\PostController@create');

});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/auth.php';


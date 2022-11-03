<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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
    //　カリキュラム追加 不可　Target class [PostController] does not exist.
    //Route::get("/posts", [PostController::class, "index"]);
    Route::get("/posts",'App\Http\Controllers\PostController@index');

});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/auth.php';


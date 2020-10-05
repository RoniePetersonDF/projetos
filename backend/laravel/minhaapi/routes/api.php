<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::namespace('Api')->prefix('products')->group(function () {
    Route::get('/', 'ProductController@index');
    Route::get('/{id}', 'ProductController@show');
    Route::post('/', 'ProductController@store');
    Route::put('/', 'ProductController@update');
    Route::delete('/{id}', 'ProductController@destroy');
});

Route::get('users', function() {
    return ["msg" =>"oi"];
});


Route::get('users/{id}', function($id) {
    return $id;
});


/*
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
*/

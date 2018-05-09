<?php

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

Route::group([
    'middleware' => ['admin'],
    'namespace' => 'Admin',
    'prefix' => 'admin',
    'as' => 'admin::',
],function(\Illuminate\Routing\Router $router) {

    Route::get('/', 'DashboardController@index')->name('dashboard');

});

Route::get('/', function () {
    return view('welcome');
});


// imagecache route
$filename_pattern = '[ \w\\.\\/\\-\\@\(\)]+';

// route to access template applied image file
Route::get('img/cache/{template}/{filename}', 'ImageController@getResponse')
    ->name('image')
    ->where(['filename' => $filename_pattern]);

// Seo urls
Route::get('{uri?}', 'SeoUrlController@index')->where('uri', '.*');
<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return 'Running...';
});

$router->group(['prefix' => 'api'], function () use ($router) {
    $router->get('material', 'MaterialController@index');
    $router->get('material/{id}', 'MaterialController@show');
    $router->post('material', 'MaterialController@store');
    $router->put('material/{id}', 'MaterialController@update');
    $router->delete('material/{id}', 'MaterialController@destroy');
});
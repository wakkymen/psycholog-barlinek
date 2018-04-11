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
    return $router->app->version();
});

$router->group(['prefix' => 'api'], function() use ($router) {
    $router->get('pages', ['uses' => 'PageController@showAllPages']);
    $router->get('pages/{id}', ['uses' => 'PageController@showOnePage']);
    $router->post('pages', ['middleware' => 'auth', 'uses' => 'PageController@create']);
    $router->delete('pages/{id}', ['middleware' => 'auth', 'uses' => 'PageController@delete']);
    $router->put('pages/{id}', ['middleware' => 'auth', 'uses' => 'PageController@update']);

    $router->get('articles', ['uses' => 'ArticlesController@showAllArticles']);
    $router->get('articles/{id}', ['uses' => 'ArticlesController@showOneArticle']);
    $router->post('articles', ['middleware' => 'auth', 'uses' => 'ArticlesController@create']);
    $router->delete('articles/{id}', ['middleware' => 'auth', 'uses' => 'ArticlesController@delete']);
    $router->put('articles/{id}', ['middleware' => 'auth', 'uses' => 'ArticlesController@update']);

    $router->post('login', ['uses' => 'UserController@login']);
});
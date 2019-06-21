 <?php

    $router->get('', 'PagesController@home');
    $router->get('about', 'PagesController@about');
    $router->get('contact', 'PagesController@contact');

    $router->get('users', 'UsersController@index');
    $router->post('users', 'UsersController@store');

    $router->get('notas', 'NotasController@index');
    $router->get('notas/crear', 'NotasController@create');
    $router->post('tasks/save', 'TasksController@save');

    $router->get('not_found', 'ProjectController@notFound');
    $router->get('internal_error', 'ProjectController@internalError');

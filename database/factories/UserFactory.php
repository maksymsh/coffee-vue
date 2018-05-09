<?php

use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(App\Models\User::class, function (Faker $faker) {
    $now = \Carbon\Carbon::now();
    return [
        'name' => $faker->name,
        'phone' => $faker->phoneNumber,
        'email' => $faker->email,
        'password' => Hash::make('password'),
        'is_admin' => 0,
        'activated' => 1,
        'created_at' => $now,
        'updated_at' => $now,
    ];
});

<?php

use Faker\Generator as Faker;

$factory->define(\App\Models\Banner::class, function (Faker $faker) {
    return [
        'name' => $faker->text(20),
        'active' => 1
    ];
});

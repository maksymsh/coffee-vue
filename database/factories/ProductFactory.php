<?php

use Faker\Generator as Faker;

$factory->define(\App\Models\Product::class, function (Faker $faker) {
    $names = ['15041 Убестезин', 'Датчик Sp02'];
    $name = $names[rand(0,1)];
    $now = \Carbon\Carbon::now();
    return [
        'name' => $name,
        'title' => $name,
        'article' => $faker->numberBetween(),
        'model' => $faker->numberBetween(),
        'manufacturer_id' => rand(1,12),
        'short_description' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tem portul indunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        'description' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tem portul indunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        'active' => 1,
        'price' => $faker->numberBetween(100, 9999),
        'quantity' => $faker->numberBetween(100, 999),
        'slug' => \Cocur\Slugify\Slugify::create()->slugify($name),
        'created_at' => $now,
        'updated_at' => $now,
    ];
});

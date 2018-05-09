<?php

use Faker\Generator as Faker;

$factory->define(\App\Models\News::class, function (Faker $faker) {
    $slug = \Cocur\Slugify\Slugify::create();
    $name = $faker->text(50);
    return [
        'name' => $name,
        'title' => $name,
        'slug' => $slug->slugify($name),
        'short_description' => $faker->text(100),
        'description' => $faker->text(500),
        'active' => 1,
    ];
});

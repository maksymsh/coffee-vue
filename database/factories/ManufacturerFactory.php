<?php

use Faker\Generator as Faker;

$factory->define(\App\Models\Manufacturer::class, function (Faker $faker, $a) {
    $name = $faker->text(20);
    return [
        'name' => $name,
        'slug' => \Cocur\Slugify\Slugify::create()->slugify($name),
        'active' => 1
    ];
});

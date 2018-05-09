<?php

use Faker\Generator as Faker;

$factory->define(\App\Models\Feedback::class, function (Faker $faker) {
    return [
        'user_id' => rand(1, 10),
        'data' => json_encode([
            'name' => $faker->name,
            'phone' => $faker->phoneNumber,
            'email' => $faker->email,
            'comment' => $faker->text(100)
        ])
    ];
});

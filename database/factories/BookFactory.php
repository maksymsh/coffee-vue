<?php

use Faker\Generator as Faker;

$factory->define(\App\Models\Book::class, function (Faker $faker) {
    return [
        'status_id' => $faker->numberBetween(1,3),
        'shipping_method_id' => $faker->numberBetween(1,2),
        'payment_method_id' => $faker->numberBetween(1,2),
        'total' =>  $faker->numberBetween(99,999),
        'req_name' => $faker->name,
        'req_code' => $faker->numberBetween(1000000,9999999),
        'req_kpp' => $faker->numberBetween(1000000,9999999),
        'req_company' => $faker->numberBetween(100000, 999999),
        'req_address' => $faker->address,
        'addr_name' => $faker->name,
        'addr_phone' => $faker->phoneNumber,
        'addr_address' => $faker->address,
        'comment' => $faker->text,
        'created_at' => \Carbon\Carbon::now(),
        'updated_at' => \Carbon\Carbon::now(),
        'date' => \Carbon\Carbon::now()->addDays(rand(10,30)),
    ];
});

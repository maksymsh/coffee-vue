<?php

use Illuminate\Database\Seeder;
use Cocur\Slugify\Slugify;

class ShippingMethodsTableSeeder extends Seeder
{

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('shipping_methods')->insert([
            ['name' => 'Доставка Деловые линии','active' => 1, 'value' => 100],
            ['name' => '﻿Закажу курьера сам','active' => 1, 'value' => 200],
        ]);
    }
}

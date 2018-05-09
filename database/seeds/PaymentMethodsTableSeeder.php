<?php

use Illuminate\Database\Seeder;
use Cocur\Slugify\Slugify;

class PaymentMethodsTableSeeder extends Seeder
{

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('payment_methods')->insert([
            ['name' => 'На Юр.счет','active' => 1],
            ['name' => '﻿﻿На физ.счет','active' => 1],
        ]);
    }
}

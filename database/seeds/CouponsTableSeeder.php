<?php

use Illuminate\Database\Seeder;

class CouponsTableSeeder extends Seeder
{
	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		DB::table('coupons')->insert([
			[
				'name' => 1,
				'code' => 1,
				'value' => 10,
				'starts_at' => '2018-05-06 00:00:00',
				'ends_at' => '2018-05-12 00:00:00',
				'max_uses' => 1,
				'uses' => 0
			]
		]);
	}
}

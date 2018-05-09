<?php

use Illuminate\Database\Seeder;

class FeedbackTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = factory(\App\Models\Feedback::class, rand(20,30))->make();

        DB::table('feedback')->insert($data->toArray());
    }
}

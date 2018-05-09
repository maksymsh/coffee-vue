<?php

use Illuminate\Database\Seeder;

class OptionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            ['name' => 'Checkbox', 'type' => 'checkbox', 'active' => 1, 'values' => [
                ['name' => 'Checkbox 1'], ['name' => 'Checkbox 2'], ['name' => 'Checkbox 3'], ['name' => 'Checkbox 4'],
            ]],
            /*['name' => 'Date', 'type' => 'date', 'active' => 1],
            ['name' => 'Date & Time', 'type' => 'datetime', 'active' => 1],
            ['name' => 'Delivery Date', 'type' => 'date', 'active' => 1],
            ['name' => 'File', 'type' => 'file', 'active' => 1],*/
            ['name' => 'Size', 'type' => 'radio', 'active' => 1, 'values' => [
                ['name' => 'Small'], ['name' => 'Medium'], ['name' => 'Large'],
            ]],
            ['name' => 'Color', 'type' => 'select', 'active' => 1, 'values' => [
                ['name' => 'Red'], ['name' => 'Blue'], ['name' => 'Green'], ['name' => 'Yellow'],
            ]],
            /*['name' => 'Size', 'type' => 'select', 'active' => 1, 'values' => [
                ['name' => 'Small'], ['name' => 'Medium'], ['name' => 'Large'],
            ]],
            ['name' => 'Text', 'type' => 'text', 'active' => 1],
            ['name' => 'Textarea', 'type' => 'textarea', 'active' => 1],
            ['name' => 'Time', 'type' => 'time', 'active' => 1],*/
        ];

        foreach ($data as $datum)
            \App\Models\Option::create($datum);
    }
}

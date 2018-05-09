<?php

use Illuminate\Database\Seeder;
use Cocur\Slugify\Slugify;

class StatusesTablesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->runOrderStatuses();
        $this->runBookStatuses();
    }

    public function runOrderStatuses()
    {
        DB::table('order_statuses')->insert([
            ['name' => 'Новый','active' => 1, 'icon' => ''],
            ['name' => 'В обработке','active' => 1, 'icon' => ''],
            ['name' => 'Ждет отправки','active' => 1, 'icon' => ''],
            ['name' => 'Отправлен','active' => 1, 'icon' => ''],
            ['name' => 'Доставлен','active' => 1, 'icon' => ''],
            ['name' => 'Выполнен','active' => 1, 'icon' => ''],
            ['name' => 'Отменен','active' => 1, 'icon' => ''],
        ]);
    }

    public function runBookStatuses()
    {
        DB::table('book_statuses')->insert([
            ['name' => 'Новый','active' => 1, 'icon' => ''],
            ['name' => 'На рассмотрении','active' => 1, 'icon' => 'icon_room_user fas fa-user'],
            ['name' => 'Забронированно','active' => 1, 'icon' => 'icon_room_ok far fa-check-circle'],
            ['name' => 'Отказано','active' => 1, 'icon' => 'icon_room_delete fas fa-times-circle'],
        ]);
    }





}

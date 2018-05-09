<?php

use Illuminate\Database\Seeder;

class AttributesTableSeeder extends Seeder
{

    public static $attributes = [
        'Исполнение' => ['открытый', 'закрытый'],
        'Материал корпуса' => ['сталь', 'алюминий'],
        'Количество ламп' => ['2', '4'],
        'Мощность ламп, Вт' => ['10', '20'],
        'Укомплектование лампами' => ['есть', 'нету'],
        'Тип цоколя лампы' => ['G13', 'G15'],
        'Производительность, м³\ч' => ['50', '60'],
        'Рекомендуемый объем помещения, м³' => ['30', '40'],
        'Категории помещений' => ['I,II,III,IV,V', 'I,II,III'],
        'Бактерицидный поток ламп, Вт' => ['3.5', '4']
    ];

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach (static::$attributes as $attribute => $values) {
            $data[] = ['name' => $attribute, 'active' => 1];
        }
        DB::table('attributes')->insert($data);

    }
}

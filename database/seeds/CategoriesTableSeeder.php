<?php

use Illuminate\Database\Seeder;
use Cocur\Slugify\Slugify;

class CategoriesTableSeeder extends Seeder
{
    protected $slug;
    
    public function __construct()
    {
        $this->slug = new Slugify();
    }

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [];

        $cat1 = [
            'Датчик SpO2',
            'Датчик SpO2 одноразовые',
            'Манжеты АД',
            'Кабели ЭКГ для мониторов',
            'Кабель ЭКГ для кардиографов',
            'УЗИ датчики',
            'УЗ датчик для феталного  монитора',
            'ТОКО датчик для  феталного монитора',
            'Температурные датчики',
            'Кислородные датчики',
        ];
        $cat2 = [
            'Фетальный допплер',
            'Фетальный монитор',
            'Монитор пациента',
            'Электрокардиограф',
            'УЗИ сканеры',
        ];

        DB::table('categories')->insert([
            [
                'name' => 'Аксессуары',
                'title' => 'Аксессуары',
                'slug' => $this->slug->slugify('Аксессуары '),
                'parent_id' => 0,
                'active' => 1,
                'short_description' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tem portul indunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                'description' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tem portul indunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',

            ],
            [
                'name' => 'Оборудование',
                'title' => 'Оборудование',
                'slug' => $this->slug->slugify('Оборудование '),
                'parent_id' => 0,
                'active' => 1,
                'short_description' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tem portul indunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                'description' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tem portul indunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',

            ],
        ]);
        foreach ($cat1 as $name) {
            $data[] = [
                'name' => $name,
                'title' => $name,
                'slug' => $this->slug->slugify($name),
                'parent_id' => 1,
                'active' => 1,
                'short_description' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tem portul indunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                'description' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tem portul indunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',

            ];
        }
        foreach ($cat2 as $name) {
            $data[] = [
                'name' => $name,
                'title' => $name,
                'slug' => $this->slug->slugify($name),
                'parent_id' => 2,
                'active' => 1,
                'short_description' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tem portul indunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                'description' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tem portul indunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',

            ];
        }
        DB::table('categories')->insert($data);

    }
}

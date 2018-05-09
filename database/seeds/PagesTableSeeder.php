<?php

use Illuminate\Database\Seeder;
use Cocur\Slugify\Slugify;

class PagesTableSeeder extends Seeder
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

        $pages = [
            'Компания',
            'О компании',
            'Информация',
            'Помощь',
            'Условия оплаты',
            'Условия доставки',
        ];

        foreach ($pages as $page) {
            $data[] = [
                'name' => $page,
                'title' => $page,
                'slug' => $this->slug->slugify($page),
                'description' => $page,
                'active' => 1
            ];
        }

        $data[] = [
            'name' => 'Производители',
            'title' => 'Производители',
            'slug' => $this->slug->slugify('Производители'),
            'active' => 1,
            'description' => <<<TEXT
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda tenetur nisi soluta, totam pariatur quaerat deserunt odit ullam, unde nobis itaque recusandae rerum neque! Quasi eos enim accusamus unde veniam.</p>

<p>@widget(manufacturers,expanded)</p>

<h3>Header</h3>

<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>

TEXT
        ];

        $data[] = [
            'name' => 'Акции и новости',
            'title' => 'Акции и новости',
            'slug' => $this->slug->slugify('Акции и новости'),
            'active' => 1,
            'description' => <<<TEXT
<p>@widget(news)</p>
<p>@widget(contact)</p>
TEXT
        ];

        DB::table('pages')->insert($data);

    }
}

<?php

use Illuminate\Database\Seeder;
use Cocur\Slugify\Slugify;

class NewsTableSeeder extends Seeder
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
        $now = \Carbon\Carbon::now();

        DB::table('news')->insert(factory(\App\Models\News::class, 20)->make()->each(function(\App\Models\News $news) use ($now){
            $news->setCreatedAt($now);
            $news->setUpdatedAt($now);
        })->toArray());

        $first = \App\Models\News::find(1);

        File::copy(public_path('assets/img/news1.jpg'), storage_path('news1.jpg'));
        $first->addMedia(storage_path('news1.jpg'))->toMediaCollection('image');

        DB::statement("ALTER TABLE news AUTO_INCREMENT = 1000;");

    }
}

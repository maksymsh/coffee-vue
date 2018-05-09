<?php

use Illuminate\Database\Seeder;
use Cocur\Slugify\Slugify;

class BannersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(\App\Models\Banner::class, 6)->create()->each(function(\App\Models\Banner $banner){
            $image = 'assets/img/banner' . $banner->id . '.jpg';
            $parts = explode('/', $image);
            $filename = array_pop($parts);
            File::copy(public_path($image), storage_path($filename));
            $banner->addMedia(storage_path($filename))->toMediaCollection('image');
        });
    }
}

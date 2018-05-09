<?php

use Illuminate\Database\Seeder;
use Cocur\Slugify\Slugify;

class ManufacturersTableSeeder extends Seeder
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
        $manufacturers = [
            'Dräger' => 'assets/img/partner/744px-Dräger_Logo.svg.png',
            'General Electric' => 'assets/img/partner/2000px-General_Electric_logo.svg.png',
            'Philips' => 'assets/img/partner/2000px-Philips_logo_new.svg.png',
            'Schiller' => 'assets/img/partner/ca1f1fb4f2bf41015f024f46c91f9c4e.png',
            'Comen' => 'assets/img/partner/comen-logo.png',
            'Dixons Carphone' => 'assets/img/partner/Dixons_Carphone_logo.png',
            'Edan' => 'assets/img/partner/edan1.png',
            'Masimo' => 'assets/img/partner/masimo.png',
            'Mindary' => 'assets/img/partner/mindray-logo-1-e1481909901692.png',
            'Nellcor' => 'assets/img/partner/nellcor.jpg',
            'Nihon Kohden' => 'assets/img/partner/Nihon_Kohden_company_logo.svg.png',
            'Nonin' => 'assets/img/partner/NoninLogoBlueTag.jpg',
        ];

        foreach ($manufacturers as $name => $image) {
            $manufacturer = \App\Models\Manufacturer::create([
                'name' => $name,
                'title' => $name,
                'slug' => $this->slug->slugify($name),
                'active' => 1,
                'short_description' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tem portul indunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                'description' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tem portul indunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',

            ]);
            $parts = explode('/', $image);
            $filename = array_pop($parts);
            File::copy(public_path($image), storage_path($filename));
            $manufacturer->addMedia(storage_path($filename))->toMediaCollection('image');
        }

    }
}

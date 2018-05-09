<?php

use Illuminate\Database\Seeder;
use Cocur\Slugify\Slugify;

class ProductsTableSeeder extends Seeder
{
    protected $slug;
    protected $attributes;

    public function __construct()
    {
        $this->slug = new Slugify();
        $this->attributes = AttributesTableSeeder::$attributes;
    }
    
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            'products' => factory(\App\Models\Product::class, 50)->make()->toArray(),
            'category_product' => [],
            'attribute_product' => [],
            'specials' => [],
        ];

        $category_ids = \App\Models\Category::pluck('id');

        foreach ($data['products'] as $i => $product) {
            foreach ($category_ids as $j => $category_id) {
                $data['category_product'][] = [
                    'category_id' => $category_id,
                    'product_id' => $i + 1,
                    'main' => !$i
                ];
            }
            foreach (array_values($this->attributes) as $attribute_id => $values){
                $data['attribute_product'][] = [
                    'product_id' => $i + 1,
                    'attribute_id' => $attribute_id + 1,
                    'value' => $values[rand(0,1)]
                ];
            }

            if(rand(0,9) > 5){
                $data['specials'][] = [
                    'product_id' => $i + 1,
                    'value' => rand(10,30),
                    'starts_at' => \Carbon\Carbon::now(),
                    'ends_at' => \Carbon\Carbon::now()->addDays(rand(10,30)),
                ];

                foreach (\App\Models\Option::all() as $j => $option) {
                    $value = null;


                    $data['product_options'][] = [
                        'product_id' => $i + 1,
                        'option_id' => $option->id,
                        'value' => $value,
                    ];

                    if(in_array($option->type, ['select', 'checkbox', 'radio'])){
                        $option->values->map(function (\App\Models\OptionValue $value) use (&$data, $i, $j){
                            $data['product_option_values'][] = [
                                'product_option_id' => $i + $j + 1,
                                'option_value_id' => $value->id,
                                'quantity' => rand(1,999),
                                'price' => rand(99,999)
                            ];
                        });
                    }
                }
            }

        }

        foreach ($data as $key => $value) {
            DB::table($key)->insert($value);
        }

        DB::statement("ALTER TABLE products AUTO_INCREMENT = 1000;");

        File::copy(public_path('assets/img/produkt_01.jpg'), storage_path('produkt_01.jpg'));
        File::copy(public_path('assets/img/product1.jpg'), storage_path('product1.jpg'));

        $first = \App\Models\Product::find(1);
        $first->addMedia(storage_path('produkt_01.jpg'))->toMediaCollection('image');
        $first->addMedia(storage_path('product1.jpg'))->toMediaCollection('images');

        $image = $first->getFirstMedia('images');

        foreach ($data['products'] as $i => $product) {
            for($j = 0; $j < rand(0,5); $i++){
                $new_image = $image->replicate();
                $new_image->model_id = $i + 1;
                $new_image->save();
            }
        }
    }
}

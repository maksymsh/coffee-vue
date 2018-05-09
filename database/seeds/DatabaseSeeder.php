<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //$this->truncateAll();

        Cache::clear();

        $this->call(CategoriesTableSeeder::class);
        $this->call(AttributesTableSeeder::class);
        $this->call(OptionsTableSeeder::class);
        $this->call(ProductsTableSeeder::class);
        $this->call(PagesTableSeeder::class);
        $this->call(NewsTableSeeder::class);
        $this->call(StatusesTablesSeeder::class);
        $this->call(ManufacturersTableSeeder::class);
        $this->call(BannersTableSeeder::class);
        $this->call(ShippingMethodsTableSeeder::class);
        $this->call(PaymentMethodsTableSeeder::class);
        $this->call(UsersTableSeeder::class);
        $this->call(FeedbackTableSeeder::class);
        $this->call(RatesTableSeeder::class);
        $this->call(CouponsTableSeeder::class);

        echo "Importing settings.\n";
        
        app()->call('Admin\Controllers\SettingsController@import');
    }

    private function truncateAll(){
        echo "Truncating tables.\n";

        $tables = DB::select('SHOW TABLES');
        foreach($tables as $table)
        {
            $t = (array) $table;
            $table_name = array_shift($t);
            DB::table($table_name)->truncate();
        }
    }
}

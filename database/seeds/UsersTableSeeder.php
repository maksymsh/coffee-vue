<?php

use Illuminate\Database\Seeder;
use Cocur\Slugify\Slugify;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $now = \Carbon\Carbon::now();

        $users = factory(\App\Models\User::class, 10)->make()->each(function(\App\Models\User $user) use ($now) {
            $user->setCreatedAt($now);
            $user->setUpdatedAt($now);
            $user->makeVisible(['password']);
        });

        DB::table('users')->insert([
            [
                'name' => 'Admin',
                'phone' => '+380000000000',
                'email' => 'admin',
                'password' => Hash::make('admin'),
                'is_admin' => 1,
                'activated' => 1,
                'created_at' => $now,
                'updated_at' => $now,
            ]
        ]);
        DB::statement("ALTER TABLE users AUTO_INCREMENT = 100;");
        DB::table('users')->insert($users->toArray());

        $order_products = $book_products = [];

        // Insert orders
        $orders = factory(\App\Models\Order::class, 10)->make()->each(function(\App\Models\Order $order, $order_id) use ($now, $users, &$order_products) {
            $order->setCreatedAt($now);
            $order->user_id = rand(2, $users->count());

            for($product_id = 0; $product_id < rand(2,6); $product_id++)
                $order_products[] = [
                    'order_id' => $order_id + 1,
                    'product_id' => $product_id + 1,
                    'quantity' => rand(1,10),
                    'options' => '[]',
                    'total' => rand(100,999)
                ];
        });
        DB::table('orders')->insert($orders->toArray());
        DB::table('order_product')->insert($order_products);


        $books = factory(\App\Models\Book::class, 10)->make()->each(function(\App\Models\Book $book, $book_id) use ($now, $users, &$book_products) {
            $book->setCreatedAt($now);
            $book->user_id = rand(2, $users->count());

            for($product_id = 10; $product_id < rand(11,20); $product_id++)
                $book_products[] = [
                    'book_id' => $book_id + 1,
                    'product_id' => $product_id + 1,
                    'quantity' => rand(1,10),
                    'options' => '[]',
                    'total' => rand(100,999)
                ];
        });
        DB::table('books')->insert($books->toArray());
        DB::table('book_product')->insert($book_products);

    }
}

<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBookProductTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('book_product', function (Blueprint $table) {
            $table->unsignedInteger('book_id');
            $table->unsignedInteger('product_id');
            $table->integer('quantity')->default(0)->nullable();
            $table->text('options')->nullable();
            $table->decimal('total', 12, 2)->nullable()->default(0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('book_product');
    }
}

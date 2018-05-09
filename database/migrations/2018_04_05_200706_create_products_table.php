<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->increments('id');
            $table->string('article')->nullable();
            $table->string('model')->nullable();
            $table->string('slug')->nullable();
            $table->string('name');
            $table->text('short_description')->nullable();
            $table->text('description')->nullable();
            $table->string('title')->nullable();
            $table->decimal('price', 12, 2)->default(0)->nullable();
            $table->integer('quantity')->default(0)->nullable();
            $table->unsignedInteger('category_id')->nullable();
            $table->unsignedInteger('manufacturer_id')->nullable();
            $table->boolean('active')->nullable()->default(0);
            $table->integer('sort_order')->nullable()->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('products');
    }
}

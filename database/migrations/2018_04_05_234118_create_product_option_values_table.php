<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductOptionValuesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product_option_values', function (Blueprint $table) {
            $table->unsignedInteger('product_option_id');
            $table->unsignedInteger('option_value_id');
            $table->integer('quantity')->nullable()->default(0);
            $table->decimal('price', 12, 2)->nullable()->default(0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('product_option_values');
    }
}

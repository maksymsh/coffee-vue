<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

/**
 * Class CreateShippingMethodsTable
 * @see \App\Models\ShippingMethod
 */
class CreateShippingMethodsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('shipping_methods', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->text('description')->nullable();
            $table->decimal('value', 12, 2)->nullable();
            $table->boolean('active')->default(0)->nullable();
            $table->integer('sort_order')->default(0)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('shipping_methods');
    }
}

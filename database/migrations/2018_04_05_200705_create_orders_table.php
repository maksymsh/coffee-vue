<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('status_id')->nullable()->default(1);
            $table->unsignedInteger('user_id')->nullable();
            $table->unsignedInteger('address_id')->nullable();
            $table->unsignedInteger('requisite_id')->nullable();
            $table->unsignedInteger('coupon_id')->nullable();
            $table->unsignedInteger('shipping_method_id')->nullable();
            $table->unsignedInteger('payment_method_id')->nullable();
            $table->decimal('total', 12, 2)->nullable();
            $table->string('ip')->nullable();
            
            $table->string('req_name')->nullable();
            $table->string('req_code')->nullable();
            $table->string('req_kpp')->nullable();
            $table->string('req_company')->nullable();
            $table->string('req_email')->nullable();
            $table->string('req_phone')->nullable();
            $table->string('req_address')->nullable();
            $table->string('req_country')->nullable();
            $table->string('req_city')->nullable();
            $table->string('req_region')->nullable();
            $table->string('req_index')->nullable();

            $table->string('addr_name')->nullable();
            $table->string('addr_code')->nullable();
            $table->string('addr_kpp')->nullable();
            $table->string('addr_company')->nullable();
            $table->string('addr_email')->nullable();
            $table->string('addr_phone')->nullable();
            $table->string('addr_address')->nullable();
            $table->string('addr_country')->nullable();
            $table->string('addr_city')->nullable();
            $table->string('addr_region')->nullable();
            $table->string('addr_index')->nullable();
            
            $table->text('comment')->nullable();
            $table->text('reason')->nullable();

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
        Schema::drop('orders');
    }
}

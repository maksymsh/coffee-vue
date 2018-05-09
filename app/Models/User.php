<?php

namespace App\Models;

use App\Models\UserCoupons;
use Illuminate\Auth\Authenticatable;
use Illuminate\Auth\Passwords\CanResetPassword;
use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Contracts\Auth\CanResetPassword as CanResetPasswordContract;
use Illuminate\Foundation\Auth\Access\Authorizable;
use Illuminate\Notifications\Notifiable;

/**
* @see \CreateUsersTable
* @see \UsersTableSeeder
*/
class User extends MasterModel implements
    AuthenticatableContract,
    AuthorizableContract,
    CanResetPasswordContract
{
    use Authenticatable, Authorizable, CanResetPassword;
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id', 'type', 'code', 'name', 'phone', 'email', 'password', 'is_admin', 'activated'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /*==================Relations==================*/
    public function cart(){
        return $this->belongsToMany(Product::class, 'carts')
            ->withPivot(['quantity', 'options', 'id', 'shipping_method_id']);
    }

    public function wishlist(){
        return $this->belongsToMany(Product::class, 'wishlists');
    }

    public function orders(){
        return $this->hasMany(Order::class);
    }

    public function books(){
        return $this->hasMany(Book::class);
    }

    public function addresses(){
        return $this->hasMany(Address::class);
    }

    public function requisites(){
        return $this->hasMany(Requisite::class);
    }
    public function coupon()
    {
        return $this->hasOne(UserCoupons::class);
    }
    /*================End Relations================*/

    public function setPasswordAttribute($password){
        $this->attributes['password'] = ($this->exists && $this->attributes['password'] === $password) ? $password : \Hash::make($password);
    }

    public static function addProductToCart($products)
    {

        foreach ($products as $product) {
            $item = new Cart;
            $item->user_id = \Auth::id();
            $item->product_id = $product['id'];
            $item->quantity = $product['quantity'];
            if (!is_null($product['options'])) $item->options = $product['options'];
            $item->shipping_method_id = $product['shipping_method_id'];

            $item->save();
        }

    }

    public static function getCart()
    {


        if(\Auth::check()){
            $cart_products = \Auth::user()->cart;
            $cart = [];

            if (!empty($cart_products))
                foreach ($cart_products as $item) {
                    // dump($item->pivot);
                    $cart[$item->pivot->id] = [
                        'id' => $item->id,
                        'quantity' => $item->pivot->quantity,
                        'shipping_method_id' => $item->pivot->shipping_method_id,
                        'options' => json_decode($item->pivot->options, true)
                    ];
                }
        } else
            $cart = session('cart') ?? [];

        // return [];
        $cart_products = [];

        if (!empty($cart)) {

            foreach ($cart as $key => $item) {
                if(isset($item['id'])){
                    $product = Product::find($item['id']);
                    $product->pivot = new \stdClass;
                    $product->pivot->shipping_method = ShippingMethod::find($item['shipping_method_id']);
                    $product->pivot->quantity = $item['quantity'];
                    if (gettype($item['options']) == 'string')
                        $item['options'] = json_decode($item['options'], true);
                    foreach ($item['options'] ?? [] as $id => $op) {
                        $product->pivot->options[$id] = Option::find($id);
                        $product->pivot->options[$id]->pivot = new \stdClass;
                        $product->pivot->options[$id]->pivot->option = [];
                        foreach ($op as $pov) {
                            $product->pivot->options[$id]->pivot->option[$pov['id']] = [
                                'quantity' => $pov['quantity'],
                                'option' => ProductOptionValue::find($pov['id'])
                            ];
                        }
                    }
                    $cart_products[$key] = $product;
                }
            }
        } else {
            session(['cart' => []]);
            return [];
        }

        return $cart_products;
    }

    public function clearCart(){
        if(\Auth::check()){
            \Auth::user()->cart()->sync([]);
        } else {
            session(['cart' => []]);
        }
    }

    public static function getWishlist(){
        if(\Auth::check()){
            $wish_products = \Auth::user()->wishlist;
        } else {
            $wish_products = collect();
            foreach (session('wishlist') ?: [] as $item) {
                $product = Product::find($item['id']);
                $wish_products->push($product);
            }
        }
        return $wish_products;
    }

    public function clearWishlist(){
        if(\Auth::check()){
            \Auth::user()->wishlist()->sync([]);
        } else {
            session(['wishlist' => []]);
        }
    }


}

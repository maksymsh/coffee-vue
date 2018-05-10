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

    /*================End Relations================*/

    public function setPasswordAttribute($password){
        $this->attributes['password'] = ($this->exists && $this->attributes['password'] === $password) ? $password : \Hash::make($password);
    }
}

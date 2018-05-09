<?php

namespace App\Models\Traits;

use Illuminate\Database\Eloquent\Builder;

trait Active
{
    public static function bootActive()
    {
        /*static::addGlobalScope(function (Builder $q){
            return $q->active();
        });*/
    }

    public function scopeActive(Builder $q){
        return $q->where('active', 1);
    }
}
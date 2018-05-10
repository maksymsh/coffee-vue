<?php

namespace App\Models\Traits;

use Illuminate\Database\Eloquent\Builder;

trait Translatable
{
    public static function bootTranslatable()
    {

    }

    public function translations()
    {
        return;
    }

    public function scopeTranslated(Builder $q)
    {
        return $q;
    }
}
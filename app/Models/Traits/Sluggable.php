<?php

namespace App\Models\Traits;

use App\Models\Category;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

trait Sluggable
{
    use \Cviebrock\EloquentSluggable\Sluggable;

    public static function bootSluggable(){

    }

    public function getRouteKeyName()
    {
        return parent::getRouteKeyName();
    }

    public function getHumanFriendlyUrl(){
        return url();
    }
}
<?php

namespace App\Models\Traits;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Relations\Relation;

trait Nested
{
    public static function bootNested(){

    }

    public function parent() {
        return $this->belongsTo(static::class);
    }

    public function children() {
        return $this->hasMany(static::class, 'parent_id');
    }

    public function scopeNested( Builder $q, \Closure $callback = null ) {
        if ($callback) {
            $q = $callback($q);
        }

        return $q->with([ 'children' => function ( Relation $q ) use ( $callback ) {
            return $q->nested($callback);
        } ]);
    }

    public function scopeRoot($q){
        return $q->where('parent_id', 0)->orWhereNull('parent_id');
    }
}
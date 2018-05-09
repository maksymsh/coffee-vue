<?php

define('NO_IMG', '/images/no_image.png');

\Illuminate\Support\Collection::macro('multisort', function($array) {
    if($array)
        array_multisort(array_intersect($array, array_pluck($this->items,'id')), $this->items);
    return $this;
});

\Illuminate\Support\Collection::macro('paginate', function($perPage = null, $page = null, $options = []) {
    $page = $page ?: (\Illuminate\Pagination\Paginator::resolveCurrentPage() ?: 1);
    return new \Illuminate\Pagination\LengthAwarePaginator($this->forPage($page, $perPage ?: settings(strtolower(Route::getCurrentRoute()->getAction('namespace')) . '.paginate')), $this->count(), $perPage, $page, $options);
});

function settings($key = null, $default = null)
{
    static $settings;

    $value = null;

    if(is_null($settings))
    {
        $settings = Cache::remember('settings', 24*60, function() {
            $settings = array_map(
                function($arr){
                    return array_pluck($arr, 'value', 'key');
                },
                App\Models\Setting::all()->groupBy('group')->toArray()
            );
            return !ksort($settings) ?: $settings;
        });
    }

    if(is_null($key))
    {
        return $settings;
    }

    if(is_array($key))
    {
        return array_only($settings, $key);
    }

    if(is_string($key)){
        if($key === 'fresh'){
            $settings = array_map(
                function($arr){
                    return array_pluck($arr, 'value', 'key');
                },
                App\Models\Setting::all()->groupBy('group')->toArray()
            );
            return !ksort($settings) ?: $settings;
        }

        $parts = explode('.', $key);
        $root = array_shift($parts);
        $value = $settings[$root] ?? $default;

        if($value && $parts){
            while ($part = array_shift($parts)){
                $value = $value[$part] ?? $default;
            }
        }
    }

    return $value;
}

function layout($part, ...$data)
{
    return app()->call(Route::getCurrentRoute()->getAction('namespace') . '\LayoutController@index', compact('part', 'data'));
}

function widget($widget, ...$data){
    return app()->call('App\Http\Controllers\WidgetController@index', compact('widget', 'data'));
}
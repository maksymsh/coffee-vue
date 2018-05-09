<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Manufacturer;
use App\Models\Page;
use App\Models\Product;
use Illuminate\Http\Request;

class WidgetController extends Controller
{
    public function index(string $widget, array $data = [])
    {
        $parts = explode(',', $widget);
        $name = array_shift($parts);
        return $this->getWidget($name, $data, $parts);
    }

    protected function getWidget(string $widget, array $data, array $options)
    {
        $widgetVars = $this->prepareVars($data, $options);

        if($widgetClass = $this->getWidgetClass($widget, $widgetVars)) {
            return $widgetClass->render();
        }

        if (method_exists($this, $widget)) {
            return $this->callAction($widget, $widgetVars);
        }

        if (view()->exists('widgets.' . $widget)) {
            return view('widgets.' . $widget, $widgetVars);
        }
    }

    protected function getWidgetClass($widget, $widgetVars)
    {
        if(class_exists($widgetClass = 'App\\Widgets\\' . ucfirst($widget))){
            return new $widgetClass($widgetVars);
        }
    }

    protected function prepareVars(array $data, array $options)
    {
        $vars = [];

        //todo: convert data to vars
        foreach ($data as $key => $value) {
            $vars[$key] = $value;
        }

        //todo: convert options to vars
        foreach ($options as $option) {
            $value = explode(':', $option);
            $key = array_shift($value);
            if(!$value){
                $value = true;
            } elseif(count($value) === 1){
                $value = array_shift($value);
            }
            $vars[$key] = $value;
        }

        return $vars;
    }
}

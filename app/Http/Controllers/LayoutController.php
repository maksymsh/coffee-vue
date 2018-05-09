<?php

namespace App\Http\Controllers;

class LayoutController extends Controller
{
    public $breadcrumbs = [];

    public function index($part, $data)
    {
        if (method_exists($this, $part)) {
            return $this->$part($data);
        }
    }

    protected function header($data)
    {
        return view('common.header', $data);
    }

    protected function footer($data)
    {
        return view('common.footer', $data);
    }

    protected function sidebar($data)
    {
        return view('common.sidebar', $data);
    }

    protected function breadcrumbs($data)
    {
        return view('common.breadcrumbs', $data);
    }
}

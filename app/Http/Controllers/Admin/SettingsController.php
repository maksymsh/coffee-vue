<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;

class SettingsController extends AdminController
{
    public function index()
    {
        return view('admin.settings.index');
    }
}

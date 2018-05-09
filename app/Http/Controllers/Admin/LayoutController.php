<?php

namespace App\Http\Controllers\Admin;

use Lavary\Menu\Builder;
use Menu;

class LayoutController extends AdminController
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
        return view('admin.common.header', $data);
    }

    protected function footer($data)
    {
        return view('admin.common.footer', $data);
    }

    protected function sidebar($data)
    {
        Menu::make('sidebar_menu', function (Builder $menu){

            $menu->add(__('Dashboard'), url(''))
                ->prepend('<i class="material-icons">dashboard</i>');

            $catalog = $menu->add(__('Справочники'))
                ->prepend('<i class="material-icons">dashboard</i>');
            $catalog->add(__('Dashboard'), url(''))
                ->prepend('<i class="material-icons">dashboard</i>');

        });
        return view('admin.common.sidebar', $data);
    }

    protected function breadcrumbs($data)
    {
        return view('admin.common.breadcrumbs', $data);
    }
}

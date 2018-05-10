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

                $geo = $catalog->add(__('Геоданные'));
                $geo->add(__('Страны'));
                $geo->add(__('Регионы'));
                $geo->add(__('Населённые пункты'));
                $geo->add(__('Улицы'));
                $geo->add(__('Адреса'));

                $shop = $catalog->add(__('Магазин'));
                $shop->add(__('Категории'));
                $shop->add(__('Коллекции'));
                $shop->add(__('Аттрибуты'));
                $shop->add(__('Опции'));
                $shop->add(__('Фильтры'));
                $shop->add(__('Товары'));

            $catalog->add(__('Должности'));
            $catalog->add(__('Покупатели'));
            $catalog->add(__('Поставщики'));
            $catalog->add(__('Склады'));
            $catalog->add(__('Точки выдачи'));
            $catalog->add(__('Отделения перевозчика'));
            $catalog->add(__('Типы доставки'));
            $catalog->add(__('Типы оплаты'));


            $journal = $menu->add(__('Журналы'))
                ->prepend('<i class="material-icons">dashboard</i>');
            $journal->add(__('Тfdsfsd'));


            $settings = $menu->add(__('Настройки'))
                ->prepend('<i class="material-icons">dashboard</i>');
            $settings->add(__('Общие'));

        });
        
        return view('admin.common.sidebar', $data);
    }

    protected function breadcrumbs($data)
    {
        return view('admin.common.breadcrumbs', $data);
    }
}

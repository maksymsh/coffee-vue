<?php

namespace App\Http\Controllers\Admin\Traits;

use App\Http\Controllers\Controller;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Illuminate\Http\Response;


/**
 * Trait Resource
 */
trait Resource
{
    /**
     * Display a listing of the resource.
     *
     * @param Model $model
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    public function index(Model $model, Request $request)
    {
        $entities = $model->orderBy('id', 'desc')->paginate();

        return $this->__view('index', compact('entities', 'model'));
    }


    /**
     * Show the form for creating a new resource.
     *
     * @param Model $model
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    public function create(Model $model, Request $request)
    {
        return $this->__view('form', compact('model'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Model $model
     * @param Request $request
     * @return Response
     */
    public function store(Model $model, Request $request)
    {
        //todo:set rules
        /** @var $this Controller */
        $this->validate($request, []);

        $entity = $model->create($request->all());

        flash(__('Успех!'))->success();

        return $this->__response($entity, $request);
    }

    /**
     * Display the specified resource.
     *
     * @param Model $model
     * @param Request $request
     * @return Response
     *
     * @throws \Symfony\Component\HttpKernel\Exception\HttpException
     * @throws \Symfony\Component\HttpKernel\Exception\NotFoundHttpException
     */
    public function show(Model $model, Request $request)
    {
        if ($model) {
            return $this->__view('show', compact('model'));
        }

        abort(404);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param Model $model
     * @param Request $request
     * @return Response
     *
     * @throws \Symfony\Component\HttpKernel\Exception\HttpException
     * @throws \Symfony\Component\HttpKernel\Exception\NotFoundHttpException
     */
    public function edit(Model $model, Request $request)
    {
        if ($model) {
            return $this->__view('form', compact('model'));
        }

        abort(404);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Model $model
     * @param Request $request
     * @return Response
     *
     * @throws \Symfony\Component\HttpKernel\Exception\HttpException
     * @throws \Symfony\Component\HttpKernel\Exception\NotFoundHttpException
     */
    public function update(Model $model, Request $request)
    {

        if ($model) {

            //todo:rules
            /** @var $this Controller */
            $this->validate($request, []);

            $model->update($request->all());

            flash(__('Успех!'))->success();

            return $this->__response($model, $request);
        }

        abort(404);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Model $model
     * @param Request $request
     * @return Response
     * @throws \Exception
     */
    public function destroy(Model $model, Request $request)
    {
        if ($model) {
            $model->delete();
            return $this->__response($model, $request);
        }

        abort(404);
    }

    /**
     * @param $view
     * @param array $data
     * @return Response
     */
    protected function __view($view, $data = []){

        return view($view, $data);
    }

    /**
     * @param Model $model
     * @param Request $request
     * @return Response
     */
    protected function __response(Model $model, Request $request){
        if ($request->has('save_and_continue'))
            return $this->__redirect('edit');

        if ($request->has('save_and_create_new'))
            return $this->__redirect('create');

        return $this->__redirect('index');
    }

    /**
     * @param $action
     * @return Response
     */
    protected function __redirect($action){
        return $action;
    }
}

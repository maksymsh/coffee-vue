<?php

namespace App\Models\Traits;

use Illuminate\Http\UploadedFile;

trait Media
{
    use \Spatie\MediaLibrary\HasMedia\HasMediaTrait;

    protected $filesToSave = [];

    public $media = [
        [
            'name' => 'image',
            'type' => 'image',
            'single' => true
        ]
    ];

    public static function bootMedia(){

    }

    public function fill(array $attributes)
    {
        $model = parent::fill(array_only($attributes, $this->fillable));

        foreach ($attributes as $key => $value) {
            if($value instanceof UploadedFile || (is_array($value) && $value[array_keys($value)[0]] instanceof UploadedFile)){
                if($value instanceof UploadedFile)
                    $value = [$value];
                $this->filesToSave[$key] = $value;
            }
        }

        return $model;
    }

    public function save(array $options = [])
    {
        if($this->filesToSave){
            try{
                \DB::beginTransaction();

                $saved = parent::save($options);

                foreach ($this->filesToSave as $collection => $files) {
                    foreach ($files as $file) {
                        if($file instanceof UploadedFile){
                            $this->addMedia($file)->toMediaCollection($collection);
                        }
                    }
                }

                \DB::commit();
            } catch (\Exception $e){
                \DB::rollBack();
                throw $e;
            }
        } else {
            $saved = parent::save($options);
        }

        return $saved;
    }

    public function registerMediaCollections()
    {
        foreach ($this->media as $media) {
            $collection = $this->addMediaCollection($media['name']);

            if($media['single'] === true)
                $collection->singleFile();
        }
    }

    public function getImage($template = null){

        $image = $this->getFirstMedia('image');

        if($image){
            $image = $image->getUrl();
            if($template){
                $template = $this->getTable() . '_' . $template;
                $image = str_replace('original', $template, $image);
            }
        } else {
            $image = NO_IMG;
        }
        return $image;
    }

    public function hasImage(){
        return $this->getFirstMedia('image') !== null;
    }
}
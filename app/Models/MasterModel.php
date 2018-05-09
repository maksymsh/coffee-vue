<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasOneOrMany;
use Illuminate\Database\Eloquent\Relations\Relation;

class MasterModel extends Model
{
    protected $relationsToSave = [];

    public function getPerPage()
    {
        return settings('app.paginate', $this->perPage);
    }

    /*public static function boot()
    {
        parent::boot();
    }*/

    public function fill(array $attributes)
    {
        $model = parent::fill(array_only($attributes, $this->fillable));

        foreach ($attributes as $key => $value) {
            if(!in_array($key, ['save']) && method_exists($this, $key)){
                $relation = $model->$key();
                if($relation instanceof Relation) {
                    $this->relationsToSave[$key] = [$relation, $value];
                }
            }
        }

        return $model;
    }

    public function save(array $options = [])
    {
        if($this->relationsToSave){
            try{
                \DB::beginTransaction();

                $saved = parent::save($options);

                foreach ($this->relationsToSave as $key => $rel) {
                    $relation = $rel[0];
                    $data = $rel[1];

                    if($relation instanceof HasOneOrMany){
                        $relation->delete();
                        if($data !== null)
                            $relation->createMany($data);
                    } elseif($relation instanceof BelongsToMany){
                        $relation->sync([]);
                        if($data !== null)
                            $relation->sync($data);
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


}

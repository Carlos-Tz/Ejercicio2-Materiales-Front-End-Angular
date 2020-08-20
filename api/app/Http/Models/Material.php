<?php

namespace App\Http\Models;

use Illuminate\Database\Eloquent\Model;


class Material extends Model {
    protected $table = 'material';
    protected $guarded = ['id'];
    protected $fillable = ['id', 'name', 'unit', 'price', 'stock'];
}
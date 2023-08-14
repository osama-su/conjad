<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    use HasFactory;

    protected $fillable = [
        'step_id',
        'name',
        'title',
        'options',
        'type',
    ];

    protected $casts = [
        'options' => 'array',
    ];

    public function step()
    {
        return $this->belongsTo(Step::class);
    }
}

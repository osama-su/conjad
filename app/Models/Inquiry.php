<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Inquiry extends Model
{
    use HasFactory;

    protected $fillable = [
        'when_to_buy',
        'type_of_property',
        'purchasing_value',
        'favorite_locations',
        'name',
        'email',
        'phone_number',
    ];

    protected $casts = [
        'favorite_locations' => 'array',
    ];

}

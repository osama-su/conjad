<?php

namespace App\Enums;

use App\Traits\Enums\EnumToArray;

enum TypeOfProperty: string
{
    use EnumToArray;

    case VILLA = 'villa';
    case APARTMENT = 'apartment';
}



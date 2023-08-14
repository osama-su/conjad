<?php

namespace App\Enums;

use App\Traits\Enums\EnumToArray;

enum PurchasingValue: string
{
    use EnumToArray;

    case UNDER_500K = 'under_500k';
    case BETWEEN_500K_AND_900K = 'between_500k_and_900k';
    case ONE_MILLION = 'one_million';
    case ABOVE_ONE_MILLION = 'above_one_million';
}

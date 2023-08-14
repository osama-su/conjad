<?php

namespace App\Enums;

use App\Traits\Enums\EnumToArray;

enum WhenToBuy: string
{
    use EnumToArray;

    case AFTER_ONE_YEAR = 'after_one_yaer';
    case WITHIN_TWO_TO_THREE_YEARS = 'within_two_to_three_years';
    case AFTER_THREE_YEARS = 'after_three_years';
}


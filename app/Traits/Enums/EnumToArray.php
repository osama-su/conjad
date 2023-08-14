<?php

namespace App\Traits\Enums;

use Str;

trait EnumToArray
{
    public static function names(): array
    {
        return array_column(self::cases(), 'name');
    }

    public static function values(): array
    {
        return array_column(self::cases(), 'value');
    }

    public static function array(): array
    {
        return array_combine(self::values(), self::names());
    }

    public static function options(): array
    {
        return array_map(function ($value, $key) {
            return ['value' => $value, 'label' => $key];
        }, self::values(), self::names());
    }

    public static function adminValues(): array
    {
        $adminValues = array_map(function ($value, $key) {
            if (Str::startsWith($key, 'ADMIN_')) {
                return  $value;
            }

            return null;
        }, self::values(), self::names());

        return array_values(array_filter($adminValues, fn ($value) => $value !== null));
    }
}

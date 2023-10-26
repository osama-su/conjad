<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AreaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $areas = json_decode(file_get_contents(__DIR__ . '/areas-ksa.json'), true);

        foreach ($areas as $area) {
            \App\Models\Area::create($area);
        }
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\Inquiry;
use App\Models\Step;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $cities = Inquiry::all()->pluck('favorite_locations')
            ->map(fn($location) => array_map(fn($city) => $city['city'], $location))
            ->flatten()->countBy()->sortDesc();
        $areas = Inquiry::all()->pluck('favorite_locations')
            ->map(fn($location) => array_map(fn($city) => $city['area'], $location))
            ->flatten()->countBy()->sortDesc();
        $inquiries = Inquiry::all()->count();

        $totalCities = $cities->count();
        $totalAreas = $areas->count();

        $topCities = $cities->take(5);
        $topAreas = $areas->take(5);
        return Inertia::render('Dashboard', [
            'data' =>  $cities,
            'totalCities' => $totalCities,
            'totalAreas' => $totalAreas,
            'inquiries' => $inquiries,
            'topCities' => $topCities,
            'topAreas' => $topAreas,
        ]);
    }
}

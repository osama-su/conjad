<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreAreaRequest;
use App\Http\Requests\UpdateAreaRequest;
use App\Models\Area;
use App\Models\City;
use Inertia\Inertia;

class AreaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(City $city)
    {
        return Inertia::render('Areas/Create', compact('city'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreAreaRequest $request, City $city)
    {
        $data = $request->validated();

        $city->areas()->create($data);

        return redirect()->route('cities.show', $city);
    }

    /**
     * Display the specified resource.
     */
    public function show(Area $area)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(City $city, Area $area)
    {
        return Inertia::render('Areas/Edit', compact('city', 'area'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateAreaRequest $request, City $city, Area $area)
    {
        $data = $request->validated();

        $area->update($data);

        return redirect()->route('cities.show', $city);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(City $city, Area $area)
    {
        $area->delete();

        return redirect()->route('cities.show', $city);
    }
}

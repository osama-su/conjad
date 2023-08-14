<?php

namespace App\Http\Controllers\Api;

use App\Enums\PurchasingValue;
use App\Enums\TypeOfProperty;
use App\Enums\WhenToBuy;
use App\Http\Controllers\Controller;
use App\Models\Inquiry;
use App\Models\Step;
use Illuminate\Http\Request;

class FormController extends Controller
{
    public function index()
    {
        $steps = Step::with('questions')->get();

        return response()->json([
            'steps' => $steps,
        ]);

    }
    public function store(Request $request)
    {
        $request->validate([
            'when_to_buy' => ['required', 'in:' . implode(',', WhenToBuy::values())],
            'type_of_property' => ['required', 'in:' . implode(',', TypeOfProperty::values())],
            'purchasing_value' => ['required', 'in:' . implode(',', PurchasingValue::values())],
            'favorite_locations' => 'required|array',
            'name' => 'required',
            'email' => 'required',
            'phone_number' => 'required',
        ]);

        $inquiry = Inquiry::create($request->all());

        return response()->json([
            'message' => 'Inquiry created successfully!',
            'inquiry' => $inquiry,
        ]);
    }
}

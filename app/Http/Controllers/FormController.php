<?php

namespace App\Http\Controllers;

use App\Models\Inquiry;
use App\Models\Step;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FormController extends Controller
{
    public function index()
    {
        return Inertia::render('Form/Index', [
            'steps' => Step::with('questions')->get(),
        ]);
    }

    public function storeStep(Request $request)
    {

    }
}

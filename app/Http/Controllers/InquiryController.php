<?php

namespace App\Http\Controllers;

use App\Exports\InquiriesExport;
use App\Models\Inquiry;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;
use Maatwebsite\Excel\Facades\Excel;
class InquiryController
{
    public function index()
    {
        return Inertia::render('Inquiries/Index', [
            'filters' => Request::all('search', 'trashed'),
            'inquiries' => Inquiry::orderBy('created_at', 'desc')
//                ->filter(Request::only('search', 'trashed'))
                ->paginate()
                ->withQueryString()
                ->through(function ($inquiry) {
                    return [
                        'id' => $inquiry->id,
                        'when_to_buy' => $inquiry->when_to_buy,
                        'type_of_property' => $inquiry->type_of_property,
                        'purchasing_value' => $inquiry->purchasing_value,
                        'favorite_locations' => $inquiry->favorite_locations,
                        'name' => $inquiry->name,
                        'email' => $inquiry->email,
                        'phone_number' => $inquiry->phone_number,
                        'deleted_at' => $inquiry->deleted_at,
                    ];
                }),
        ]);
    }

    public function export()
    {
        return Excel::download(new InquiriesExport, 'inquiries.xlsx');
    }
}

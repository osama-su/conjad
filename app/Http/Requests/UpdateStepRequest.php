<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateStepRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
//            'questions' => ['nullable', 'array'],
//            'questions.*.id' => ['required', 'exists:questions,id'],
//            'questions.*.name' => ['required', 'string', 'max:255'],
//            'questions.*.title' => ['required', 'string', 'max:255'],
        ];
    }
}

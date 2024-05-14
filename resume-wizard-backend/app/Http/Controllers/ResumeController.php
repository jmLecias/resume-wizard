<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Resume;
use App\Models\Education;
use App\Models\Work;
use App\Models\Certificate;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ResumeController extends Controller
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
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'user_id' => 'required|exists:users,id',
            'first_name' => 'required|string|max:255',
            'middle_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255',
            'phone_number' => 'required|string|max:20',
            'website' => 'nullable|string|url|max:255',
            'country' => 'required|string|max:255',
            'state_province' => 'required|string|max:255',
            'city' => 'required|string|max:255',
            'zip_code' => 'required|string|max:4',
            'objective' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 422);
        }

        $user = User::findOrFail($request->input('user_id'));

        Resume::create([
            'user_id' => $request->input('user_id'),
            'first_name' => $request->input('first_name'),
            'middle_name' => $request->input('middle_name'),
            'last_name' => $request->input('last_name'),
            'email' => $request->input('email'),
            'phone_number' => $request->input('phone_number'),
            'website' => $request->input('website'),
            'country' => $request->input('country'),
            'state_province' => $request->input('state_province'),
            'city' => $request->input('city'),
            'zip_code' => $request->input('zip_code'),
            'objective' => $request->input('objective'),
        ]);

        foreach ($request->input('educations') as $education) {
            Education::create([
                'user_id' => $user->id,
                'degree' => $education['degree'],
                'institute' => $education['institute'],
                'graduation_year' => $education['graduation_year'],
            ]);
        }

        foreach ($request->input('works') as $work) {
            Work::create([
                'user_id' => $user->id,
                'company' => $work['company'],
                'position' => $work['position'],
                'work_year' => $work['work_year'],
            ]);
        }

        foreach ($request->input('certificates') as $certificate) {
            Certificate::create([
                'user_id' => $user->id,
                'certificate' => $certificate['certificate'],
                'about' => $certificate['about'],
                'year_acquired' => $certificate['year_acquired'],
            ]);
        }

        return response()->json(['message' => 'Resume created successfully'], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Resume $resume)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Resume $resume)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Resume $resume)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Resume $resume)
    {
        //
    }
}

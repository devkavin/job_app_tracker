<?php

namespace App\Http\Controllers;

use App\Models\InterviewStatus;
use Illuminate\Http\Request;
use Inertia\Inertia;

class InterviewStatusController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            $interviewStatuses = InterviewStatus::all();

            return Inertia::render('InterviewStatuses/Index', [
                'interviewStatuses' => $interviewStatuses,
                'success' => session('success'),
            ]);
        } catch (\Exception $e) {
            return redirect()->back()->with('error', $e->getMessage());
        }
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
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(InterviewStatus $interviewStatus)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(InterviewStatus $interviewStatus)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, InterviewStatus $interviewStatus)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(InterviewStatus $interviewStatus)
    {
        //
    }
}

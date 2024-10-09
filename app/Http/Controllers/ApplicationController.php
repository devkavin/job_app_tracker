<?php

namespace App\Http\Controllers;

use App\Models\Application;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ApplicationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    // public function index()
    // {
    //     try {
    //         // $applications = Application::all()->forPage(1, 10);
    //         $applications = Application::paginate(10);
    //         // return to react component
    //         return Inertia::render('Applications/Index', [
    //             'applications' => $applications,
    //             'success' => session('success'),
    //         ]);
    //     } catch (\Exception $e) {
    //         return redirect()->back()->with('error', $e->getMessage());
    //     }
    // }
    public function index()
    {
        try {
            $query = Application::query();

            $sortField = request("sort_field", 'created_at');
            $sortDirection = request("sort_direction", 'desc');

            if (request("company_name")) {
                $query->where("company_name", "like", "%" . request("company_name") . "%");
            }
            if (request("position")) {
                $query->where("position", "like", "%" . request("position") . "%");
            }

            $applications = $query->orderBy($sortField, $sortDirection)
                ->paginate(10);

            // return to react component
            return Inertia::render('Applications/Index', [
                'applications' => $applications,
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
        return Inertia::render('Applications/Partials/AddApplicationForm');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $validated = $request->validate([
                'company_name' => 'required|string|max:255',
                'position' => 'required|string|max:255',
                'referred_by' => 'required|string|max:255',
                'applied_for_position' => 'required|string|max:255',
                'interview_called' => 'required|string|max:255',
                'application_message' => 'required|string',
                'vacancy_link' => 'required|string|max:255',
            ]);

            Application::create($validated);

            return redirect()->route('applications.index')->with('success', 'Application added successfully.');
        } catch (\Exception $e) {
            return redirect()->back()->with('errors', $e->getMessage());
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Application $application)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Application $application)
    {
        return Inertia::render('Applications/Edit', [
            'application' => $application,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Application $application)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Application $application)
    {
        //
    }
}

<?php

namespace Database\Seeders;

use App\Models\Application;
use File;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ApplicationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Load the JSON data from a file
        $json = File::get(database_path('../data.json'));

        // Convert JSON data to an array
        $applications = json_decode($json, true);

        // Insert each application into the database
        foreach ($applications as $application) {
            Application::create([
                'company_name' => $application['company_name'],
                'position' => $application['position'],
                'referred_by' => $application['referred_by'], // Nullable field

                'applied_for_position' => $application['applied_for_position'],
                'interview_called' => $application['interview_called'],

                'application_message' => $application['application_message'], // Nullable field
                'vacancy_link' => $application['vacancy_link'], // Nullable field
            ]);
        }
    }
}

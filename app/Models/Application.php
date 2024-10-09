<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use MongoDB\Laravel\Eloquent\Model as Eloquent;

class Application extends Eloquent
{
    /** @use HasFactory<\Database\Factories\ApplicationFactory> */
    use HasFactory;

    protected $collection = 'applications';

    protected $fillable = [
        'company_name',
        'position',
        'referred_by',
        'applied_for_position',
        'interview_called',
        'application_message',
        'vacancy_link',
    ];

    // protected $casts = [
    //     'responded_to_email' => 'boolean',
    //     'applied_for_position' => 'boolean',
    //     'interview_called' => 'boolean',
    //     'date_of_interview' => 'date', // if you're storing date in ISODate format
    // ];
}

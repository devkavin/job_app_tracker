<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use MongoDB\Laravel\Eloquent\Model as Eloquent;

class InterviewStatus extends Eloquent
{
    use HasFactory;

    protected $collection = 'interview_statuses';

    protected $fillable = [
        'status_key',
        'status',
        'status_description',
    ];
}

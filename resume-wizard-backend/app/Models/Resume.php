<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Resume extends Model
{
    use HasFactory;

    protected $table = 'resumes';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'user_id',
        'first_name',
        'middle_name',
        'last_name',
        'email',
        'phone_number',
        'website',
        'country',
        'state_province',
        'city',
        'zip_code',
        'objective'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}

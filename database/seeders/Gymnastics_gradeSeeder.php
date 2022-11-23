<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB; 
use DateTime;
//use laravel_react_calendar\app\Models\Gymnastics_grade;

class Gymnastics_gradeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('gymnastics_grades')->insert([
                'grade' => 'A',
                'created_at' => new DateTime(),
                'updated_at' => new DateTime(),
         ]);
        DB::table('gymnastics_grades')->insert([
                'grade' => 'B',
                'created_at' => new DateTime(),
                'updated_at' => new DateTime(),
         ]);
        DB::table('gymnastics_grades')->insert([
                'grade' => 'C',
                'created_at' => new DateTime(),
                'updated_at' => new DateTime(),
         ]);
    }
}

<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB; 
use DateTime;

class Swimming_gradeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('swimming_grades')->insert([
                'grade' => '赤',
                'created_at' => new DateTime(),
                'updated_at' => new DateTime(),
         ]);
        DB::table('swimming_grades')->insert([
                'grade' => '黄',
                'created_at' => new DateTime(),
                'updated_at' => new DateTime(),
         ]);
        DB::table('swimming_grades')->insert([
                'grade' => '白',
                'created_at' => new DateTime(),
                'updated_at' => new DateTime(),
         ]);
        DB::table('swimming_grades')->insert([
                'grade' => 'オレンジ',
                'created_at' => new DateTime(),
                'updated_at' => new DateTime(),
         ]);
        DB::table('swimming_grades')->insert([
                'grade' => '緑',
                'created_at' => new DateTime(),
                'updated_at' => new DateTime(),
         ]);
        DB::table('swimming_grades')->insert([
                'grade' => '紺',
                'created_at' => new DateTime(),
                'updated_at' => new DateTime(),
         ]);
        DB::table('swimming_grades')->insert([
                'grade' => '水色・紫',
                'created_at' => new DateTime(),
                'updated_at' => new DateTime(),
         ]);
    }
}

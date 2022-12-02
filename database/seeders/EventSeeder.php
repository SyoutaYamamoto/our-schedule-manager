<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB; 
use DateTime;
class EventSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('events')->insert([
                'title' => '水泳',
                'user_id' => '1',
                'start' => "2022-12-03 08:11:28",
                'end' => "2022-12-03 09:11:28",
                'created_at' => new DateTime(),
                'updated_at' => new DateTime(),
         ]);
         DB::table('events')->insert([
                'title' => '体操',
                'user_id' => '2',
                'start' => "2022-12-03 08:11:28",
                'end' => "2022-12-03 09:11:28",
                'created_at' => new DateTime(),
                'updated_at' => new DateTime(),
         ]);
         DB::table('events')->insert([
                'title' => '受付',
                'user_id' => '3',
                'start' => "2022-12-03 08:11:28",
                'end' => "2022-12-03 09:11:28",
                'created_at' => new DateTime(),
                'updated_at' => new DateTime(),
         ]);
    }
}

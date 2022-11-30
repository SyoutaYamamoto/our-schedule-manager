<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use DateTime;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('users')->insert([
                'name' => 'Syouta Yamamoto',
                'email' => 's.yamamoto6174@gmail.com',
                'password' => bcrypt('s20020112'),
                //'role' => '1',//1管理者0一般
                'created_at' => new DateTime(),
                'updated_at' => new DateTime(),
         ]);
        
        DB::table('users')->insert([
                'name' => 'A1',
                'email' => 'shotabaske0112@gmail.com',
                'password' => bcrypt('watasihauserA1'),
                //'role' => '0',//1管理者0一般
                'created_at' => new DateTime(),
                'updated_at' => new DateTime(),
         ]);
        
        DB::table('users')->insert([
                'name' => 'B2',
                'email' => 'ne201188@senshu-u.jp',
                'password' => bcrypt('password'),
                //'role' => '0',//1管理者0一般
                'created_at' => new DateTime(),
                'updated_at' => new DateTime(),
         ]);
    }
}

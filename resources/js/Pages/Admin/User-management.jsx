import React, {useState} from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link } from '@inertiajs/inertia-react'
//import AppLayout from "@/Layouts/AppLayout.vue";



const Admin = (props) => {
console.log(props.users);
const { users } = props; 
    
    return (
    <Authenticated auth={props.auth} header={
    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    ユーザー管理
                </h2>
            }>
      <p>Admin</p>
      <p>こんにちは</p>
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>名前</th>
                                    <th>削除用</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                                { users.map((user) => (
                                 <div>
                                 <tr>
                                    <td class="border px-4 py-2">{user.id}</td>
                                    <td class="border px-4 py-2">{user.name}</td>
                                    <td class="border px-4 py-2"><button className="p-1 bg-purple-300 hover:bg-purple-400 rounded-md" >delete</button></td>
                                </tr>
                                </div>
                                )) }
                                
                            </tbody>
                        </table>
                    </div>
      <div>
       <Link href="/home">ホームへ</Link>
       </div>
       </Authenticated>
  );
}

export default Admin;
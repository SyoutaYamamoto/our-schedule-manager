import React, {useState} from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link } from '@inertiajs/inertia-react'

const Admin = () => {

    return (
    <>
      <p>Admin</p>
      <p>こんにちは</p>
      <div>
       <Link href="/home">ホームへ</Link>
       </div>
    </>
  );
}

export default Admin;
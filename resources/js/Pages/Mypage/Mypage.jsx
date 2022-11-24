import React, {useState} from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link } from '@inertiajs/inertia-react'

const Mypage = () => {

    return (
    <>
      <p>Mypage</p>
      <p>こんにちは</p>
      <div>
       <Link href="/home">ホームへ</Link>
       </div>
    </>
  );
}

export default Mypage;
import React, {useState} from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link } from '@inertiajs/inertia-react'

const Info = () => {

    return (
    <>
      <p>Info</p>
      <p>こんにちは</p>
      <div>
      <Link href="/info/create-info">伝言板登録へ</Link>
      <br />
       <Link href="/home">ホームへ</Link>
       </div>
    </>
  );
}

export default Info;
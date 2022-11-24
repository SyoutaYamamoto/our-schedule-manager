import React, {useState} from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link } from '@inertiajs/inertia-react'

const Home = () => {

    return (
    <>
      <p>伝言板登録</p>
      <div>
       <Link href="/info">Infoへ</Link>
       <br />
       <Link href="/home">ホームへ</Link>
       </div>
    </>
  );
}

export default Home;
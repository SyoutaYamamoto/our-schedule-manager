import React, {useState} from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link } from '@inertiajs/inertia-react'

const Content = () => {

    return (
    <>
      <p>動画作成ページ</p>
      <div>
       <Link href="/content/movies">動画一覧へ</Link>
       <br />
       <Link href="/home">ホームへ</Link>
       </div>
    </>
  );
}

export default Content;
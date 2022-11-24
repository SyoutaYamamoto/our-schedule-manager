import React, {useState} from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link } from '@inertiajs/inertia-react'

const Content = () => {

    return (
    <>
      <p>動画一覧ページ</p>
      <div>
       <Link href="/content">Contentへ</Link>
       <br />
       <Link href="/content/create-movie">動画公開へ</Link>
       <br />
       <Link href="/home">ホームへ</Link>
       </div>
    </>
  );
}

export default Content;
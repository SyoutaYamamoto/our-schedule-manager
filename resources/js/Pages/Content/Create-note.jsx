import React, {useState} from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link } from '@inertiajs/inertia-react'

const Content = () => {

    return (
    <>
      <p>ノート投稿ページ</p>
      <div>
       <Link href="/content/notes">ノート一覧へ</Link>
       <br />
       <Link href="/home">ホームへ</Link>
       </div>
    </>
  );
}

export default Content;
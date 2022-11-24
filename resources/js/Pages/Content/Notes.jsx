import React, {useState} from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link } from '@inertiajs/inertia-react'

const Content = () => {

    return (
    <>
      <p>ノート一覧ページ</p>
      <div>
      <Link href="/content">Contentへ</Link>
       <br />
       <Link href="/content/create-note">ノート投稿へ</Link>
       <br />
       <Link href="/home">ホームへ</Link>
       </div>
    </>
  );
}

export default Content;
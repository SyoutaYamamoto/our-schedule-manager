import React, {useState} from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link } from '@inertiajs/inertia-react'

const Content = () => {

    return (
    <>
      <p>Content</p>
      <div>
      <br />
       <Link href="/content/movies">動画一覧へ</Link>
       <br />
       <Link href="/content/create-movie">動画公開へ</Link>
       <br />
       <Link href="/content/notes">ノート一覧へ</Link>
       <br />
       <Link href="/content/create-note">ノート投稿へ</Link>
       <br />
       <Link href="/home">ホームへ</Link>
       </div>
    </>
  );
}

export default Content;
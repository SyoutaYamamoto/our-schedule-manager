import React, {useState} from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link } from '@inertiajs/inertia-react'

const Home = () => {

    return (
    <>
      <p>home</p>
      <p>こんにちは</p>
      <div>
           <Link href="/mypage">Mypageへ</Link>
           <br />
           <Link href="/admin">Adminへ</Link>
           <br />
           <Link href="/schedule">Scheduleへ</Link>
           <br />
           <Link href="/content">Contentへ</Link>
           <br />
           <Link href="/message">Messageへ</Link>
           <br />
           <Link href="/info">Infoへ</Link>
           <br />
           <Link href="/chat">Chatsへ</Link>
           <br />
           <Link href="/posts">伝言板へ</Link>
       </div>
    </>
  );
}

export default Home;
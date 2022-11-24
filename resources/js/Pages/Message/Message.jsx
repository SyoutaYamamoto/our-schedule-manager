import React, {useState} from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link } from '@inertiajs/inertia-react'

const Message = () => {

    return (
    <>
      <p>Message</p>
      <p>こんにちは</p>
      <div>
       <Link href="/home">ホームへ</Link>
       </div>
    </>
  );
}

export default Message;
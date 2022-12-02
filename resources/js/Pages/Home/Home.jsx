import React, {useState} from "react";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import jaLocale from '@fullcalendar/core/locales/ja';
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link, useForm } from '@inertiajs/inertia-react'

const Home = (props) => {
    console.log(props);
    const {users,auth,events} = props;
    const {data, setData, post} = useForm({
        id: "",
    })
const handleSendPosts = (e) => {
        e.preventDefault();
        post("/home");
    }
    return (
    <Authenticated auth={props.auth} header={
    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    ホーム
                </h2>
            }>
      <p>home</p>
      <p>こんにちは</p>
      <div>
      <form onSubmit={handleSendPosts}>
            <select onChange={e => setData("id", e.target.value)}>
            {users.map((user) => (
                <option value={user.id}>{user.name}</option>
                        ))}
            </select>
            <button type="submit" className="p-1 bg-purple-300 hover:bg-purple-400 rounded-md">send</button>
            </form>
        <div className="px-36">
        
        <FullCalendar 
            plugins={[dayGridPlugin]} 
            initialView="dayGridMonth"
            height={400}
            locales={[jaLocale]}
            locale='ja'
            events={events}
        />
        </div>
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
    </Authenticated>
  );
}

export default Home;
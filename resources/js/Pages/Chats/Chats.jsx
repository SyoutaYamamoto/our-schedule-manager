import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import ChatMessages from '@/Components/Chats/ChatMessages';
import ChatForm from '@/Components/Chats/ChatForm';
import { Head } from '@inertiajs/inertia-react';

export default function Chats({ auth, errors }) {
    const user = auth.user;
    const [messages, setMessages] = useState([]);

    // メッセージをバックエンドに送信
    const sendMessage = useCallback(async (message) => {
        await axios.post(route('chat.store'), { message: message });
        setMessages(prevState => ([ ...prevState, { message: message, user: user }]));
    });

    // チャットメッセージを取得する
    const getChatMessages = async () => {
        const res = await axios.get(route('chat.fetch'));
        setMessages(res.data);
    };

    useEffect(() => {
        getChatMessages();
    
        // 以下を追記
        // ブロードキャスト受信
        /*window.Echo
            .private('chat')  // 作成したイベントのチャンネル名と合わせる
            .listen('MessageSent', (e) => {  // 第一引数はイベントのクラス名
                getChatMessages(); // ブロードキャスト通知が来たら再読込みする
            });*/
    }, []);

    return (
        <AuthenticatedLayout
            auth={auth}
            errors={errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">チャット</h2>}
        >
            <Head title="チャット" />

            <div className="py-12 h-[600px]">
                <div className="mx-[8%] bg-white h-full overflow-y-scroll p-3">
                    <ChatMessages messages={messages} />
                </div>
                <div className="mx-[8%] bg-white border-t-2">
                    <ChatForm user={user} sendMessage={sendMessage} />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
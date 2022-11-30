<?php

namespace App\Http\Controllers;

use App\Models\Message;  // 追記
use Illuminate\Support\Facades\Auth;  // 追記
use Illuminate\Http\Request;
use App\Events\MessageSent;

class ChatController extends Controller
{
    public function Chat()
    {
        return inertia("Chats/Chats");
    }
    // メッセージの取得
    public function fetchMessages()
    {
        return Message::with('user')->get();
    }

    // メッセージ送信
    public function sendMessage(Request $request)
    {
        $user = Auth::user();
        $message = $user->messages()->create([
            'message' => $request['message']
        ]);

        // 追記
        broadcast(new MessageSent($user, $message))->toOthers();
    }
}
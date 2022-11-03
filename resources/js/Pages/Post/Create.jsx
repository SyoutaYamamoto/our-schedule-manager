import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { Link, useForm } from '@inertiajs/inertia-react';
import Authenticated from "@/Layouts/AuthenticatedLayout";

const Create = (props) => {
    const {data, setData} = useForm({
        title: "",
        body: ""
    })

    console.log(data); // 確認用に追加

    return (
            <Authenticated auth={props.auth} header={
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Create
                    </h2>
                }>

                <div className="p-12">

                    <form>
                        <div>
                            <h2>Title</h2>
                            <input type="text" placeholder="タイトル" onChange={(e) => setData("title", e.target.value)}/>
                        </div>                    

                        <div>
                            <h2>Body</h2>
                            <textarea placeholder="今日も1日お疲れさまでした。" onChange={(e) => setData("body", e.target.value)}></textarea>
                        </div>
                    </form>

                    <Link href="/posts">戻る</Link>
                </div>

            </Authenticated>
            );
    }

export default Create;

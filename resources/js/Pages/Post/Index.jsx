import React, {useState} from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link } from '@inertiajs/inertia-react'

const Index = (props) => {
    const { posts } = props; 

    const handleDeletePost = (id) => {
        Inertia.delete(`/posts/${id}`, {
            onBefore: () => confirm("本当に削除しますか？"),
        })
    }

    return (
        <Authenticated auth={props.auth} header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Index
                </h2>
            }>

            <div className="p-12">
                <Link href="/posts/create">create</Link>

                <h1>Blog Name</h1>

                { posts.map((post) => (
                    <div key={post.id}>
                        <h2>
                            <Link href={`/posts/${post.id}`}>{ post.title }</Link>
                        </h2>
                        <p>{ post.body }</p>
                        <p>{ post.category.name }</p>
                        
                        <button className="p-1 bg-purple-300 hover:bg-purple-400 rounded-md" onClick={() => handleDeletePost(post.id)}>delete</button>
                    </div>
                )) }
            </div>
            
            
        </Authenticated>
        );
}

export default Index;

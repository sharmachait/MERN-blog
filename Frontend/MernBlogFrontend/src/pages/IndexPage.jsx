import React, { useEffect, useState } from 'react'
import { Post } from '../post'

export const IndexPage = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/post", {
            method: "GET",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE",
                "Content-Type": "application/json"
            }
        }).then(response => {
            response.json().then(posts => {
                setPosts(posts);
            });
        });
    }, []);

    return (
        <div>
            {posts.length > 0 && posts.map((post, index) => (
                <Post key={index} {...post}></Post>
            ))}
        </div>
    )
}

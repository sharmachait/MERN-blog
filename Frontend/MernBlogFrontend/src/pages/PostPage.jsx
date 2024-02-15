import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../UserContext';

const PostPage = () => {
    const { id } = useParams();
    const [postInfo, setPostInfo] = useState(null);
    const { userInfo } = useContext(UserContext)
    useEffect(() => {
        fetch(`http://localhost:3000/post/${id}`, {
            method: "GET",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE",
                "Content-Type": "application/json"
            },
            credentials: 'include',
        }).then(response => {
            response.json().then(data => {
                setPostInfo(data)
            });
        });
    }, []);

    if (!postInfo) return '';
    let content = postInfo.post.content;
    let author = postInfo.post.author;
    const parsedDate = new Date(postInfo.post.createdAt);

    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'Asia/Kolkata',
        hour12: false,
    };
    let formattedDate = parsedDate.toLocaleDateString('en-IN', options);
    return (
        <div className='post-page'>
            <div className='image'>
                <img src={`http://localhost:3000/${postInfo.post.cover}`} alt="" />
            </div>
            <h1>{postInfo.post.title}</h1>
            {userInfo.id === postInfo.post.author._id && (
                <div className='edit-row'>
                    <Link className='edit-btn' to={`/edit/${postInfo.post._id}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                        </svg>
                        <div>Edit this post</div>
                    </Link>
                </div>
            )}

            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <a className="author">{author.username}</a>
                <time>{formattedDate}</time>
            </div>
            <div dangerouslySetInnerHTML={{ __html: content }}></div>
        </div>
    )
};

export default PostPage;
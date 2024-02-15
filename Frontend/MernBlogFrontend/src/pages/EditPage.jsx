import React, { useEffect, useState } from 'react';

import Editor from '../Editor';
import { useParams } from 'react-router-dom';

const EditPage = () => {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [files, setFiles] = useState('');
    const [redirect, setRedirect] = useState(false);

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

                setTitle(data.post.title);
                setSummary(data.post.summary);
                setContent(data.post.content);
            });
        });
    }, []);



    async function updatePost(e) {
        e.preventDefault();
        let data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);
        if (files?.[0]) {
            data.set('file', files?.[0]);
        }
        console.log(data);
        let updated = await fetch(`http://localhost:3000/updatepost`, {
            method: "PUT",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE, PUT",

            },
            credentials: 'include',
            body: data
        });
        if (updated.ok) {
            setRedirect(true);
        }
    }

    if (redirect) {
        return (<Navigate to={'/post/' + id}></Navigate>);
    }
    return (
        <form onSubmit={updatePost}>
            <input value={title}
                onChange={(e) => setTitle(e.target.value)}
                type='title' placeholder='Title' />
            <input type='summary'
                onChange={(e) => setSummary(e.target.value)}
                value={summary} placeholder='Summary' />
            <input type='file'
                onChange={(e) => setFiles(e.target.files)} />
            <Editor content={content} onChange={setContent}></Editor>
            <button style={{ marginTop: '6px' }}>Edit Post</button>
        </form>
    );
};

export default EditPage;
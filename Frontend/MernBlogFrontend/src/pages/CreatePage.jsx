import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Editor from '../Editor';

const CreatePage = () => {
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [files, setFiles] = useState('');
    const [redirect, setRedirect] = useState(false);
    async function createNewPost(e) {
        e.preventDefault();
        let data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);
        data.set('file', files[0]);

        let response = await fetch("http://localhost:3000/post", {
            method: "POST",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE",
            },
            body: data,
            credentials: 'include',
        });
        let json = await response.json();
        if (response.ok) {
            setRedirect(true);
        } else {
            alert('try again');
        }
    }
    if (redirect) {
        return (<Navigate to={'/'}></Navigate>);
    }
    return (
        <form onSubmit={createNewPost}>
            <input value={title}
                onChange={(e) => setTitle(e.target.value)}
                type='title' placeholder='Title' />
            <input type='summary'
                onChange={(e) => setSummary(e.target.value)}
                value={summary} placeholder='Summary' />
            <input type='file'
                onChange={(e) => setFiles(e.target.files)} />
            <Editor content={content} onChange={setContent}></Editor>

            <button style={{ marginTop: '6px' }}>Create Post</button>
        </form>
    );
}

export default CreatePage;
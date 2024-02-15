import React from 'react'
import { Link } from 'react-router-dom';

export const Post = ({ _id, title, summary, cover, content, createdAt, author }) => {
    const parsedDate = new Date(createdAt);

    // Format the date according to the Indian locale
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'Asia/Kolkata', // Set the time zone to India
        hour12: false, // Use 24-hour format
    };

    const formattedDate = parsedDate.toLocaleDateString('en-IN', options);

    return (
        <div className="post">
            <div className="img">
                <Link to={`/post/${_id}`}>
                    <img src={"http://localhost:3000/" + cover}></img>
                </Link>
            </div>
            <div className="content">
                <Link to={`/post/${_id}`}>
                    <h2>{title}</h2>
                </Link>
                <p className="info">
                    <a className="author">{author.username}</a>
                    <time>{formattedDate}</time>
                </p>
                <p className='summary'>{summary}</p>
            </div>
        </div>
    )
}

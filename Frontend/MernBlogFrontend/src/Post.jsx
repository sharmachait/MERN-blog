import React from 'react'

export const Post = ({ title, summary, cover, content, createdAt, author }) => {
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
                <img src={"http://localhost:3000/" + cover}></img>
            </div>
            <div className="content">
                <h2>{title}</h2>
                <p className="info">
                    <a href="" className="author">{author.username}</a>
                    <time>{formattedDate}</time>
                </p>
                <p className='summary'>{summary}</p>
            </div>
        </div>
    )
}

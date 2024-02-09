import React from 'react'

export const Post = () => {
    return (
        <div className="post">
            <div className="img">
                <img src='https://miro.medium.com/v2/resize:fit:828/format:webp/0*M1kNVGe6hGmng-4y'></img>
            </div>
            <div className="content">
                <h2>Clean Architecture with Spring Boot: A good idea?</h2>
                <p className="info">
                    <a href="" className="author">Chaitanya Sharma</a>
                    <time>2023-1-6 9:32</time>
                </p>
                <p className='summary'>Software architecture, contained in software engineering, is concerned with the representation of design decisions related to the structure and overall behavior of the system.</p>
            </div>
        </div>
    )
}

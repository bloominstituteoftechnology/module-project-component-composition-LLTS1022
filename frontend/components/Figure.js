import React from 'react'

export default function Figure({ image, author, date }) {
    return (
        <figure>
            <img src={image} alt="NASA APOD" />
            <figcaption>The Photo Of The Day by {author}on{date}</figcaption>
        </figure>
    )
}
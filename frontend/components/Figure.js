import React from 'react';

export default function Figure({ imageURL, author, date, altText }) {
    return (
        <figure>
            <img src={imageURL} alt={altText || "NASA APOD"} />
            <figcaption>The Photo Of The Day by {author} on {date}</figcaption>
        </figure>
    );
}

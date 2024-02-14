import React from 'react';
import styled from 'styled-components';

const StyledFigure = styled.figure`
max-width: 300px;

figcaption {
    font-style: italic;
}
`;

export default function Figure({ imageURL, author, date, altText }) {
    return (
        <figure>
            <img src={imageURL} alt={altText || "NASA APOD"} />
            <figcaption>The Photo Of The Day by {author} on {date}</figcaption>
        </figure>
    );
}

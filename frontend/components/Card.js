import React from 'react'
import Figure from './Figure'
import styled from 'styled-components'

const StyledCard = styled.div`
`;

export default function Card({ title, text, image, author, date }) {
    return (
        <StyledCard className='card'>
            <h2>{title}</h2>
            <p>{text}</p>
            <Figure imageURL={image} author={author} date={date}
         
            />
        </StyledCard>
    )
}
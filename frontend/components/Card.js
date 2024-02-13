import React from 'react'
import Figure from './Figure'

export default function Card({ title, text, image, author, date }) {
    return (
        <div className='card'>
            <h2>{title}</h2>
            <p>{text}</p>
            <Figure imageURL={image} author={author} date={date}
         
            />
        </div>
    )
}
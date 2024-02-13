import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './Card'

const URL = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`;

export default function App() {
  const [data, setData] = useState()

  useEffect(() => {
    axios.get(URL)
      .then(res => {
        setData(res.data)
      })
      .catch(err => {
        console.log(err.message)
      })
  }, [])

  if (!data) return <p>Fetching Data...</p>

 
  
  return (
    <section>
      <Card
      title={data.title}
      text={data.explanation}
      image={data.url}
      author={data.copyright}
      date={data.date}
/>
    </section>
  )
}


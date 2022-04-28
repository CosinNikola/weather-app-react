import React from 'react'
import './Image.css'

export default function Image(props) {
  return (
    <img src={"http://openweathermap.org/img/wn/" + props.icon + "@2x.png"} className="mx-auto icon" alt='weather'/>
    )
}

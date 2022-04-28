import React from 'react'
import Detail from './Detail'

export default function Details(props) {
  return (
    <div className='d-flex flex-row justify-content-evenly my-4'>
        <Detail>Humidity: {props.data.main.humidity}%</Detail>
        <Detail>Pressure:  {props.data.main.pressure} mb</Detail>
        <Detail>Wind: {Math.round(props.data.wind.speed)} m/s</Detail>
    </div>
  )
}

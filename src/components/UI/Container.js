import React from 'react'
import './Container.css'

export default function Container(props) {
  return (
    <div className={'w-40 mx-auto br-4 mt-c shadow d-flex flex-column justify-content-around '+ (props.icon.charAt(props.icon.length - 1) === 'd' ? 'day' : 'night')}>
        {props.children}
        {/* className='border w-40 mx-auto bg-info br-4 my-5 d-flex flex-column justify-content-evenly' */}
    </div>
  )
}

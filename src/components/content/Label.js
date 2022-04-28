import React from 'react'

export default function Label(props) {
  return (
    <h1 style={{fontSize: props.fontSize + 'px', color: props.color}} className='mt-3'>
        {props.children}
    </h1>
  )
}

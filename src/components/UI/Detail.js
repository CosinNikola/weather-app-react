import React from 'react'

export default function Detail(props) {
  return (
    <div className='border border-2 border-light rounded-3 w-30 text-light p-2 fw-bold  '>
        {props.children}
    </div>
  )
}

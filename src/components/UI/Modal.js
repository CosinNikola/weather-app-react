import React from 'react'
import './Modal.css'
export default function Modal(props) {
  return (
      <div>
          <div class="modal-backdrop" onClick={props.onToggle}></div>
    <div className='modal-window'>
        <div className='modal-window-header'>
        <h3>Error!</h3>
        </div>
        <div className='modal-window-content'>
            <p>Invalid input! Please try again.</p>
        </div>
        <div className='modal-window-footer'>
            <button className='btn btn-primary' onClick={props.onToggle}>Close</button>
        </div>
    </div>
      </div>
  )
}

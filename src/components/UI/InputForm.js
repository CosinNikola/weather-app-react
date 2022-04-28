import React, { useState } from 'react'

export default function InputForm(props) {

    const [city, setCity] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        props.onCityChange(city);
        setCity('');
    }

    const handleInput = (e) => {
        setCity(e.target.value);
    }   
  return (
    <form className='d-flex flex-row justify-content-center mx-auto my-auto' onSubmit={submitHandler}>
        <input type='text' className='my-3' value={city} onChange={handleInput} placeholder='e.g. Negotin'/>
        <button className='btn btn-dark my-3'>Change Location</button>
    </form>
  )
}

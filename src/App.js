import React, { useState } from 'react'
import image from './image_processing20200713-19777-12obfar.png';

function App () {
  const[count,setCount] =useState(0);
  return (
    <div className='container my-5'>
      <img src={image} alt='numbers' style={{ maxWidth: '100%' }} >
      </img>
      <div className='card text-center my-5'>
        <div className='card-body'>
          <h1> Counter App</h1>
          <div className='my-5'>
            <h2 className='my-5'>{count}</h2>
            <button className='btn btn-outline-success mx-3' onClick={() => setCount(count + 1)}>Increment</button>
            <button className='btn btn-outline-danger mx-3'onClick={() => setCount(count - 1 )}>Decrement</button>
            <button className='btn btn-outline-secondary mx-3' onClick={() => setCount(0)}>Clear</button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default App

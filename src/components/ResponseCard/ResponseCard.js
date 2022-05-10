import React from 'react'

const ResponseCard = ({ response }) => {
  return (
    <div className='card'>
      <p className='response'>Response: {response}</p>
    </div>
  )
}

export default ResponseCard
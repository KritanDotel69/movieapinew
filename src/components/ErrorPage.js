import React from 'react'

const ErrorPage = ({error}) => {
  return (
    <div>
      <h1 className='text-red-800 p-5'>{error.data.status_message}</h1>
    </div>
  )
}

export default ErrorPage

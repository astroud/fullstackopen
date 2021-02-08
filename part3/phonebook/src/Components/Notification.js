import React from 'react'

const Notification = ({ message, error }) => {
  if(message.length === 0) {
    return(null)
  }

  return(
    <div className={`notification ${error ? 'notification--error': ''}`}>{message}</div>
  )
}

export default Notification
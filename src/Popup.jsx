import React from 'react'

const Popup = ({setPopup}) => {
  return (
    <div className='popup'>
        <p>NO such Restaurant found</p>
        <button onClick={() => setPopup(false)}>ok</button>
    </div>
  )
}

export default Popup
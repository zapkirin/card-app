import React from 'react'
import './RearCard.css'

function RearCard(props) {
  return (
    <div className='container'>
        <div className="strip">

        </div>
        <div className="strip2">
{props.error?'':props.cvc}
        </div>
    </div>
  )
}

export default RearCard
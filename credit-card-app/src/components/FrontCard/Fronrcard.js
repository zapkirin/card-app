import React from 'react'
import './Frontcard.css'
export function Fronrcard(props) {
  return (
    <div className='container1'>
        <div className="profile">
            {props.error?'':<img className='ellipse1' src={require("./Ellipse 1.png")} alt="" />}
            {props.error?'':<img className='ellipse2' src={require("./Ellipse 2.png")} alt="" />}
        </div>
        <div className="card-num">
            <h1>{props.error?'':props.cardNumber}</h1>
            </div>
            <div className="bio">
                <div className="name">
                    <h4>{props.error?'':props.holderName.toUpperCase()}</h4>
                    </div>
                    <div className="expiry">
                        <h3>{props.error?'':props.expMonth}/{props.error?'':props.expYear}</h3>
                    </div>
            </div>
        
        </div>
  )
}

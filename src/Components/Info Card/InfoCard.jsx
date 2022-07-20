import React from 'react'

export default function InfoCard({ image, header, text, cardType }) {
  return (
    <div className={`service-card-cont ${cardType}`}>
        <div className='service-icon'>
            <img src={image} alt="card-icon" />
        </div>

        <div className='service-body'>
            <h3>{header}</h3>
            <p>{text}</p>
        </div>
    </div>
  )
}

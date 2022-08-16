import React from 'react'

export default function SkillCard({ title, skills }) {
  return (
    <div className={`skill-card-cont ${title}`}>
        <div className='skill-card-title'>
            <p>{title}</p>
        </div>

        <div className='skill-card-body'>
            <ul className='skill-list'>
                {
                    skills.map(skill => {
                        return <li>{skill}</li>
                    })
                }
            </ul>
        </div>
    </div>
  )
}

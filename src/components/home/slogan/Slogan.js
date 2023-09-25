import React from 'react'
import image from "./birds.png"
import "./Slogan.css"
export default function Slogan({ slogan, title, color }) {
    return (
        <div className='slogan-category'>
            <h4>{slogan}</h4>
            <img className='logo' src={image} />
            <h3 style={{ color: color }}>{title}</h3>
        </div>
    )
}

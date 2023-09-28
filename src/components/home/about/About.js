import React from 'react'
import "./About.css"
import bird3 from "./bird3.png"
export default function About() {
    return (
        <div style={{ position: 'relative' }}>
            <div className='parallax-about'></div>
            <div className='about-us'>
                <h2 className='about-title'>Buying Bird Cage gives happy & fun</h2>
                <h5 className='about-title'>Expose your love for birds</h5>
                <p>“Birds were created to record everything.
                    They were not designed just to be beautiful jewels in the sky, but to serve as the eyes of heaven. ”
                    – Suzy Kassem</p>
            </div>
            <div className='about-image-container'>
                <img className='about-image2' src={bird3} />
            </div>
        </div >
    )
}

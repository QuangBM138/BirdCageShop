import { Container } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
export default function Header() {
    return (
        <div className='breadcrumb'>
            <div className='breadcrumb-thumb'></div>
            <Container className='breadcrumb-container' maxWidth={"xl"}>
                <h1>Your shoppping cart</h1>
                <div className='breadcrumb-line'>
                    <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
                    /
                    Your shopping cart
                </div>



            </Container>
        </div>
    )
}

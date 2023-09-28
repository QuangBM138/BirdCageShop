import React from 'react'
import Slides from '../components/home/slides/Slides'
import Categories from '../components/home/categories/Categories'
import { Container } from '@mui/material'
import Products from '../components/home/products/Products'
import Slogan from '../components/home/slogan/Slogan'
import About from '../components/home/about/About'
import bird1 from '../components/home/about/bird-aboutus.png'
import bird2 from '../components/home/about/bird2-aboutus.png'
import cage from '../components/home/about/gold_cage.png'
import { left } from '@popperjs/core'
import "../components/home/slides/Slide.css"
export default function HomePage() {
    return (
        <>
            <img
                className='cage'
                style={{ left: 0 }}
                src={cage} />
            <img
                className='cage'
                style={{ right: 0 }}
                src={cage} />
            {/* ---------------Slide--------------- */}

            {/*--------------- Categories--------------- */}
            <Container maxWidth={"xl"}>
                <Slides />
                <Slogan
                    slogan="“The caged bird sings fearful of the unknown, yet expectant, and its melody is heard on the distant hills, for the caged bird sings freely.” – Maya Angelou"
                    title="Bird Cage - Caring"
                    color="#8d522c"
                />
                <Categories />

            </Container>

            {/*--------------- About--------------- */}
            <About />


            {/*--------------- Products--------------- */}
            <Container maxWidth={"xl"}>
                <Slogan
                    slogan="“Some birds are not meant to be kept in cages, that's all. Their feathers are so bright, their voices are so sweet and wild. So you let them go, or when you open their cage to feed them, they somehow fly out to you. ” – King Stephen"
                    title="Choose Your Cage"
                    color="#ffc519"
                />
                <Products />

            </Container>

        </>



    )
}

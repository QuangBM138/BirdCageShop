import React from 'react'
import Slides from '../components/home/slides/Slides'
import Categories from '../components/home/categories/Categories'
import { Container } from '@mui/material'
import Products from '../components/home/products/Products'
import Slogan from '../components/home/slogan/Slogan'
import About from '../components/home/about/About'
import cage1 from '../components/home/about/cage1.png'
import cage2 from '../components/home/about/cage2.png'
import "../components/home/slides/Slide.css"
// import { useStore } from '../components/cart/store/hooks'
export default function HomePage() {
    // const [state, dispatch] = useStore()
    // console.log(state)
    return (
        <>
            <img
                className='cage'
                style={{ left: 0 }}
                src={cage1} />
            <img
                className='cage'
                style={{ right: 0 }}
                src={cage2} />
            {/* ---------------Slide--------------- */}

            {/*--------------- Categories--------------- */}
            <Container style={{ position: "relative" }} maxWidth={"xl"}>


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

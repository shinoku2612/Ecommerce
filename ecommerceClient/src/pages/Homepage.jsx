import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Slider from '../components/Slider'

const Container = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
`;
const Main = styled.div`
    flex: 1;
`;

const Homepage = () => {
    return (
        <Container>
            <Header></Header>
            <Slider className="slider-custom"></Slider>
            <Main className="container">
                <Categories></Categories>
                <Products></Products>
            </Main>
            <Footer></Footer>
        </Container>
    )
}

export default Homepage

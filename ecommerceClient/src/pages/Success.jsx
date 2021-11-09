import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { mobile } from '../responsive';

const Container = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
`;
const Main = styled.div`
    flex: 1;
    min-height: 100%;
    margin-top: 60px;
    ${mobile({ marginTop: "10px" })};
`;

const Success = () => {
    return (
        <Container>
            <Header></Header>
            <Main className="container">

            </Main>
            <Footer></Footer>
        </Container>
    )
}

export default Success

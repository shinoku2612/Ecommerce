import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons';
import { useState } from 'react';
import styled from 'styled-components'
import { sliderItems } from '../book';
import '../assets/custom.css'
import { mobile } from '../responsive';
import { Link } from 'react-router-dom';

const Container = styled.div`
    width: 100%;
    margin-top: 60px;
    height: 100vh;
    display: flex;
    background-color: #f5f5f5;
    position: relative;
    overflow: hidden;
    ${mobile({ display: "none" })};
`;
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: rgba(0, 0, 0, 0.375);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.6;
    z-index: 2;
`;
const Wrapper = styled.div`
    position: relative;
    height: 100%;
    display: flex;
    transform: translateX(${props => props.slideIndex * -100}vw);
    transition: opacity ease-in-out 1s;
    opacity: 0;
`;
const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props => props.bg};
`;
const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
`;
const Img = styled.img`
    width: 80%;
    height: 100%;
`;
const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`;
const Title = styled.h1`
    font-size: 70px;
`;
const Description = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`;
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    // background-color: transparent;
    cursor: pointer;
`;

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const sliderNumber = sliderItems.length - 1;

    const handleClick = direction => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : sliderNumber);
        } else {
            setSlideIndex(slideIndex < sliderNumber ? slideIndex + 1 : 0);
        }
    }
    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowBackIosOutlined></ArrowBackIosOutlined>
            </Arrow>
            {sliderItems.map((item, index) => (
                <Wrapper slideIndex={slideIndex} className={slideIndex === index ? "slide-active" : index} key={item.id}>
                    <Slide bg={item.bg}>
                        <ImgContainer>
                            <Img src={item.img} />
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Description>{item.desc}</Description>
                            <Link to="/products">
                                <Button className="btn btn-dark btn-custom">SHOP NOW</Button>
                            </Link>
                        </InfoContainer>
                    </Slide>
                </Wrapper>))}
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowForwardIosOutlined></ArrowForwardIosOutlined>
            </Arrow>
        </Container>
    )
}

export default Slider
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { mobile } from '../responsive';
import '../assets/custom.css';

const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    opacity: 0;
    transition: opacity 0.3s ease;
`;
const Container = styled.div`
    width: 32%;
    height: 70vh;
    position: relative;
    margin-top: 20px;
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.05);
    }
    &:hover ${Info} {
        opacity: 1;
    }

    ${mobile({ width: "100%", height: "52vh" })};
`;
const Image = styled.img`
    width: 100%;
    height: 100%;
`;
const Title = styled.h3`
    color: #fff;
    margin-bottom: 20px;
`;
const Button = styled.button`
    border: none;
    padding: 10px;
    // background-color: #fff;
    // color: rgba(0, 0, 0, 0.8);
    font-weight: 600;
`;

const CategoryItem = ({ item }) => {
    return (
        <Container>
            <Link to={`/products/${item.cat}`}>
                <Image src={item.img} />
                <Info>
                    <Title className="text-shadow">{item.title}</Title>
                    <Button className="btn btn-light btn-custom">SHOP NOW</Button>
                </Info>
            </Link>
        </Container>
    )
}

export default CategoryItem

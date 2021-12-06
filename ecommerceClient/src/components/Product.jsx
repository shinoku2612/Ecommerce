import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons";
import styled from "styled-components"
import { mobile } from "../responsive";
import { Link } from 'react-router-dom';
import '../assets/custom.css';
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.1);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity 0.5s ease;
`;
const Container = styled.div`
    width: 24%;
    margin: 5px;
    min-width: 24%;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;
    transition: transform 0.5s ease;
    cursor: pointer;

    &:first-child {
        margin-left: 0.4%;
        margin-right: 0.6%;
    }
    &:hover {
        transform: scale(1.05);
    }
    &:hover ${Info}{
        opacity: 1;
    }
    ${mobile({ width: "48%", margin: "1% 1% 1% 0", height: "32vh", backgroundColor: "#e8f9ff" })};
`;
const Image = styled.img`
    width: 60%;
    height: 75%;
    z-index: 2;
    `;
const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;

    &:hover {
        background-color: #e9f5f5;
        transform: scale(1.1);
        transition: transform 0.5s ease;
    }
    ${mobile({ width: "32px", height: "32px", margin: "8px" })};
`;

const Product = ({ item }) => {
    const dispatch = useDispatch();
    const handleAdd = () => {
        dispatch(
            addProduct({ ...item, quantity: 1, price: item.price })
        );
    };

    return (
        <Container className="card-custom">
            <Image src={item.img} />
            <Info>
                <Icon onClick={handleAdd}>
                    <ShoppingCartOutlined></ShoppingCartOutlined>
                </Icon>
                <Icon>
                    <Link to={`/product/${item._id}`} className="link-item">
                        <SearchOutlined></SearchOutlined>
                    </Link>
                </Icon>
            </Info>
        </Container>
    )
}

export default Product

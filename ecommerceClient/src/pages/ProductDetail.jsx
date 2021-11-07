import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components"
import Footer from "../components/Footer";
import Header from "../components/Header";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";


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
    ${mobile({ marginTop: "0" })};
`;
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({ padding: "10px", flexDirection: "column" })};
`;
const ImgContainer = styled.div`
    flex: 1;
    border: 1px solid rgba(0, 0, 0, 0.3);
    box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.3);
`;
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    ${mobile({ height: "40vh", padding: "0 20%", marginBottom: "20px", objectFit: "unset" })};
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0 50px;
    text-align: justify;
    ${mobile({ padding: "10px" })};
`;
const Title = styled.h1`
    font-weight: 200;
    ${mobile({ textAlign: "center" })};
`;
const Description = styled.p`
    margin: 20px 0;
`;
const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`;
const AddContainer = styled.div`
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ width: "100%" })};
`;
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 700;
`;
const Amount = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 35px;
    font-size: 20px;
    border: 1px solid rgba(0, 0, 0, 0.3);
`;
const Button = styled.button`

`;


const ProductDetail = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await publicRequest.get(`/products/find/${id}`);
                setProduct(res.data);
            } catch (err) {

            }
        };
        getProduct();
    }, [id]);

    const handleQuantity = (type) => {
        if (type === "dec") {
            quantity > 1 && setQuantity(prev => prev - 1);
        } else {
            setQuantity(prev => prev + 1);
        }
    };

    const handleAdd = () => {
        dispatch(
            addProduct({ ...product, quantity: quantity, price:product.price })
        );
    };

return (
    <Container>
        <Header></Header>
        <Main className="container">
            <Wrapper>
                <ImgContainer>
                    <Image src={product.img} />
                </ImgContainer>
                <InfoContainer>
                    <Title>{product.title}</Title>
                    <Description>{product.description}</Description>
                    <Price>$ {product.price}</Price>
                    <AddContainer>
                        <AmountContainer>
                            <Remove className="amount-custom btn-custom" onClick={() => handleQuantity("dec")} />
                            <Amount>{quantity}</Amount>
                            <Add className="amount-custom btn-custom" onClick={() => handleQuantity("inc")} />
                        </AmountContainer>
                        <Button className="btn btn-dark btn-custom" onClick={handleAdd}>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
        </Main>
        <Footer></Footer>
    </Container>
)
}

export default ProductDetail
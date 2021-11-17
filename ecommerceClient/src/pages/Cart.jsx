import { Add, Remove } from '@material-ui/icons';
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import Footer from '../components/Footer'
import Header from '../components/Header'
import { mobile } from '../responsive';
import { removeProduct, decreaseProduct, increaseProduct } from "../redux/cartRedux";
import { Link } from 'react-router-dom';
import PayPal from '../components/PayPal';

const Container = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
`;
const Main = styled.div`
    flex: 1;
    margin-top: 60px;
    ${mobile({ marginTop: "0" })};
`;
const Wrapper = styled.div`
    padding: 20px;
    ${mobile({ padding: "10px" })};
`;
const Title = styled.h3`
    font-weight: 400;
    text-align: center;
    text-transform: uppercase;
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    ${mobile({ padding: "20px 0" })};
`;
const TopButton = styled.button`
    text-transform: uppercase;
    ${mobile({ fontSize: "0.875rem" })};
`;
const TopTexts = styled.div`
    ${mobile({ display: "none" })};
`;
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0 20px;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })};
`;
const Info = styled.div`
    flex: 3;
`;
const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })};
`;
const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`;
const Image = styled.img`
    width: 200px;
    height: 250px;
    ${mobile({ width: "180px", height: "220px" })};
`;
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    ${mobile({ padding: "20px 0 20px 20px" })};
`;
const ProductName = styled.span`
    margin-bottom: 20px;
`;

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 700;
    margin-top: 20px;
    margin-bottom: 20px;
`;
const ProductAmount = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 35px;
    font-size: 20px;
    border: 1px solid rgba(0, 0, 0, 0.3);
`;
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
`;
const Hr = styled.hr`
    background-color: #000;
    border: none;
    height: 1px;
`;

const Summary = styled.div`
    flex: 1;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    padding: 20px;
    height: 60vh;
    position: relative;
    z-index: 1;
`;
const SummaryTitle = styled.h1`
    font-weight: 200;
    font-size: 30px;
    text-align: center;
`;
const SummaryItem = styled.div`
    margin: 24px 0;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type === "total" && "500"};
    font-size: ${props => props.type === "total" && "20px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
    width: 100%;
`;
const Empty = styled.div`
    height: 30vh;
    padding: 20px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
`;
const EmptyCart = styled.img`
    width: 175px;
    height: 180px;
`;
const ShopButton = styled.button`
    margin-top: 5px;
`;

const Cart = () => {
    const cart = useSelector(state => state.cart);

    const dispatch = useDispatch();

    const handleRemove = (product) => {
        dispatch(
            removeProduct(product)
        );
    }
    const handleDecrease = (product) => {
        dispatch(
            decreaseProduct(product)
        );
    }
    const handleIncrease = (product) => {
        dispatch(
            increaseProduct(product)
        );
    }

    // PayPal checkout
    const [checkout, setCheckout] = useState(false);

    return (
        <Container>
            <Header></Header>
            <Main className="container">
                <Wrapper>
                    <Title>Shopping Cart</Title>
                    <Empty className={cart.products.length === 0 ? "" : "display-none"}>
                        <EmptyCart src="./shopping-cart.png" />
                        <h4>Your cart is currently empty!</h4>
                        <Link to="/products">
                            <ShopButton className="btn btn-dark btn-custom">SHOP NOW</ShopButton>
                        </Link>
                    </Empty>
                    <Top className={cart.products.length === 0 ? "display-none" : ""}>
                        <Link to="/products">
                            <TopButton className="btn btn-outline-dark btn-custom">Continue Shopping</TopButton>
                        </Link>
                        <TopTexts>
                            <TopText>Shopping Cart({cart.quantity})</TopText>
                            <TopText>Your Favour Books(0)</TopText>
                        </TopTexts>

                        {/* {checkout ? (
                            <PayPal />
                        ) : (
                            <TopButton
                                className="btn btn-dark btn-custom"
                                onClick={() => { setCheckout(true) }}
                            >
                                Checkout Now
                            </TopButton>
                        )} */}
                    </Top>
                    <Bottom className={cart.products.length === 0 ? "display-none" : ""}>
                        <Info>
                            {cart.products.map(product => (
                                <>
                                    <Hr />
                                    <Product key={product._id}>
                                        <ProductDetail>
                                            <Image src={product.img} />
                                            <Details>
                                                <ProductName><b>Product: </b>{product.title}</ProductName>
                                                <Button
                                                    value={product._id}
                                                    className="btn btn-dark btn-custom btn-remove"
                                                    onClick={() => handleRemove(product)}
                                                >Remove</Button>
                                            </Details>
                                        </ProductDetail>
                                        <PriceDetail>
                                            <ProductAmountContainer>
                                                <Remove className="amount-custom btn-custom"
                                                    onClick={() => { handleDecrease(product) }}>

                                                </Remove>
                                                <ProductAmount>{product.quantity}</ProductAmount>
                                                <Add className="amount-custom btn-custom"
                                                    onClick={() => { handleIncrease(product) }}>

                                                </Add>
                                            </ProductAmountContainer>
                                            <ProductPrice>$ {product.price * product.quantity}</ProductPrice>
                                        </PriceDetail>
                                    </Product>
                                </>
                            ))}
                        </Info>
                        <Summary>
                            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                            <SummaryItem>
                                <SummaryItemText>Subtotal</SummaryItemText>
                                <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem>
                                <SummaryItemText>Estimated Shipping</SummaryItemText>
                                <SummaryItemPrice>$ 0</SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem>
                                <SummaryItemText>Shipping Discount</SummaryItemText>
                                <SummaryItemPrice>$ 0</SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem type="total">
                                <SummaryItemText>Total</SummaryItemText>
                                <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                            </SummaryItem>
                            {checkout ? (
                                <PayPal />
                            ) : (
                                <Button
                                    className="btn btn-dark btn-custom"
                                    onClick={() => { setCheckout(true) }}
                                >
                                    Checkout Now
                                </Button>
                            )}
                        </Summary>
                    </Bottom>
                </Wrapper>
            </Main>
            <Footer></Footer>
        </Container>
    )
}

export default Cart

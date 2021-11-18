import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { mobile } from '../responsive';
import { useLocation } from "react-router";
import { useSelector } from 'react-redux';
import { userRequest } from '../requestMethods';

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
    const location = useLocation();

    const data = location.state?.PayPalData;
    const cart = location.state?.products;

    const currentUser = useSelector(state => state.user.currentUser);
    const [orderId, setOrderId] = useState(null);

    useEffect(() => {
        const createOrder = async () => {
            try {
                const res = await userRequest.post("/orders", {
                    userId: currentUser._id,
                    products: cart.products.map((item) => ({
                        productId: item._id,
                        quantity: item.quantity
                    })),
                    amount: cart.total,
                    address: data.purchase_units[0].shipping.address
                });
                setOrderId(res.data._id);
            } catch {

            }
        };
        data && createOrder();
    }, [cart, data, currentUser]);

    return (
        <Container>
            <Header></Header>
            <Main className="container">
                <div
                    style={{
                        height: "100vh",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    {!orderId
                        ? `Successfull. Your order is being prepared...`
                        :
                        <>
                            <img src="./success.png" alt="Success"
                                style={{
                                    border: "8px solid #93D632",
                                    borderRadius: "50%",
                                    padding: 10,
                                    marginBottom: 10
                                }}
                            />
                            Order has been created successfully. Your order number is ${orderId}
                        </>}
                    <Link to="/orders">
                        <button className="btn btn-dark btn-custom mt-3">See your Orders</button>
                    </Link>
                </div>
            </Main>
            <Footer></Footer>
        </Container>
    )
}

export default Success

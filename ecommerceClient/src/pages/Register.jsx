import styled from "styled-components"
import Header from "../components/Header";
import { Form, Row, Col, Button } from "react-bootstrap"
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/apiCall";
import { refresh } from "../redux/userRedux";

const Container = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    width: 100vw;
    padding-top: 60px;
    ${mobile({ paddingTop: "0" })};
`;
const Main = styled.div`
    flex: 1;
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const Logo = styled.img`
    width: 65px;
    margin-left: auto;
    margin-right: auto;
`;
const Title = styled.h2`
    margin-top: 8px;
`;
const Description = styled.p`
    color: #6c757d;
`;
const Submit = styled.div`
    // width: 100%;
    padding: 0 20px;
`;
const Error = styled.span`
    display: inline-block;
    margin-bottom: 10px;
    padding-left: 20px;
    color: red;
`;

const Register = () => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const { isFetching, error } = useSelector(state => state.user);

    useEffect(() => {
        dispatch(refresh());
    }, [dispatch]);

    const handleRegister = (e) => {
        e.preventDefault();
        const btnSignUp = document.getElementById("btnSignUp");
        btnSignUp.disabled = isFetching;
        register(dispatch, { firstname, lastname, username, email, password });
    }

    return (
        <Container>
            <Header></Header>
            <Main className="container">
                <Logo src="./android-chrome-192x192.png" />
                <Title>Sign up</Title>
                <Description>Shopping, get support, and review books.</Description>
                <Form action="#" >
                    <Row className="mb-3 form-custom">
                        <Form.Group as={Col} controlId="formGridFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="First Name" onChange={(e) => setFirstname(e.target.value)} />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Last Name" onChange={(e) => setLastname(e.target.value)} />
                        </Form.Group>
                    </Row>
                    <Form.Group className="mb-3 form-custom" controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="mail" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3 form-custom" controlId="formGridUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="mail" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3 form-custom" controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3 form-custom" controlId="formGridConfirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Confirm Password" />
                    </Form.Group>
                    <Form.Group className="mb-3 form-custom" id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Subscribe for Shopping" />
                    </Form.Group>
                    {error && <Error>Something went wrong!</Error>}
                    <Submit>
                        <Button variant="dark" size="lg" className="w-100 btn-custom" id="btnSignUp"
                            onClick={handleRegister}
                        >
                            Sign Up
                        </Button>
                    </Submit>
                </Form>
            </Main>
            <Footer></Footer>
        </Container>
    )
}

export default Register

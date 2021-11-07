import styled from "styled-components"
import Header from "../components/Header";
import { Form, Row, Col, Button } from "react-bootstrap"
import Footer from "../components/Footer";
import { mobile } from "../responsive";


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
// const Error = styled.span`
//     color: red;
// `;

const Register = () => {
    const handle = event => {
        const btnSignUp = document.getElementById("btnSignUp");
        btnSignUp.disabled = !(event.target.checked);
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
                            <Form.Control type="text" placeholder="First Name" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Last Name" />
                        </Form.Group>
                    </Row>
                    <Form.Group className="mb-3 form-custom" controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="mail" placeholder="Enter your email" />
                    </Form.Group>
                    <Form.Group className="mb-3 form-custom" controlId="formGridUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="mail" placeholder="Username" />
                    </Form.Group>
                    <Form.Group className="mb-3 form-custom" controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3 form-custom" controlId="formGridConfirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Confirm Password" />
                    </Form.Group>
                    <Form.Group className="mb-3 form-custom" id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Subscribe for Shopping" />
                    </Form.Group>
                    <Submit>
                        <Button variant="dark" size="lg" className="w-100 btn-custom" id="btnSignUp"
                            onChange={handle}
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

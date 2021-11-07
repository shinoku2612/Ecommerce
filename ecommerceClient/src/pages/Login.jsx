import styled from "styled-components"
import Header from "../components/Header";
import { Form, Button } from "react-bootstrap"
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { useState } from "react";
import { login } from "../redux/apiCall";
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div`
    width: 100vw;
    padding-top: 60px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    ${mobile({ paddingTop: "0" })};
`;
const Main = styled.div`
    margin-top: 60px;
    flex: 1;
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
  color: red;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector(state => state.user);

  const handleLogin = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  }

  return (
    <Container>
      <Header></Header>
      <Main className="container">
        <Logo src="./android-chrome-192x192.png" />
        <Title>Login</Title>
        <Description>Shopping, get support, and review books.</Description>
        <Form action="#" style={{ minWidth: "40%", marginBottom: "90px" }}>
          <Form.Group className="mb-3 form-custom" controlId="formGridUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="mail" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3 form-custom" controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>
          {error && <Error>Something went wrong!</Error>}
          <Submit>
            <Button variant="dark" size="lg" className="w-100 btn-custom" id="btnLogin"
              onClick={handleLogin}
              disabled={isFetching}
            >
              Login
            </Button>
          </Submit>
        </Form>
      </Main>
      <Footer></Footer>
    </Container>
  )
}

export default Login

import React from 'react';
import styled from 'styled-components';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import { Form, FormControl, InputGroup } from 'react-bootstrap';
import '../assets/custom.css';
import { mobile } from '../responsive';
import { Link } from 'react-router-dom';
import { logout } from "../redux/apiCall";
import { useDispatch, useSelector } from 'react-redux';

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    height: 60px;
    background-color: #343a40;
    box-shadow: 0 2px 6px 0 rgba(233, 233, 233, 0.4);
    ${mobile({ height: "50px", position: "unset" })};
`;
const Wrapper = styled.div`
    padding: 10px 20px;
    color: #f8f9fa;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({ padding: "6px 10px" })};
`;
const Left = styled.div`
    flex: 1;
    text-align: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({ display: "none", flex: "0" })};
`;

const Center = styled.div`
    flex: 1;
    text-align: center;
    ${mobile({ flex: "0", marginRight: "8%" })};
`;
const Logo = styled.div`
    font-weight: bold;
    cursor: pointer;
    transition: color 0.3s ease;
    user-select: none;

    &:hover {
        color: #17a2b8;
    }
    ${mobile({ fontSize: "24px", paddingLeft: "10px" })};
`;
const Right = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex: 1;
    text-align: center;
`;
const MenuItems = styled.div`
    font-size: 14px;
    cursor: pointer;
    text-transform: uppercase;
    margin-left: 25px;
    transition: color 0.3s ease;
    user-select: none;

    &:hover {
        color: #17a2b8;
    }

    ${mobile({ fontSize: "12px", marginLeft: "10px" })};
`;
const Avatar = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    object-fit: cover;
`;

const Header = () => {
    const quantity = useSelector(state => state.cart.quantity);
    const user = useSelector(state => state.user.currentUser);

    const dispatch = useDispatch();

    const handleLogout = (e) => {
        e.preventDefault();
        logout(dispatch);
    }
    const handleRedirect = () => {
        window.location.replace(`/profile/${user._id}`);
    }

    return (
        <Container>
            <Wrapper>
                <Left>
                    <InputGroup id="searchBar">
                        <FormControl
                            id="searchInput"
                            placeholder="Search..."
                            aria-label="Search"
                            aria-describedby="basic-addon"
                        />
                        <InputGroup.Text style={{ padding: 0 }}>
                            <Form.Label htmlFor="searchInput" id="basic-addon" style={{ padding: "0.375rem 0.75rem", marginBottom: 0 }}>
                                <Search></Search>
                            </Form.Label>
                        </InputGroup.Text>
                    </InputGroup>
                </Left>
                <Center>
                    <Link to="/" className="link-item">
                        <Logo>DevBook</Logo>
                    </Link>
                </Center>
                {/* Non account */}
                {!user
                    ? <Right>
                        <Link to="/register" className="link-item">
                            <MenuItems>Register</MenuItems>
                        </Link>
                        <Link to="/login" className="link-item">
                            <MenuItems>Sign in</MenuItems>
                        </Link>
                        <Link to="/cart" className="link-item">
                            <MenuItems>
                                <Badge badgeContent={quantity} color="primary">
                                    <ShoppingCartOutlined></ShoppingCartOutlined>
                                </Badge>
                            </MenuItems>
                        </Link>
                    </Right>
                    : <Right>
                        <Link to={`/profile/${user._id}`} className="link-item user-link" onClick={handleRedirect}>
                            <Avatar src="https://www.pokecommunity.com/customavatars/avatar655426_2.gif"></Avatar>
                            <MenuItems className="text-capital user-name">{user.firstname}</MenuItems>
                        </Link>
                        <Link to="/" className="link-item"
                            onClick={handleLogout}
                        >
                            <MenuItems>Logout</MenuItems>
                        </Link>
                        <Link to="/cart" className="link-item">
                            <MenuItems>
                                <Badge badgeContent={quantity} color="primary">
                                    <ShoppingCartOutlined></ShoppingCartOutlined>
                                </Badge>
                            </MenuItems>
                        </Link>
                    </Right>
                }
            </Wrapper>
        </Container >
    )
}

export default Header

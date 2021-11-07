import { Facebook, Instagram, LocalPhone, MailOutline, Room, Twitter } from "@material-ui/icons";
import styled from "styled-components"
import { mobile } from "../responsive";
import '../assets/custom.css';

const Container = styled.div`
    display: flex;
    margin-top: 20px;
    color: #f8f9fa;
    background-color: #343a40;
    border-top: 1px solid rgba(0, 0, 0, 0.875);
    ${mobile({ flexDirection: "column" })};
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin-bottom: 10px;
`;
const Logo = styled.h3`
    &:after {
        content: "";
        display: block;
        margin-top: 10px;
        background-color: rgba(255, 255, 255, 0.3);
        width: 200px;
        height: 1px;
    }
`;
const Description = styled.p`
    margin: 23px 0 20px;
    text-align: justify;
`;
const SocialContainer = styled.div`
    display: flex;
`;
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: #fff;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.05);
    }
    &:active {
        transform: scale(0.95);
    }
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })};
`;
const Title = styled.h3`
    margin-bottom: 30px;
    &:after {
        content: "";
        display: block;
        margin-top: 10px;
        background-color: rgba(255, 255, 255, 0.3);
        width: 200px;
        height: 1px;
    }
`;
const ListLink = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
        color: #17a2b8;
    }
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ borderTop: "1px solid rgba(255, 255, 255, 0.3)" })};
`;
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>DevBook</Logo>
                <Description>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla ut eros vitae metus dictum ultrices sed et risus.
                    Quisque augue sapien, hendrerit eu mollis vel, commodo ac ligula.
                </Description>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook></Facebook>
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram></Instagram>
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter></Twitter>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center className="border-custom">
                <Title>Useful Links</Title>
                <ListLink>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Back-end</ListItem>
                    <ListItem>Front-end</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Term</ListItem>
                </ListLink>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{ marginRight: "10px" }} /> 01, Võ Văn Ngân, P. Linh Chiểu, Tp. Thủ Đức, Tp. HCM
                </ContactItem>
                <ContactItem>
                    <LocalPhone style={{ marginRight: "10px" }} /> +84 123456789
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{ marginRight: "10px" }} /> info@email.com
                </ContactItem>
            </Right>
        </Container>
    )
}

export default Footer

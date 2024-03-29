import { ContactPhoneOutlined, LockOutlined, RecentActorsOutlined } from '@material-ui/icons';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Header from '../components/Header';
import { mobile } from '../responsive';
import '../assets/custom.css';
import { update } from "../redux/apiCall";
import { refresh } from "../redux/userRedux";

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
    margin-right: 200px;
    ${mobile({
    marginTop: "10px",
    display: "flex",
    flexDirection: "column",
    marginRight: "0"
})};
`;
const SideBar = styled.div`
    border-right: 1px solid rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 60px;
    bottom: 0;
    left: 0;
    width: 24vw;
    background-color: #f8f9fa;
    padding: 30px 8px 0 0;
    ${mobile({
    position: "unset",
    top: "50px",
    width: "100%",
    padding: "10px 10px 0 10px"
})};
`;
const HeaderBar = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
`;
const Avatar = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.3);
    ${mobile({
    width: "120px",
    height: "120px"
})}
`;
const FullName = styled.h4`
    padding: 12px 10px 0;
    text-align: center;
    font-size: 20px;
    ${mobile({
    fontSize: "18px"
})}
`;

const Menu = styled.div`
    ${mobile({
    overflowX: "scroll",
})}
`;
const MenuItems = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    ${mobile({
    flexDirection: "row",
    width: "120%",
    whiteSpace: "nowrap"
})}
`;
const MenuItem = styled.a`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 10px 10px 10px 16px;
    vertical-align: middle;
    text-decoration: none;
    color: #343a40;
    font-size: 17px;
    font-weight: 500;
    border: 0.5px solid transparent;
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
    border-top-right-radius: 100px;
    border-bottom-right-radius: 100px;
    user-select: none;

    &:hover {
        color: #343a40;
        cursor: pointer;
        border-color: rgba(0, 0, 0, 0.2);
        background-color: #eaeaea;
    }
    &:active {
        box-shadow: 0px 0px 10px 8px rgba(0, 0, 0, 0.05) inset;
    }
    
    ${mobile({
    width: "30%",
    padding: "5px 10px",
    fontSize: "15px",
    borderTopRightRadius: "6px",
    borderTopLeftRadius: "6px",
    borderBottomRightRadius: "0",
    borderBottomLeftRadius: "0",
    justifyContent: "center"
})}
`;
const ProfileBar = styled.div`
    width: calc(100% - 24vw);
    margin-left: 24vw;
    padding: 20px 30px;
    outline: none;

    ${mobile({
    width: "100%",
    marginLeft: "0",
    padding: "20px 0"
})}

    @media only screen and (max-width: 414px) {
        transform: translateX(${props => props.tabIndex * -100}%);
    }
`;
const ProfileHeader = styled.div`
    padding-left: 100px;
    ${mobile({
    display: "none"
})}
`;
const Title = styled.h3`
    text-align: center;
    font-weight: 400;
`;
const SubTitle = styled.p`
    text-align: center;
`;

const ProfileBody = styled.div`
    text-align: center;
    ${mobile({
    height: "60vh",
    overflowY: "scroll",
    display: "flex",
    width: "300%"
})}
`;
const ProfileCard = styled.div`
    text-align: left;
    margin-bottom: 1.5rem;
    ${mobile({
    height: "fit-content",
    width: "33.3333%",
    margin: "0 30px",
    opacity: 0,
    transition: "opacity 0.5s ease"
})}
`;
const Hr = styled.div`
    margin: 0.75rem 0;
    color: inherit;
    border: 0.5px solid currentColor;
    opacity: .25;
`;

const CardHeader = styled.h4`
    padding: 10px 16px;
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 0;
    background-color: #f8f9fa;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 0.3);
`;
const CardBody = styled.div`
    padding: 8px 16px;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-top: none;
`;
const UserInfo = styled.div`
    display: flex;
    flex-wrap: nowrap;
    padding: 6px 8px 6px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    &:last-child {
        border-bottom: none;
    }

    ${mobile({
    flexDirection: "column",
    flexWrap: "wrap"
})}
`;
const InfoName = styled.div`
    width: calc((100%/12)*5);
    padding: 4px 0;
    font-weight: 600;
    ${mobile({ width: "100%" })}
`;
const Info = styled.div`
    width: calc((100%/12)*7);
    padding: 4px 0;
    word-wrap: break-word;
    ${mobile({ width: "100%", paddingLeft: "8px" })}
`;
const CardFooter = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px 0;
`;
const EditButton = styled.button`
    font-size: 18px;
    text-transform: uppercase;
    width: 20%;

    ${mobile({ width: "100%" })}
`;
const InfoEdit = styled.input`
    width: calc((100%/12)*7);
    padding: 4px 10px;
    outline: none;
    border: 1px solid;
    border-color: rgba(0, 0, 0, 0.25);
    border-radius: 6px;

    &:focus {
        border-color: #343a40;
        box-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
    }
    ${mobile({ width: "100%", paddingLeft: "8px" })}
`;
const Error = styled.span`
    display: block;
    margin-top: 10px;
    color: red;
`;

const Profile = () => {
    const user = useSelector(state => state.user.currentUser);
    const [tabIndex, setTabIndex] = useState(0);

    const handleActive = (e) => {
        // Set menu active style
        const activeItem = document.querySelector(".active-menu");
        activeItem && activeItem.classList.remove("active-menu");
        e.target.closest(".item").classList.add("active-menu");

        const cards = document.querySelectorAll(".card-item");
        // Get index of tab will be switching
        const tabIndex = Number(e.target.closest(".item").id);
        setTabIndex(tabIndex);

        // Switch tab on mobile
        const fadeItem = document.querySelector(".fade-card");
        fadeItem && fadeItem.classList.remove("fade-card");
        cards[tabIndex].classList.add("fade-card");

        // Switch tab on computer site
        cards.forEach(card => {
            card.classList.add("display-none");
        });
        cards[tabIndex].classList.remove("display-none");
    };

    // Handle change info
    const username = user.username;
    const [curPassword, setCurPassword] = useState(null);
    const [password, setPassword] = useState("");
    const { bDate, gender, phone, error, isFetching } = useSelector(state => state.user);

    const [firstname, setFirstName] = useState(user.firstName);
    const [lastname, setLastName] = useState(user.lastName);
    const [date, setDate] = useState(bDate);
    const [gend, setGend] = useState(gender);
    const [email, setEmail] = useState(user.email);
    const [contactPhone, setContactPhone] = useState(phone);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(refresh());
    }, [dispatch]);

    const userInfo = {
        date: date,
        gend: gend,
        phone: contactPhone
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        if (curPassword && curPassword !== "") {
            if (password !== "") {
                update(dispatch, { username, password, curPassword, firstname, lastname, email }, user._id, userInfo);
            } else {
                alert("Please enter your new password!");
            }
        } else {
            update(dispatch, { firstname, lastname, email }, user._id, userInfo);
        }
    }

    const handleEditBasic = (e) => {
        const editBasics = document.querySelectorAll(".edit-basic");
        editBasics.forEach(edit => {
            edit.classList.remove("display-none");
        });
        const basics = document.querySelectorAll(".basic");
        basics.forEach(basic => {
            basic.classList.add("display-none");
        });
    };
    const handleEditContact = (e) => {
        const editContacts = document.querySelectorAll(".edit-contact");
        editContacts.forEach(edit => {
            edit.classList.remove("display-none");
        });
        const contacts = document.querySelectorAll(".contact");
        contacts.forEach(contact => {
            contact.classList.add("display-none");
        });
    };

    return (
        <Container>
            <Header></Header>
            <Main>
                <SideBar>
                    <HeaderBar>
                        <Avatar src="https://st.gamevui.com/images/image/2019/03/20/pikachu-200.jpg"></Avatar>
                        <FullName>{`${user.firstname} ${user.lastname}`}</FullName>
                    </HeaderBar>
                    <Hr />
                    <Menu>
                        <MenuItems className="menu-items" onClick={(e) => { handleActive(e) }}>
                            <MenuItem className="item active-menu" id="0">
                                <RecentActorsOutlined style={{ marginRight: "12px" }} /> Basic Info
                            </MenuItem>
                            <MenuItem className="item" id="1">
                                <ContactPhoneOutlined style={{ marginRight: "12px" }} /> Contact Info
                            </MenuItem>
                            <MenuItem className="item last-item" id="2">
                                <LockOutlined style={{ marginRight: "12px" }} /> Change Password
                            </MenuItem>
                        </MenuItems>
                    </Menu>
                </SideBar>
                <ProfileBar tabIndex={tabIndex}>
                    <ProfileHeader>
                        <Title>Personal Info</Title>
                        <SubTitle>Info about you and your preferences across our services</SubTitle>
                    </ProfileHeader>
                    <ProfileBody>
                        <ProfileCard className="card-item fade-card mobile-active">
                            <CardHeader>Basic Info</CardHeader>
                            <CardBody>
                                <UserInfo>
                                    <InfoName className="basic">Full Name</InfoName>
                                    <Info className="basic">{user.firstname} {user.lastname}</Info>
                                    <InfoName className="edit-basic display-none">First Name</InfoName>
                                    <InfoEdit
                                        defaultValue={user.firstname}
                                        style={{ marginRight: "20px" }}
                                        className="edit-basic display-none"
                                        onChange={(e) => setFirstName(e.target.value)}>
                                    </InfoEdit>
                                    <InfoName className="edit-basic display-none">Last Name</InfoName>
                                    <InfoEdit
                                        defaultValue={user.lastname}
                                        className="edit-basic display-none"
                                        onChange={(e) => setLastName(e.target.value)}>
                                    </InfoEdit>
                                </UserInfo>
                                <UserInfo>
                                    <InfoName>Birth Day</InfoName>
                                    <Info className="basic">{bDate}</Info>
                                    <InfoEdit
                                        defaultValue={bDate}
                                        className="edit-basic display-none"
                                        onChange={(e) => setDate(e.target.value)}></InfoEdit>
                                </UserInfo>
                                <UserInfo>
                                    <InfoName>Gender</InfoName>
                                    <Info className="basic">{gender}</Info>
                                    <InfoEdit
                                        defaultValue={gender}
                                        className="edit-basic display-none"
                                        onChange={(e) => setGend(e.target.value)}></InfoEdit>
                                </UserInfo>
                            </CardBody>
                            <CardFooter>
                                <EditButton
                                    className="btn btn-dark btn-custom basic"
                                    onClick={handleEditBasic}
                                >Edit</EditButton>
                                <EditButton
                                    disabled={isFetching}
                                    className="btn btn-dark btn-custom edit-basic display-none"
                                    onClick={handleUpdate}>Update</EditButton>
                            </CardFooter>
                        </ProfileCard>
                        <ProfileCard className="card-item display-none mobile-active">
                            <CardHeader>Contact Info</CardHeader>
                            <CardBody>
                                <UserInfo>
                                    <InfoName>Email</InfoName>
                                    <Info className="contact">{user.email}</Info>
                                    <InfoEdit
                                        defaultValue={user.email}
                                        className="edit-contact display-none"
                                        onChange={(e) => setEmail(e.target.value)}></InfoEdit>
                                </UserInfo>
                                <UserInfo>
                                    <InfoName>Phone</InfoName>
                                    <Info className="contact">{phone}</Info>
                                    <InfoEdit
                                        defaultValue={phone}
                                        className="edit-contact display-none"
                                        onChange={(e) => setContactPhone(e.target.value)}></InfoEdit>
                                </UserInfo>
                            </CardBody>
                            <CardFooter>
                                <EditButton
                                    className="btn btn-dark btn-custom contact"
                                    onClick={handleEditContact}
                                >
                                    Edit</EditButton>
                                <EditButton
                                    disabled={isFetching}
                                    className="btn btn-dark btn-custom edit-contact display-none"
                                    onClick={handleUpdate}>Update</EditButton>
                            </CardFooter>
                        </ProfileCard>
                        <ProfileCard className="card-item display-none mobile-active">
                            <CardHeader>Password</CardHeader>
                            <CardBody>
                                <UserInfo>
                                    <InfoName>Current Password</InfoName>
                                    <InfoEdit type="password" onChange={(e) => setCurPassword(e.target.value)}></InfoEdit>
                                </UserInfo>
                                <UserInfo>
                                    <InfoName>New Password</InfoName>
                                    <InfoEdit type="password" onChange={(e) => setPassword(e.target.value)}></InfoEdit>
                                </UserInfo>
                            </CardBody>
                            {error && <Error>Your current password is incorect!</Error>}
                            <CardFooter>
                                <EditButton
                                    disabled={isFetching}
                                    className="btn btn-dark btn-custom"
                                    onClick={handleUpdate}>Update</EditButton>
                            </CardFooter>
                        </ProfileCard>
                    </ProfileBody>
                </ProfileBar>
            </Main>
            {/* <Footer></Footer> */}
        </Container>
    )
};

export default Profile

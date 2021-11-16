import './user.css';
import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons';
import { Link } from 'react-router-dom';

export default function User() {
    return (
        <div className="user">
            <div className="user-title-container">
                <h1 className="user-title">Edit User</h1>
                <Link to="/newUser">
                    <button className="user-add-btn">Create</button>
                </Link>
            </div>
            <div className="user-container">
                <div className="user-show">
                    <div className="user-show-top">
                        <img src="https://st.gamevui.com/images/image/2019/03/20/pikachu-200.jpg" alt="" className="user-show-img" />
                        <div className="user-show-top-title">
                            <span className="user-show-username">Shinoku Kimawari</span>
                            <span className="user-show-user-title">Student</span>
                        </div>
                    </div>
                    <div className="user-show-bottom">
                        <span className="user-show-title">Account Details</span>
                        <div className="user-show-info">
                            <PermIdentity className="user-show-icon" />
                            <span className="user-show-info-title">shinoku2612</span>
                        </div>
                        <div className="user-show-info">
                            <CalendarToday className="user-show-icon" />
                            <span className="user-show-info-title">01/01/2001</span>
                        </div>
                        <span className="user-show-title">Contact Details</span>
                        <div className="user-show-info">
                            <PhoneAndroid className="user-show-icon" />
                            <span className="user-show-info-title">+84 306 416 596</span>
                        </div>
                        <div className="user-show-info">
                            <MailOutline className="user-show-icon" />
                            <span className="user-show-info-title">shinoku2612@gmail.com</span>
                        </div>
                        <div className="user-show-info">
                            <LocationSearching className="user-show-icon" />
                            <span className="user-show-info-title">Viet Nam</span>
                        </div>
                    </div>
                </div>
                <div className="user-update">
                    <span className="user-update-title">Edit</span>
                    <form className="user-update-form">
                        <div className="user-update-left">
                            <div className="user-update-item">
                                <label>Username</label>
                                <input
                                    type="text"
                                    placeholder="shinoku2612"
                                    className="user-update-input"
                                />
                            </div>
                            <div className="user-update-item">
                                <label>Full Name</label>
                                <input
                                    type="text"
                                    placeholder="Shinoku Kimawari"
                                    className="user-update-input"
                                />
                            </div>
                            <div className="user-update-item">
                                <label>Email</label>
                                <input
                                    type="email"
                                    placeholder="shinoku2612@gmail.com"
                                    className="user-update-input"
                                />
                            </div>
                            <div className="user-update-item">
                                <label>Phone</label>
                                <input
                                    type="text"
                                    placeholder="+84 306 416 596"
                                    className="user-update-input"
                                />
                            </div>
                            <div className="user-update-item">
                                <label>Address</label>
                                <input
                                    type="text"
                                    placeholder="Viet Nam"
                                    className="user-update-input"
                                />
                            </div>
                        </div>
                        <div className="user-update-right">
                            <div className="user-update-upload">
                                <img className="user-update-img" src="https://st.gamevui.com/images/image/2019/03/20/pikachu-200.jpg" alt="" />
                                <label htmlFor="fileInput">
                                    <Publish className="user-update-icon" />
                                </label>
                                <input type="file" id="fileInput" style={{ display: "none" }} />
                            </div>
                            <button className="user-update-btn">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

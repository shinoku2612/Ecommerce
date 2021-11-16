import {
    AttachMoneyOutlined, BarChart, ChatBubbleOutline,
    DynamicFeed, LineStyleOutlined, MailOutline,
    PermIdentityOutlined, Report, StorefrontOutlined,
    Timeline, TimelineOutlined, TrendingUpOutlined, WorkOutline
} from '@material-ui/icons';
import './sidebar.css';
import { Link } from 'react-router-dom';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-wrapper">
                <div className="sidebar-menu">
                    <h3 className="sidebar-title">Dashboard</h3>
                    <ul className="sidebar-list">
                        <Link to="/" className="link-item">
                            <li className="sidebar-list-item active">
                                <LineStyleOutlined className="sidebar-icon" /> Home
                            </li>
                        </Link>
                        <li className="sidebar-list-item">
                            <TimelineOutlined className="sidebar-icon" /> Analytics
                        </li>
                        <li className="sidebar-list-item">
                            <TrendingUpOutlined className="sidebar-icon" /> Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebar-menu">
                    <h3 className="sidebar-title">Quick Menu</h3>
                    <ul className="sidebar-list">
                        <Link to="/users" className="link-item">
                            <li className="sidebar-list-item">
                                <PermIdentityOutlined className="sidebar-icon" /> Users
                            </li>
                        </Link>
                        <Link to="/products" className="link-item">
                            <li className="sidebar-list-item">
                                <StorefrontOutlined className="sidebar-icon" /> Products
                            </li>
                        </Link>
                        <li className="sidebar-list-item">
                            <AttachMoneyOutlined className="sidebar-icon" /> Transactions
                        </li>
                        <li className="sidebar-list-item">
                            <BarChart className="sidebar-icon" /> Reports
                        </li>
                    </ul>
                </div>
                <div className="sidebar-menu">
                    <h3 className="sidebar-title">Notifications</h3>
                    <ul className="sidebar-list">
                        <li className="sidebar-list-item">
                            <MailOutline className="sidebar-icon" /> Mail
                        </li>
                        <li className="sidebar-list-item">
                            <DynamicFeed className="sidebar-icon" /> Feedback
                        </li>
                        <li className="sidebar-list-item">
                            <ChatBubbleOutline className="sidebar-icon" /> Messages
                        </li>
                    </ul>
                </div>
                <div className="sidebar-menu">
                    <h3 className="sidebar-title">Staff</h3>
                    <ul className="sidebar-list">
                        <li className="sidebar-list-item">
                            <WorkOutline className="sidebar-icon" /> Manage
                        </li>
                        <li className="sidebar-list-item">
                            <Timeline className="sidebar-icon" /> Analytics
                        </li>
                        <li className="sidebar-list-item">
                            <Report className="sidebar-icon" /> Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

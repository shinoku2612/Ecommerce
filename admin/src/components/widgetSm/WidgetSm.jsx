import './widgetSm.css';
import { VisibilityOutlined } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import { userRequest } from '../../requestMethods';

export default function WidgetSm() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUser = async () => {
            try {
                const res = await userRequest.get("/users/?new=true");
                setUsers(res.data);
            } catch { }
        };
        getUser();
    }, []);

    return (
        <div className="widgetSm">
            <span className="widgetSm-title">New Join Members</span>
            <ul className="widgetSm-list">
                {users.map(user => (
                    <li className="widgetSm-list-item" key={user._id}>
                        <img src={user.img || "https://el.tvu.edu.vn/images/avatar/no-avatar.png"} alt="" className="widgetSm-img" />
                        <div className="widgetSm-user">
                            <span className="widgetSm-userName">{user.username}</span>
                            {/* <span className="widgetSm-userTitle">Fullstack Developer</span> */}
                        </div>
                        <div className="widgetSm-btn">
                            <VisibilityOutlined className="widgetSm-icon" />
                            Display
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
import './widgetSm.css';
import { VisibilityOutlined } from '@material-ui/icons';

export default function WidgetSm() {
    return (
        <div className="widgetSm">
            <span className="widgetSm-title">New Join Members</span>
            <ul className="widgetSm-list">
                <li className="widgetSm-list-item">
                    <img src="https://st.gamevui.com/images/image/2019/03/20/pikachu-200.jpg" alt="" className="widgetSm-img" />
                    <div className="widgetSm-user">
                        <span className="widgetSm-userName">Shinoku Kimawari</span>
                        <span className="widgetSm-userTitle">Fullstack Developer</span>
                    </div>
                    <div className="widgetSm-btn">
                        <VisibilityOutlined className="widgetSm-icon" />
                        Display
                    </div>
                </li>
                <li className="widgetSm-list-item">
                    <img src="https://st.gamevui.com/images/image/2019/03/20/pikachu-200.jpg" alt="" className="widgetSm-img" />
                    <div className="widgetSm-user">
                        <span className="widgetSm-userName">Shinoku Kimawari</span>
                        <span className="widgetSm-userTitle">Fullstack Developer</span>
                    </div>
                    <div className="widgetSm-btn">
                        <VisibilityOutlined className="widgetSm-icon" /> Display
                    </div>
                </li>
                <li className="widgetSm-list-item">
                    <img src="https://st.gamevui.com/images/image/2019/03/20/pikachu-200.jpg" alt="" className="widgetSm-img" />
                    <div className="widgetSm-user">
                        <span className="widgetSm-userName">Shinoku Kimawari</span>
                        <span className="widgetSm-userTitle">Fullstack Developer</span>
                    </div>
                    <div className="widgetSm-btn">
                        <VisibilityOutlined className="widgetSm-icon" /> Display
                    </div>
                </li>
            </ul>
        </div>
    )
}
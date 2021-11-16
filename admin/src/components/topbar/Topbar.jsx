import React from 'react'
import './topbar.css'
import { NotificationsNone, SettingsOutlined } from '@material-ui/icons';

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbar-wrapper">
                <div className="topbar-left">
                    <span className="logo">DevBook Admin</span>
                </div>
                <div className="topbar-right">
                    <div className="topbar-icon">
                        <NotificationsNone />
                        <span className="icon-badge">2</span>
                    </div>
                    <div className="topbar-icon">
                        <SettingsOutlined />
                    </div>
                    <img src="https://st.gamevui.com/images/image/2019/03/20/pikachu-200.jpg" alt="" className="top-avatar" />
                </div>
            </div>
        </div>
    )
}

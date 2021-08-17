
import React from 'react';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import './topbar.css';
import SettingsIcon from '@material-ui/icons/Settings';
import LanguageIcon from '@material-ui/icons/Language';

const Topbar = () => {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">
                       T-flixAdmin
                    </span>

                </div>
                <div className="topRight">
                    <div className="topbarIconsContainer">
                            <NotificationsNoneIcon/>
                        <span className="topIconBadge">
                            2
                        </span>
                    </div>
                     <div className="topbarIconsContainer"> 
                            <SettingsIcon/>
                    </div>
                     <div className="topbarIconsContainer">
                            <LanguageIcon/>
                        <span className="topIconBadge">
                            2
                        </span>
                    </div>
            
                    <img src="https://i.ibb.co/f0kK5w2/IMG-20201121-232938-removebg-preview.png" alt="" className="topbarAvatar" />

                </div>
            </div>
            
        </div>
    );
};

export default Topbar;
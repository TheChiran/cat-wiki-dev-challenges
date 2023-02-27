import { Link, NavLink, To } from 'react-router-dom';

import './sidebar.scss';

type SidebarLink = {
    name: string;
    link?: string;
}

interface SidebarProps{
    headerText?: string;
    linkList?: SidebarLink [];
};

const Sidebar = ({linkList=[{name: 'colors', link: '/colors'},{ name: 'Buttons',link: '/buttons'}],...props}: SidebarProps)=>{
    return(
        <div className="sidebar">
            <div className="header-text-section">
                <h2 className="header-text-section__title-text">
                    <span className="focus-text">Dev</span>challenges.io
                </h2>
            </div>
            <div className="links-section">
                <ul className='links-section__links'>
                    {linkList.map((link: SidebarLink)=>{
                        return <li className='links-section__links__link'>
                            <NavLink to={link.link as To} 
                            className={({isActive})=> isActive ? 'active-link': ''}>{link.name}</NavLink>
                        </li>
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
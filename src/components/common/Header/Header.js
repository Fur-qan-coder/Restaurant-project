import React , {useState} from 'react';
import "./header.css";
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [menuList , setmenuList] = useState(false);
    const toogle = () => {setmenuList(!menuList) }
    const closeMenu = () => {setmenuList(false)}

    return (
    <nav>
        <div className='custom-container container-fluid'>
            <div className="navbar">
                <div className="logo-wraper">
                    <Link to='/'><h3>H<span>n</span>F<span>n</span></h3></Link>
                </div>
                <ul className={`mb-0 menu-list ${menuList ? 'menulist-active' : ''} `}>
                    <li><NavLink to='/' onClick={closeMenu}>Home</NavLink></li>
                    <li><NavLink to="/menu" onClick={closeMenu}>Menu</NavLink></li>
                    <li><NavLink to='/about' onClick={closeMenu}>About</NavLink></li>
                    <li><NavLink to='/contact-us' onClick={closeMenu}>Contact Us</NavLink></li>
                </ul>
                <div className="toogle-icon-wraper" onClick={toogle}>
                    <Link><FontAwesomeIcon icon={faBarsStaggered} /></Link>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Header;
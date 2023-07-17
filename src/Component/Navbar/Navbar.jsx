/* eslint-disable */
import React from 'react'
import './navbar.css'
import { NavLink } from 'react-router-dom'
// import hamburger_icon from '../../Assets/icons/bar_icon.svg'
const Navbar = () => {
    return (
        <>
            {/* <div className="container-fluid">
                <div className="row shadow">
                    <div className="col-lg-12">
                        <div className="navbar_main_h">
                            <div className="navbar_logo_h">
                                <div className="navbar-brand">
                                    <div className='company_name_h'><span className='A'>A</span>DDAX</div>
                                    <label htmlFor="hamburger">
                                        <img src={hamburger_icon} alt="bar_btn" className='hamburger_btn_h' />
                                    </label>
                                    <input type="checkbox" id='hamburger' />
                                </div>
                            </div>
                            <div className="navbar_list_h">
                                <ul className='item_list_h'>
                                    <li className='item'><Link>Home</Link></li>
                                    <li className='item'><Link>About</Link></li>
                                    <li className='item'><Link>Team</Link></li>
                                    <li className='item'><Link>Services</Link></li>
                                    <li className='item'><Link>Work</Link></li>
                                    <li className='item'><Link>Price</Link></li>
                                    <li className='item'><Link>Blog</Link></li>
                                    <li className='item'><Link>Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <nav className="navbar navbar-expand-lg shadow navbar_main_h">
                <div className="container">
                    <NavLink className="navbar-brand navbar_logo_h" href="#"><div className='logo_div_h'><span className='navbar_logo_text_h'>A</span>DDAX</div></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav navbar_ul_h mb-2 mb-lg-0 ">
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="active" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="active" to="/team">Team</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="active" to="/services">Services</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="active" to="/work">Work</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="active" to="/price">Price</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="active" to="/blog">Blog</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="active" to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
